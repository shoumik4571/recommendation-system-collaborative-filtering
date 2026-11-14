import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'TALVERIN ReelPulse — Collaborative Filtering Movie Recommendation Studio',
  description:
    'Personalized Movie Recommendation Engine powered by Matrix Factorization (SVD P × Qᵀ), Manual NumPy Cosine Similarity (User-User & Item-Item CF), and the Talverin UI Stack.',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#07070C',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Inter+Tight:wght@500;600;700&family=Bricolage+Grotesque:wght@600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#07070C] text-zinc-100 antialiased">
        {children}
        <Toaster
          theme="dark"
          richColors
          position="bottom-right"
          toastOptions={{
            style: {
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 12px 32px -8px rgba(0,0,0,0.65)',
            },
          }}
        />
      </body>
    </html>
  )
}
