import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SPORTS = [
  {
    key: 'football',
    title: 'Football',
    accent: 'from-emerald-400 to-cyan-400',
    emoji: '🏈',
    copy: 'Bracketed tournaments, team rosters, and live score posting.',
  },
  {
    key: 'basketball',
    title: 'Basketball',
    accent: 'from-fuchsia-500 to-purple-500',
    emoji: '🏀',
    copy: 'Court scheduling, seedings, and real‑time leaderboards.',
  },
  {
    key: 'tennis',
    title: 'Tennis',
    accent: 'from-amber-400 to-lime-400',
    emoji: '🎾',
    copy: 'Singles, doubles, round‑robin, and automated court assignments.',
  },
  {
    key: 'running',
    title: 'Running',
    accent: 'from-sky-400 to-indigo-500',
    emoji: '🏃‍♂️',
    copy: 'Wave starts, chip timing integrations, and live splits.',
  },
];

export default function SportsShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SPORTS.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const current = SPORTS[index];

  return (
    <section id="sports" className="relative overflow-hidden bg-background py-20 sm:py-28">
      {/* flowing mesh background */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Multi‑sport engine</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Switch sports in a blink</h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Purpose‑built flows for different sports. We adapt brackets, lanes, courts, or heats — your athletes just feel the speed.
          </p>
          {/* pill indicators */}
          <div className="mt-6 flex flex-wrap gap-2">
            {SPORTS.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setIndex(i)}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  i === index
                    ? 'border-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white'
                    : 'border-border bg-card text-foreground/80 hover:bg-muted'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Animated card */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/40 to-cyan-400/40 blur-xl" />
          <div className="relative overflow-hidden rounded-3xl border bg-card/80 p-6 backdrop-blur-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="flex items-center justify-between">
                  <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${current.accent} px-3 py-1 text-xs font-semibold text-white`}>
                    {current.title}
                  </div>
                  <div className="text-3xl">{current.emoji}</div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{current.copy}</p>

                {/* Futuristic diagram */}
                <div className="mt-6 h-48 w-full">
                  <svg viewBox="0 0 400 200" className="h-full w-full">
                    <defs>
                      <linearGradient id={`grad-${current.key}`} x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M10 150 C 80 50, 160 250, 230 120 S 360 40, 390 150"
                      fill="none"
                      stroke={`url(#grad-${current.key})`}
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      r="6"
                      fill="#fff"
                      stroke="url(#grad-football)"
                      strokeWidth="2"
                      initial={{ cx: 10, cy: 150 }}
                      animate={{ cx: 390, cy: 150 }}
                      transition={{ duration: 2.4, ease: 'easeInOut' }}
                    />
                    {/* nodes */}
                    {[70, 150, 230, 310].map((x, i) => (
                      <motion.circle
                        key={x}
                        cx={x}
                        cy={i % 2 === 0 ? 120 : 80}
                        r="4"
                        className="fill-white/70"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.15 }}
                      />
                    ))}
                  </svg>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
