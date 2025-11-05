import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles, CalendarDays, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const fallback = 'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode';
  const splineUrl = import.meta.env.VITE_SPLINE_URL || fallback;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene={splineUrl} style={{ width: '100%', height: '100%' }} />
        {/* Contrast/Atmosphere layers (won't block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-background/90" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(168,85,247,0.20),transparent),radial-gradient(40%_30%_at_20%_70%,rgba(34,211,238,0.18),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background" />
      </div>

      {/* NAV */}
      <div className="relative z-10">
        <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">PulseBook</span>
          </div>
          <div className="hidden items-center gap-6 text-white/90 md:flex">
            <a href="#sports" className="text-xs hover:text-white/100 transition">Sports</a>
            <a href="#pricing" className="text-xs hover:text-white/100 transition">Pricing</a>
            <a href="#cta" className="text-xs hover:text-white/100 transition">Get Started</a>
          </div>
          <a href="#cta" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow transition hover:shadow-lg">Launch App</a>
        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wider text-white/90 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
              Dark • Futuristic • Cyberwave
            </motion.span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Book, schedule, and launch events in a living 3D interface
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              A cyber‑futuristic platform where athletes glide through sign‑ups, organizers sculpt brackets in real‑time, and your brand feels alive.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                whileHover={{ y: -2, filter: 'brightness(1.15)' }}
                whileTap={{ scale: 0.98 }}
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20"
              >
                <Rocket className="h-4 w-4" /> Start Free Trial
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#sports"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
              >
                <Trophy className="h-4 w-4" /> Explore Sports
              </motion.a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-white/80">
              <div className="inline-flex items-center gap-2 text-sm">
                <CalendarDays className="h-4 w-4" /> Real‑time scheduling
              </div>
              <div className="h-1 w-1 rounded-full bg-white/40" />
              <div className="text-sm">No credit card required</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Neon Orbs + Scanlines (decor only, non-blocking) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-fuchsia-500/25 blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-48 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}
