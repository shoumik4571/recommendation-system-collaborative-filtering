'use client';

import { animate, motion, useMotionValue, useSpring, useTransform, useVelocity } from 'framer-motion';
import { useState } from 'react';

const DEFAULT_ITEMS = [
  { id: 'home', label: 'OTT Home' },
  { id: 'similar', label: 'Item Similarity' },
  { id: 'matrix', label: 'Utility Matrix' },
  { id: 'latent', label: 'SVD & Benchmarks' },
];

const CELL = 136;
const PILL_W = 128;
const PILL_H = 34;

export function GooeyNav({
  items = DEFAULT_ITEMS,
  value,
  onChange,
  dark = true,
  className = '',
}: {
  items?: { id: string; label: string }[];
  value?: string;
  onChange?: (id: string) => void;
  dark?: boolean;
  className?: string;
}) {
  const [internalIdx, setInternalIdx] = useState(0);
  const activeIdx =
    value !== undefined
      ? Math.max(0, items.findIndex((it) => it.id === value))
      : internalIdx;

  const x = useMotionValue(activeIdx * CELL);
  const vx = useVelocity(x);
  const stretchX = useTransform(vx, (v) => 1 + Math.min(Math.abs(v) / 900, 0.45));
  const tailX = useSpring(x, { stiffness: 110, damping: 16 });
  const tailSquash = useTransform(vx, (v) => Math.max(0.45, 1 - Math.abs(v) / 2200));

  const go = (i: number) => {
    setInternalIdx(i);
    if (onChange && items[i]) {
      onChange(items[i].id);
    }
    void animate(x, i * CELL, { type: 'spring', stiffness: 320, damping: 26 });
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <div
        className={`relative rounded-full border p-1 ${
          dark ? 'border-white/10 bg-white/[0.04]' : 'border-zinc-200 bg-white'
        }`}
      >
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <filter id="gooeyNavFilter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -8"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        <div className="absolute inset-0 z-0" style={{ filter: 'url(#gooeyNavFilter)' }}>
          <motion.div
            style={{ x, scaleX: stretchX, left: 8, top: 4, width: PILL_W, height: PILL_H }}
            className={`absolute rounded-full ${dark ? 'bg-[#E50914]' : 'bg-zinc-950'}`}
          />
          <motion.div
            style={{ x: tailX, scaleY: tailSquash, left: 32, top: 10, width: 48, height: 22 }}
            className={`absolute rounded-full ${dark ? 'bg-[#E50914]' : 'bg-zinc-950'}`}
          />
        </div>
        <div className="relative z-10 flex">
          {items.map((item, i) => {
            const isActive = i === activeIdx;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => go(i)}
                animate={{
                  color: isActive ? '#FFFFFF' : dark ? '#A1A1AA' : '#52525B',
                }}
                transition={{ duration: 0.2 }}
                style={{ width: CELL, height: PILL_H }}
                className="flex cursor-pointer items-center justify-center px-2 text-xs font-bold tracking-tight"
              >
                <span className="truncate">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
