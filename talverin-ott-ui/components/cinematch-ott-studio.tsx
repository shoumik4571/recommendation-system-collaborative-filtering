'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'sonner'
import { BorderBeam } from '@/components/magicui/border-beam'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Meteors } from '@/components/magicui/meteors'
import { DotPattern } from '@/components/magicui/dot-pattern'
import CountUp from '@/components/react-bits/CountUp'
import { GlowCard } from '@/components/anim/GlowCard'
import { GooeyNav } from '@/components/anim/GooeyNav'
import { ElasticToggle } from '@/components/anim/ElasticToggle'
import { FramerTiltCard } from '@/components/ui/skiper-ui/framer-showcase'
import { CINEMATCH_STATE, computeLiveRecommendations } from '@/lib/cinematch-offline-engine'
import {
  Award,
  Clapperboard,
  Compass,
  Cpu,
  Download,
  Eye,
  Film,
  Flame,
  Grid,
  Play,
  RotateCcw,
  Search,
  Sparkles,
  Star,
  Terminal,
  TrendingUp,
  UserCheck,
  Zap,
} from 'lucide-react'

const OTT_TABS = [
  { id: 'home', label: 'OTT Home' },
  { id: 'similar', label: 'Item Similarity' },
  { id: 'matrix', label: 'Utility Matrix' },
  { id: 'latent', label: 'SVD & Benchmarks' },
]

const ANCHOR_MOVIES = [
  { movieId: 13, label: 'Star Wars: Episode IV (1977)' },
  { movieId: 1, label: 'Toy Story (1995)' },
  { movieId: 16, label: 'The Matrix (1999)' },
  { movieId: 26, label: 'The Godfather (1972)' },
  { movieId: 37, label: 'Titanic (1997)' },
  { movieId: 47, label: 'Superbad (2007)' },
]

export default function CineMatchOttStudio() {
  const [activeTab, setActiveTab] = useState<string>('home')
  const [selectedUserId, setSelectedUserId] = useState<number>(101)
  const [algorithm, setAlgorithm] = useState<'svd' | 'user_cf' | 'item_cf' | 'cold_start'>('svd')
  const [anchorMovieId, setAnchorMovieId] = useState<number>(13)
  const [showReconstructedMatrix, setShowReconstructedMatrix] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedMovieModal, setSelectedMovieModal] = useState<any | null>(null)

  const initialUserMap = useMemo(() => {
    const map: Record<number, Record<number, number>> = {}
    for (const [uidStr, uObj] of Object.entries(CINEMATCH_STATE.users as Record<string, any>)) {
      const rMap: Record<number, number> = {}
      for (const item of uObj.watchHistory || []) {
        rMap[item.movieId] = item.rating
      }
      map[Number(uidStr)] = rMap
    }
    map[999] = {}
    return map
  }, [])

  const [userRatingsByProfile, setUserRatingsByProfile] = useState<Record<number, Record<number, number>>>(initialUserMap)

  const activeRatings = useMemo(
    () => userRatingsByProfile[selectedUserId] || {},
    [userRatingsByProfile, selectedUserId],
  )

  const activeProfileMeta = useMemo(() => {
    const found = (CINEMATCH_STATE.showcaseProfiles as any[]).find((p) => p.userId === selectedUserId)
    if (found) return found
    return {
      userId: selectedUserId,
      name: `User #${selectedUserId}`,
      subtitle: 'MovieLens Subscriber Profile',
      avatarColor: '#E50914',
      clusterName: 'Mixed Taste',
    }
  }, [selectedUserId])

  const activeUserBackend = useMemo(
    () => (CINEMATCH_STATE.users as Record<string, any>)[String(selectedUserId)] || null,
    [selectedUserId],
  )

  const topRecommendations = useMemo(
    () =>
      computeLiveRecommendations({
        userId: selectedUserId,
        customRatings: activeRatings,
        algorithm,
        topN: 5,
      }),
    [selectedUserId, activeRatings, algorithm],
  )

  const heroMovie = topRecommendations[0] || CINEMATCH_STATE.catalog[0]

  const itemSimilarMovies = useMemo(() => {
    const list = (CINEMATCH_STATE.itemSimMap as Record<string, any[]>)[String(anchorMovieId)] || []
    return list.map((item) => {
      const cat = (CINEMATCH_STATE.catalog as any[]).find((c) => c.movieId === item.movieId)
      return {
        ...cat,
        ...item,
      }
    })
  }, [anchorMovieId])

  const watchedList = useMemo(() => {
    const entries = Object.entries(activeRatings).filter(([, r]) => r > 0)
    return entries
      .map(([midStr, rating]) => {
        const movie = (CINEMATCH_STATE.catalog as any[]).find((c) => c.movieId === Number(midStr))
        return movie ? { ...movie, userRating: rating } : null
      })
      .filter(Boolean)
      .sort((a: any, b: any) => b.userRating - a.userRating)
  }, [activeRatings])

  const filteredCatalog = useMemo(() => {
    const list = (CINEMATCH_STATE.catalog as any[]).slice(0, 56)
    if (!searchQuery.trim()) return list.slice(0, 12)
    const q = searchQuery.toLowerCase()
    return list.filter(
      (m) => m.title.toLowerCase().includes(q) || m.genresStr.toLowerCase().includes(q) || m.clusterName.toLowerCase().includes(q),
    )
  }, [searchQuery])

  const handleRateMovie = (movieId: number, stars: number, title: string) => {
    setUserRatingsByProfile((prev) => {
      const currentProfile = { ...(prev[selectedUserId] || {}) }
      if (stars === 0) {
        delete currentProfile[movieId]
      } else {
        currentProfile[movieId] = stars
      }
      return {
        ...prev,
        [selectedUserId]: currentProfile,
      }
    })
    if (stars > 0) {
      toast.success(`Rated "${title}" ${stars.toFixed(1)}★`, {
        description: `Recomputed User #${selectedUserId}'s SVD P × Qᵀ recommendations`,
      })
    } else {
      toast.info(`Removed rating for "${title}"`)
    }
  }

  const handleResetProfile = () => {
    setUserRatingsByProfile(initialUserMap)
    toast.info(`Reset User #${selectedUserId} watch history to original MovieLens logs`)
  }

  const handleExportRecommendations = () => {
    const payload = {
      userId: selectedUserId,
      profileName: activeProfileMeta.name,
      algorithmUsed: algorithm,
      sparsityRatioPct: CINEMATCH_STATE.metrics.dataset_stats.sparsity_ratio_pct,
      top5Recommendations: topRecommendations.slice(0, 5).map((r: any) => ({
        rank: r.rank,
        movieId: r.movieId,
        title: r.title,
        genres: r.genresStr,
        predictedRating: r.predicted_rating,
        matchPct: r.matchPct,
        strategy: r.strategy,
      })),
    }
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `talverin_reelpulse_user_${selectedUserId}_recommendations.json`
    a.click()
    toast.success(`Exported talverin_reelpulse_user_${selectedUserId}_recommendations.json`)
  }

  return (
    <div className="min-h-screen w-full bg-[#07070C] font-sans text-zinc-100 selection:bg-[#E50914] selection:text-white">
      {/* Subtle Theater Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 size-[520px] rounded-full bg-[#E50914]/10 blur-[150px]" />
        <div className="absolute right-0 top-1/3 size-[460px] rounded-full bg-[#F59E0B]/8 blur-[160px]" />
        <DotPattern className="opacity-[0.08] [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]" />
      </div>

      {/* =====================================================================
          TOP WIDESCREEN OTT STREAMING HEADER BAR
          ===================================================================== */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07070C]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3.5">
          {/* Left: Cinema Brand */}
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#E50914] to-[#991B1B] shadow-[0_0_24px_rgba(229,9,20,0.45)]">
              <Clapperboard className="size-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-wider text-white">TALVERIN REELPULSE</span>
                <span className="rounded bg-[#E50914]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-400 border border-[#E50914]/30">
                  OTT STREAMING AI
                </span>
              </div>
              <span className="block text-[11px] text-zinc-400">
                Personalized Movie Recommendation Engine • Cosine CF &amp; SVD Matrix Factorization
              </span>
            </div>
          </div>

          {/* Center: Clean 4-Tab Gooey Navigation */}
          <GooeyNav
            items={OTT_TABS}
            value={activeTab}
            onChange={setActiveTab}
            dark
          />

          {/* Right: Export CTA */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleResetProfile}
              className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/10 transition"
            >
              <RotateCcw className="size-3.5" /> Reset Ratings
            </button>
            <button
              type="button"
              onClick={handleExportRecommendations}
              className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#E50914] px-4 py-2 text-xs font-bold text-white shadow-[0_4px_16px_rgba(229,9,20,0.35)] hover:brightness-110 transition"
            >
              <Download className="size-3.5" /> Export Top-5
            </button>
          </div>
        </div>

        {/* Secondary Control Bar: "Who's Watching?" Subscriber Switcher & Algorithm Selector */}
        <div className="border-t border-white/5 bg-[#0C0C14]/90">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2.5">
            {/* Profile Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mr-1">
                Who&apos;s Watching:
              </span>
              {(CINEMATCH_STATE.showcaseProfiles as any[]).map((prof) => {
                const active = selectedUserId === prof.userId
                return (
                  <button
                    key={prof.userId}
                    type="button"
                    onClick={() => {
                      setSelectedUserId(prof.userId)
                      if (prof.userId === 999) {
                        setAlgorithm('cold_start')
                      } else if (algorithm === 'cold_start') {
                        setAlgorithm('svd')
                      }
                      toast.info(`Switched to ${prof.name}`)
                    }}
                    className={`flex cursor-pointer items-center gap-2 rounded-full px-3 py-1 text-xs font-bold transition-all ${
                      active
                        ? 'bg-white text-black shadow-[0_0_16px_rgba(255,255,255,0.25)]'
                        : 'bg-white/5 text-zinc-300 hover:bg-white/10'
                    }`}
                  >
                    <span
                      className="size-2 rounded-full"
                      style={{ backgroundColor: prof.avatarColor }}
                    />
                    <span>{prof.userId === 999 ? 'User #999 (Cold-Start)' : `User #${prof.userId} (${prof.clusterName.split(' ')[0]})`}</span>
                  </button>
                )
              })}
            </div>

            {/* Algorithm Pills */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mr-1">
                Engine:
              </span>
              {[
                { id: 'svd', label: 'SVD (P × Qᵀ)' },
                { id: 'user_cf', label: 'User-User Cosine' },
                { id: 'item_cf', label: 'Item-Item Cosine' },
                { id: 'cold_start', label: 'Cold-Start Hybrid' },
              ].map((alg) => (
                <button
                  key={alg.id}
                  type="button"
                  onClick={() => setAlgorithm(alg.id as any)}
                  className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                    algorithm === alg.id
                      ? 'bg-amber-400 text-black font-bold'
                      : 'bg-white/5 text-zinc-400 hover:text-white'
                  }`}
                >
                  {alg.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================================
          MAIN WIDESCREEN OTT CONTENT CONTAINER (MAX-W-7XL, SPACIOUS LAYOUT)
          ===================================================================== */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        {/* ===================================================================
            TAB 1: OTT HOME — HERO BILLBOARD, TOP-5 PICKS & RATING SANDBOX
            =================================================================== */}
        {activeTab === 'home' && (
          <BlurFade delay={0.04}>
            <div className="space-y-10">
              {/* WIDESCREEN HERO BILLBOARD */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-[#16070B] via-[#140D1C] to-[#0B101E] p-8 md:p-10 shadow-2xl">
                <Meteors number={10} />
                <BorderBeam size={260} duration={14} colorFrom="#E50914" colorTo="#F59E0B" />

                <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E50914] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                        <Flame className="size-3.5" /> #1 Personalized Match
                      </span>
                      <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3.5 py-1 font-mono text-xs font-bold text-emerald-300">
                        {heroMovie.matchPct || 95}% Taste Match • Predicted {heroMovie.predicted_rating}★
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-amber-300">
                        {heroMovie.strategy}
                      </span>
                    </div>

                    <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                      {heroMovie.title}
                    </h1>

                    <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
                      {heroMovie.explanation}. Generated by <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-amber-300">recommendmovies({selectedUserId})</code> for <strong>{activeProfileMeta.name}</strong> ({activeProfileMeta.subtitle}).
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {(heroMovie.genres || []).map((g: string) => (
                        <span
                          key={g}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200"
                        >
                          {g}
                        </span>
                      ))}
                      <span className="rounded-lg bg-black/50 px-3 py-1 font-mono text-xs text-zinc-400">
                        MovieLens Avg: {heroMovie.avgRating}★ ({heroMovie.ratingCount} ratings)
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <ShimmerButton
                        onClick={() => setSelectedMovieModal(heroMovie)}
                        className="h-11 px-6 text-xs font-bold"
                      >
                        <span className="flex items-center gap-2">
                          <Play className="size-4 fill-current" /> Inspect Latent Vector (P × Qᵀ)
                        </span>
                      </ShimmerButton>

                      <button
                        type="button"
                        onClick={() => handleRateMovie(heroMovie.movieId, 5.0, heroMovie.title)}
                        className="flex cursor-pointer items-center gap-2 rounded-xl border border-amber-400/40 bg-amber-500/15 px-5 py-2.5 text-xs font-bold text-amber-300 hover:bg-amber-500/25 transition"
                      >
                        <Star className="size-4 fill-amber-400 text-amber-400" /> Rate 5.0★ (Mark Watched)
                      </button>
                    </div>
                  </div>

                  {/* Right Box: Clean SVD Formula Card */}
                  <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-md space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        SVD Matrix Prediction
                      </span>
                      <span className="font-mono text-xs text-zinc-400">r̂ = μ + b_u + b_i + P·Qᵀ</span>
                    </div>
                    <div className="space-y-2.5 font-mono text-xs">
                      <div className="flex justify-between text-zinc-400">
                        <span>Global Mean (μ):</span>
                        <span className="text-white">{CINEMATCH_STATE.globalMean.toFixed(2)}★</span>
                      </div>
                      <div className="flex justify-between text-zinc-400">
                        <span>Movie Bias (b_i):</span>
                        <span className="text-emerald-400">
                          {heroMovie.bias >= 0 ? `+${heroMovie.bias.toFixed(3)}` : heroMovie.bias.toFixed(3)}
                        </span>
                      </div>
                      <div className="flex justify-between text-zinc-400">
                        <span>Latent Dot Product (P_u · Q_iᵀ):</span>
                        <span className="text-amber-400">
                          {heroMovie.dotProduct !== undefined
                            ? heroMovie.dotProduct >= 0
                              ? `+${heroMovie.dotProduct}`
                              : heroMovie.dotProduct
                            : '+0.420'}
                        </span>
                      </div>
                      <div className="border-t border-white/10 pt-3 flex items-center justify-between font-sans">
                        <span className="text-xs font-bold text-zinc-300">Predicted Rating:</span>
                        <span className="rounded-lg bg-[#E50914] px-3 py-1 font-mono text-sm font-black text-white">
                          {heroMovie.predicted_rating} / 5.00 ★
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOP-5 PERSONALIZED RECOMMENDATIONS ROW (recommendmovies(userid)) */}
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="flex items-center gap-2.5 text-xl font-black tracking-tight text-white">
                      <Sparkles className="size-5 text-[#E50914]" />
                      Top-5 Recommended Movies For You — <code className="font-mono text-base text-amber-400">recommendmovies({selectedUserId})</code>
                    </h2>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      Highest predicted unwatched titles for {activeProfileMeta.name}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                  {topRecommendations.map((movie: any) => (
                    <FramerTiltCard key={movie.movieId} className="h-full">
                      <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#101018] p-4 transition-all hover:border-[#E50914]/60 hover:shadow-[0_12px_32px_rgba(229,9,20,0.2)]">
                        <div>
                          {/* Cinema Poster Art Header */}
                          <div
                            className={`relative mb-4 flex h-44 flex-col justify-between rounded-xl bg-gradient-to-br ${movie.gradient} p-4 shadow-inner`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="rounded-lg bg-black/75 px-2.5 py-1 font-mono text-xs font-black text-amber-400">
                                TOP #{movie.rank}
                              </span>
                              <span className="rounded-lg bg-emerald-400 px-2.5 py-1 font-mono text-xs font-black text-black">
                                {movie.predicted_rating}★
                              </span>
                            </div>

                            <div>
                              <span className="inline-block rounded bg-black/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/90">
                                {movie.clusterName}
                              </span>
                              <h3 className="mt-1.5 text-base font-black leading-snug text-white drop-shadow">
                                {movie.shortTitle}
                              </h3>
                            </div>
                          </div>

                          <div className="mb-2 flex items-center justify-between text-xs">
                            <span className="font-bold text-emerald-400">{movie.matchPct}% Match</span>
                            <span className="font-mono text-zinc-400">{movie.year}</span>
                          </div>

                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {(movie.genres || []).slice(0, 3).map((g: string) => (
                              <span
                                key={g}
                                className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                              >
                                {g}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2.5 border-t border-white/10 pt-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] text-zinc-400">Quick Rate:</span>
                            <div className="flex items-center gap-1">
                              {[3, 4, 5].map((starVal) => (
                                <button
                                  key={starVal}
                                  type="button"
                                  onClick={() => handleRateMovie(movie.movieId, starVal, movie.title)}
                                  className="cursor-pointer rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] font-bold text-amber-400 hover:bg-amber-400 hover:text-black transition"
                                >
                                  {starVal}★
                                </button>
                              ))}
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => setSelectedMovieModal(movie)}
                            className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-white/5 py-2 text-xs font-semibold text-zinc-200 hover:bg-[#E50914] hover:text-white transition"
                          >
                            <Eye className="size-3.5" /> Inspect Latent Vector
                          </button>
                        </div>
                      </div>
                    </FramerTiltCard>
                  ))}
                </div>
              </section>

              {/* WATCH HISTORY & INTERACTIVE RATING SANDBOX */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                {/* Left 5 cols: Active User's Watch History */}
                <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0E0E16] p-6 space-y-4">
                  <div>
                    <h3 className="text-base font-black text-white flex items-center gap-2">
                      <UserCheck className="size-4 text-emerald-400" />
                      User #{selectedUserId}&apos;s Watch History ({watchedList.length} Rated Movies)
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      Past ratings used to learn User #{selectedUserId}&apos;s latent preference vector
                    </p>
                  </div>

                  {watchedList.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-sky-400/40 bg-sky-500/10 p-6 text-center">
                      <p className="text-sm font-bold text-sky-300">
                        Cold-Start New Subscriber (0 Past Ratings)
                      </p>
                      <p className="mt-1.5 text-xs text-zinc-300">
                        Talverin ReelPulse is currently serving Bayesian IMDB-Weighted Popularity recommendations. Rate any movie on the right to immediately personalize!
                      </p>
                    </div>
                  ) : (
                    <div className="max-h-[310px] space-y-2 overflow-y-auto pr-1">
                      {watchedList.map((item: any) => (
                        <div
                          key={item.movieId}
                          className="flex items-center justify-between rounded-xl border border-white/5 bg-black/40 px-3.5 py-2.5"
                        >
                          <div className="min-w-0 flex-1 pr-3">
                            <div className="truncate text-xs font-bold text-white">{item.title}</div>
                            <div className="text-[11px] text-zinc-400">{item.genresStr}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="rounded-md bg-amber-400/20 px-2.5 py-1 font-mono text-xs font-black text-amber-300">
                              {item.userRating.toFixed(1)}★
                            </span>
                            <button
                              type="button"
                              onClick={() => handleRateMovie(item.movieId, 0, item.title)}
                              className="cursor-pointer rounded-md bg-white/5 px-2 py-1 text-xs text-zinc-400 hover:bg-rose-500/20 hover:text-rose-300"
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right 7 cols: Interactive Movie Rating Sandbox */}
                <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0E0E16] p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-black text-white flex items-center gap-2">
                        <Zap className="size-4 text-amber-400" />
                        Live Rating Sandbox — Rate Any Movie (1★ to 5★)
                      </h3>
                      <p className="mt-1 text-xs text-zinc-400">
                        Click a star rating below to update User #{selectedUserId}&apos;s Utility Matrix row and re-rank Top-5 picks live
                      </p>
                    </div>
                    <div className="relative w-64">
                      <Search className="pointer-events-none absolute left-3 top-2.5 size-4 text-zinc-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search movie title or genre..."
                        className="w-full rounded-xl border border-white/15 bg-black/60 py-2 pl-9 pr-3 text-xs text-white placeholder:text-zinc-500 focus:border-[#E50914] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 max-h-[310px] overflow-y-auto pr-1">
                    {filteredCatalog.map((m: any) => {
                      const currentR = activeRatings[m.movieId] || 0
                      return (
                        <div
                          key={m.movieId}
                          className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-3"
                        >
                          <div className="min-w-0 flex-1 pr-2">
                            <div className="truncate text-xs font-bold text-white">{m.shortTitle}</div>
                            <div className="text-[11px] text-zinc-400">{m.clusterName}</div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <button
                                key={s}
                                type="button"
                                onClick={() => handleRateMovie(m.movieId, s, m.title)}
                                className={`size-6.5 cursor-pointer rounded-md font-mono text-xs font-bold transition ${
                                  currentR >= s
                                    ? 'bg-amber-400 text-black'
                                    : 'bg-white/5 text-zinc-400 hover:bg-white/15'
                                }`}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        )}

        {/* ===================================================================
            TAB 2: ITEM-ITEM & USER-USER COSINE SIMILARITY (PHASE 2)
            =================================================================== */}
        {activeTab === 'similar' && (
          <BlurFade delay={0.04}>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-[#0E0E16] p-7 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Phase 2 • Memory-Based Collaborative Filtering
                    </span>
                    <h2 className="mt-1 text-2xl font-black text-white flex items-center gap-2.5">
                      <Film className="size-6 text-[#E50914]" />
                      &ldquo;Because You Liked...&rdquo; — Item-Item Cosine Similarity
                    </h2>
                    <p className="mt-1 text-xs text-zinc-400">
                      Manual NumPy Cosine Similarity <code className="font-mono text-amber-300">sim(A, B) = (A · B) / (||A||₂ ||B||₂)</code> computed across 400 user rating vectors
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {ANCHOR_MOVIES.map((am) => (
                      <button
                        key={am.movieId}
                        type="button"
                        onClick={() => setAnchorMovieId(am.movieId)}
                        className={`cursor-pointer rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                          anchorMovieId === am.movieId
                            ? 'bg-[#E50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]'
                            : 'bg-white/5 text-zinc-300 hover:bg-white/10'
                        }`}
                      >
                        {am.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {itemSimilarMovies.map((simItem: any, idx: number) => (
                    <div
                      key={simItem.movieId}
                      className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/50 p-5 hover:border-amber-400/50 transition"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="rounded-lg bg-white/10 px-2.5 py-1 font-mono text-xs font-bold text-zinc-300">
                            Match #{idx + 1}
                          </span>
                          <span className="rounded-lg bg-amber-500/20 border border-amber-400/40 px-3 py-1 font-mono text-xs font-black text-amber-300">
                            Cosine = {simItem.cosine_similarity.toFixed(4)}
                          </span>
                        </div>
                        <h4 className="text-base font-black text-white">{simItem.title}</h4>
                        <p className="mt-1 text-xs text-zinc-400">{simItem.genres}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex justify-between text-[11px] text-zinc-400 mb-1.5">
                          <span>Vector Cosine Alignment</span>
                          <span className="font-mono text-white">{Math.round(simItem.cosine_similarity * 100)}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#E50914] to-amber-400"
                            style={{ width: `${Math.min(100, Math.round(simItem.cosine_similarity * 165))}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* User-User Similarity Neighbors */}
              {activeUserBackend?.similarUsers && (
                <div className="rounded-3xl border border-white/10 bg-[#0E0E16] p-7 space-y-4">
                  <h3 className="text-lg font-black text-white">
                    User-User Collaborative Filtering — Closest Taste Twins for User #{selectedUserId}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Top-5 subscribers whose mean-centered rating vectors have the highest Cosine Similarity with User #{selectedUserId}:
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
                    {activeUserBackend.similarUsers.map((nb: any, i: number) => (
                      <div
                        key={nb.userId}
                        className="rounded-2xl border border-white/10 bg-black/50 p-4 text-center space-y-1.5"
                      >
                        <span className="text-[10px] font-mono uppercase text-zinc-400">Neighbor #{i + 1}</span>
                        <div className="text-base font-black text-white">User #{nb.userId}</div>
                        <div className="text-xs text-zinc-400">{nb.occupation}</div>
                        <div className="pt-1 font-mono text-sm font-black text-emerald-400">
                          cos = {nb.cosineSimilarity}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </BlurFade>
        )}

        {/* ===================================================================
            TAB 3: UTILITY MATRIX & SPARSITY LAB (PHASE 1 EDA)
            =================================================================== */}
        {activeTab === 'matrix' && (
          <BlurFade delay={0.04}>
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <GlowCard className="rounded-2xl border border-white/10 bg-[#0E0E16]">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Utility Matrix Shape
                  </span>
                  <div className="mt-1 text-2xl font-black text-white">400 × 350</div>
                  <p className="mt-1 text-xs text-zinc-400">140,000 Total User-Movie Cells</p>
                </GlowCard>

                <GlowCard className="rounded-2xl border border-white/10 bg-[#0E0E16]">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Matrix Sparsity Ratio
                  </span>
                  <div className="mt-1 text-2xl font-black text-amber-400">
                    <CountUp to={92.63} decimals={2} suffix="%" />
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">129,679 Empty (NaN) vs. 10,321 Rated</p>
                </GlowCard>

                <GlowCard className="rounded-2xl border border-white/10 bg-[#0E0E16]">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    Long-Tail Concentration
                  </span>
                  <div className="mt-1 text-2xl font-black text-rose-400">Top 16% = 64%</div>
                  <p className="mt-1 text-xs text-zinc-400">56 Head Hits capture 64% of all votes</p>
                </GlowCard>

                <GlowCard className="rounded-2xl border border-white/10 bg-[#0E0E16]">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Rating Positivity Bias
                  </span>
                  <div className="mt-1 text-2xl font-black text-emerald-400">3.74★ Mean</div>
                  <p className="mt-1 text-xs text-zinc-400">66%+ of ratings are 4.0★, 4.5★, or 5.0★</p>
                </GlowCard>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0E0E16] p-7 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-black text-white flex items-center gap-2">
                      <Grid className="size-5 text-[#E50914]" />
                      User–Movie Utility Matrix Slice (Users #101–#110 × 12 Iconic Movies)
                    </h2>
                    <p className="mt-1 text-xs text-zinc-400">
                      Flip the switch to reconstruct every missing <code className="font-mono text-rose-400">NaN</code> cell using <code className="font-mono text-emerald-300">R̂ = μ + b_u + b_i + P × Qᵀ</code>
                    </p>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 px-4 py-2.5">
                    <span className="text-xs font-bold text-white">
                      {showReconstructedMatrix ? 'Dense SVD Reconstructed Matrix (P × Qᵀ)' : 'Raw Sparse Utility Matrix (92.63% NaN)'}
                    </span>
                    <ElasticToggle
                      checked={showReconstructedMatrix}
                      onChange={setShowReconstructedMatrix}
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left font-mono text-xs">
                    <thead>
                      <tr className="border-b border-white/10 bg-black/50 text-[11px] text-zinc-400">
                        <th className="p-3 font-bold text-white">User ID</th>
                        {CINEMATCH_STATE.utilitySlice[0].cells.map((c: any) => (
                          <th key={c.movieId} className="p-2.5 text-center font-semibold text-zinc-300">
                            <div className="max-w-[90px] truncate" title={c.movieTitle}>
                              {c.movieTitle}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(CINEMATCH_STATE.utilitySlice as any[]).map((row) => (
                        <tr key={row.userId} className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="p-3 font-bold text-amber-400">User #{row.userId}</td>
                          {row.cells.map((cell: any) => {
                            const hasObserved = cell.observed !== null
                            return (
                              <td key={cell.movieId} className="p-2 text-center">
                                {hasObserved ? (
                                  <span className="inline-block w-14 rounded-lg bg-emerald-500/20 border border-emerald-400/50 py-1 font-bold text-emerald-300">
                                    {cell.observed.toFixed(1)}★
                                  </span>
                                ) : showReconstructedMatrix ? (
                                  <span className="inline-block w-14 rounded-lg bg-[#E50914]/20 border border-[#E50914]/40 py-1 font-semibold text-rose-300">
                                    {cell.predicted.toFixed(2)}★
                                  </span>
                                ) : (
                                  <span className="inline-block w-14 rounded-lg bg-white/[0.03] py-1 text-[11px] text-zinc-600">
                                    NaN
                                  </span>
                                )}
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#0E0E16] p-6 space-y-4">
                  <h3 className="text-base font-black text-white flex items-center gap-2">
                    <TrendingUp className="size-4 text-[#E50914]" />
                    The &ldquo;Long Tail&rdquo; Movie Popularity Distribution
                  </h3>
                  <div className="flex h-52 items-end gap-1 rounded-2xl border border-white/5 bg-black/50 p-4">
                    {(CINEMATCH_STATE.longTailCurve as any[]).slice(0, 75).map((pt) => (
                      <div
                        key={pt.movieId}
                        title={`${pt.title}: ${pt.count} ratings`}
                        className={`flex-1 rounded-t ${
                          pt.isHead ? 'bg-gradient-to-t from-[#E50914] to-amber-400' : 'bg-zinc-700'
                        }`}
                        style={{ height: `${Math.max(6, Math.round((pt.count / 170) * 100))}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs font-mono text-zinc-400">
                    <span className="text-rose-400">← Head Blockbusters (Top 56 Movies)</span>
                    <span>Long-Tail Niche Movies (294 Movies) →</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#0E0E16] p-6 space-y-4">
                  <h3 className="text-base font-black text-white flex items-center gap-2">
                    <Star className="size-4 text-amber-400" />
                    Distribution of User Star Ratings (1.0★ to 5.0★)
                  </h3>
                  <div className="space-y-2.5 pt-1">
                    {(CINEMATCH_STATE.ratingDistribution as any[]).map((r) => (
                      <div key={r.rating} className="flex items-center gap-3 text-xs">
                        <span className="w-12 font-mono font-bold text-amber-400">{r.rating}</span>
                        <div className="flex-1 h-4 overflow-hidden rounded-lg bg-white/5">
                          <div
                            className="h-full rounded-lg bg-gradient-to-r from-[#E50914] to-amber-400"
                            style={{ width: `${Math.min(100, r.pct * 3.2)}%` }}
                          />
                        </div>
                        <span className="w-24 text-right font-mono text-xs text-zinc-300">
                          {r.count.toLocaleString()} ({r.pct}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        )}

        {/* ===================================================================
            TAB 4: 2D LATENT TASTE GALAXY, RMSE BENCHMARKS & DEMO OUTPUT
            =================================================================== */}
        {activeTab === 'latent' && (
          <BlurFade delay={0.04}>
            <div className="space-y-8">
              {/* 3 Model Comparison Cards */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                {(CINEMATCH_STATE.metrics.model_comparison as any[]).map((m, idx) => {
                  const isWinner = idx === 2
                  return (
                    <div
                      key={m.model}
                      className={`rounded-3xl border p-6 ${
                        isWinner
                          ? 'border-amber-400/60 bg-gradient-to-b from-[#E50914]/15 to-[#0E0E16]'
                          : 'border-white/10 bg-[#0E0E16]'
                      }`}
                    >
                      {isWinner && (
                        <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-0.5 text-[10px] font-black uppercase text-black">
                          <Award className="size-3" /> Best Model (SVD Wins)
                        </span>
                      )}
                      <h3 className="text-base font-black text-white">{m.model}</h3>

                      <div className="mt-4 grid grid-cols-3 gap-2.5 text-center font-mono">
                        <div className="rounded-xl bg-black/50 p-3 border border-white/5">
                          <span className="block text-[10px] text-zinc-400">Test RMSE</span>
                          <span className="text-lg font-black text-emerald-400">{m.rmse.toFixed(4)}</span>
                        </div>
                        <div className="rounded-xl bg-black/50 p-3 border border-white/5">
                          <span className="block text-[10px] text-zinc-400">Precision@5</span>
                          <span className="text-lg font-black text-amber-400">
                            {(m.precision_at_5 * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="rounded-xl bg-black/50 p-3 border border-white/5">
                          <span className="block text-[10px] text-zinc-400">Precision@10</span>
                          <span className="text-lg font-black text-sky-400">
                            {(m.precision_at_10 * 100).toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 2D Latent Space + SVD k-tuning */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-[#0E0E16] p-6 space-y-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Compass className="size-5 text-amber-400" />
                    2D Latent Feature Space — Item Embeddings (Q)
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Dimension 1 separates <strong>Action &amp; Sci-Fi (+X)</strong> from <strong>Romance &amp; Drama (-X)</strong>; Dimension 2 separates <strong>Serious Crime (+Y)</strong> from <strong>Family Animation &amp; Comedy (-Y)</strong>.
                  </p>

                  <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07070C] p-4">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/15" />
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white/15" />

                    <span className="absolute right-3 top-1/2 -translate-y-6 rounded bg-black/80 px-2.5 py-1 font-mono text-[10px] font-bold text-rose-400">
                      +Dim 1: Sci-Fi &amp; Action →
                    </span>
                    <span className="absolute left-3 top-1/2 -translate-y-6 rounded bg-black/80 px-2.5 py-1 font-mono text-[10px] font-bold text-pink-400">
                      ← -Dim 1: Romance &amp; Drama
                    </span>
                    <span className="absolute left-1/2 top-3 -translate-x-1/2 rounded bg-black/80 px-2.5 py-1 font-mono text-[10px] font-bold text-purple-400">
                      ↑ +Dim 2: Serious Crime &amp; Thriller
                    </span>
                    <span className="absolute left-1/2 bottom-3 -translate-x-1/2 rounded bg-black/80 px-2.5 py-1 font-mono text-[10px] font-bold text-amber-400">
                      ↓ -Dim 2: Family Animation &amp; Comedy
                    </span>

                    {(CINEMATCH_STATE.catalog as any[]).slice(0, 32).map((m) => {
                      const xRaw = m.qVec[0] || 0
                      const yRaw = m.qVec[1] || 0
                      const leftPct = Math.min(92, Math.max(8, 50 + xRaw * 28))
                      const topPct = Math.min(90, Math.max(10, 50 - yRaw * 28))
                      const dotColors: Record<number, string> = {
                        0: '#F59E0B',
                        1: '#E50914',
                        2: '#A855F7',
                        3: '#EC4899',
                        4: '#10B981',
                      }
                      return (
                        <button
                          key={m.movieId}
                          type="button"
                          onClick={() => setSelectedMovieModal(m)}
                          style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                          className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        >
                          <div
                            className="size-3.5 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-150"
                            style={{ backgroundColor: dotColors[m.cluster] || '#fff' }}
                          />
                          <span className="pointer-events-none mt-1 block whitespace-nowrap rounded bg-black/85 px-1.5 py-0.5 text-[10px] font-bold text-zinc-200">
                            {m.shortTitle}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-[#0E0E16] p-6 space-y-4">
                  <h3 className="text-base font-black text-white flex items-center gap-2">
                    <Cpu className="size-4 text-[#E50914]" />
                    SVD Rank-k Tuning
                  </h3>
                  <div className="space-y-2.5">
                    {(CINEMATCH_STATE.metrics.svd_k_tuning as any[]).map((row) => {
                      const isBest = row.k_factors === CINEMATCH_STATE.metrics.best_k
                      return (
                        <div
                          key={row.k_factors}
                          className={`flex items-center justify-between rounded-xl border p-3 font-mono text-xs ${
                            isBest
                              ? 'border-emerald-400/50 bg-emerald-500/15 text-emerald-300 font-bold'
                              : 'border-white/5 bg-black/40 text-zinc-300'
                          }`}
                        >
                          <span>k = {row.k_factors} Factors</span>
                          <span>
                            RMSE = {row.test_rmse.toFixed(4)} {isBest && '★ BEST'}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Terminal className="size-3.5" /> Official Demo Log Output
                    </h4>
                    <pre className="max-h-48 overflow-auto rounded-xl border border-white/10 bg-black/80 p-3 font-mono text-[10px] leading-relaxed text-emerald-300">
                      {CINEMATCH_STATE.demoLog}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        )}
      </main>

      {/* =====================================================================
          MODAL: MOVIE LATENT VECTOR INSPECTOR
          ===================================================================== */}
      <AnimatePresence>
        {selectedMovieModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMovieModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-[#11111A] p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="rounded bg-[#E50914] px-2.5 py-0.5 text-[10px] font-black uppercase text-white">
                    SVD Item Embedding Q[{selectedMovieModal.movieId}]
                  </span>
                  <h3 className="mt-2 text-xl font-black text-white">{selectedMovieModal.title}</h3>
                  <p className="text-xs text-zinc-400">{selectedMovieModal.genresStr}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedMovieModal(null)}
                  className="cursor-pointer rounded-lg bg-white/10 px-3 py-1 text-xs font-bold text-white hover:bg-white/20"
                >
                  Close
                </button>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/50 p-4 space-y-2 font-mono text-xs">
                <div className="text-amber-400 font-bold">5-Factor Dense Latent Vector Q_i:</div>
                <div className="grid grid-cols-5 gap-2 pt-1">
                  {(selectedMovieModal.qVec || [0, 0, 0, 0, 0]).map((v: number, idx: number) => (
                    <div key={idx} className="rounded bg-white/5 p-2 text-center">
                      <span className="block text-[9px] text-zinc-400">Dim {idx + 1}</span>
                      <span className="font-bold text-white">{v.toFixed(3)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handleRateMovie(selectedMovieModal.movieId, 5.0, selectedMovieModal.title)
                    setSelectedMovieModal(null)
                  }}
                  className="cursor-pointer rounded-xl bg-[#E50914] px-4 py-2 text-xs font-bold text-white hover:brightness-110"
                >
                  Rate 5.0★ &amp; Recompute Matrix
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
