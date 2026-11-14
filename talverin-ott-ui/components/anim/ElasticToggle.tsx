'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export function ElasticToggle({
  checked,
  onChange,
  className = '',
}: {
  checked?: boolean;
  onChange?: (val: boolean) => void;
  className?: string;
}) {
  const [internalOn, setInternalOn] = useState(false);
  const on = checked !== undefined ? checked : internalOn;
  const stretch = useAnimationControls();

  const toggle = () => {
    const next = !on;
    setInternalOn(next);
    if (onChange) onChange(next);
    void stretch.start({
      scaleX: [1, 1.38, 1],
      scaleY: [1, 0.8, 1],
      transition: { duration: 0.42, times: [0, 0.45, 1], ease: 'easeOut' },
    });
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label="Elastic toggle"
      onClick={toggle}
      className={`cursor-pointer outline-none ${className}`}
    >
      <motion.span
        animate={{ backgroundColor: on ? '#E50914' : '#27272a' }}
        transition={{ duration: 0.22 }}
        className="block h-7 w-13 rounded-full p-1 border border-white/15"
      >
        <motion.span
          animate={{ x: on ? 22 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          className="block size-5"
        >
          <motion.span
            animate={stretch}
            className="relative flex size-5 items-center justify-center rounded-full bg-white shadow-sm"
          >
            <motion.span
              animate={{ opacity: on ? 0 : 1, scale: on ? 0.5 : 1, rotate: on ? -90 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center text-zinc-600"
            >
              <Sun size={11} strokeWidth={2.5} />
            </motion.span>
            <motion.span
              animate={{ opacity: on ? 1 : 0, scale: on ? 1 : 0.5, rotate: on ? 0 : 90 }}
              transition={{ duration: 0.2 }}
              className="absolute flex items-center justify-center text-zinc-950"
            >
              <Moon size={11} strokeWidth={2.5} />
            </motion.span>
          </motion.span>
        </motion.span>
      </motion.span>
    </button>
  );
}
