import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const splineUrl = import.meta.env.VITE_SPLINE_URL;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0">
        {splineUrl ? (
          <Spline scene={splineUrl} style={{ width: '100%', height: '100%' }} />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-600/30 via-indigo-700/20 to-slate-900" />
        )}
        {/* Glow gradients (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background/90" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background" />
        {/* Floating orbs */}
        <div className="pointer-events-none absolute left-10 top-24 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-40 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        {/* Glass nav */}
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg" />
            <span className="text-sm font-semibold tracking-tight text-white">PulseBook</span>
          </div>
          <div className="hidden items-center gap-6 text-white/80 md:flex">
            <a href="#sports" className="text-xs hover:text-white">Sports</a>
            <a href="#pricing" className="text-xs hover:text-white">Pricing</a>
            <a href="#cta" className="text-xs hover:text-white">Get Started</a>
          </div>
          <a href="#cta" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow transition hover:shadow-lg">Launch App</a>
        </div>

        {/* Hero copy */}
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pb-32 md:pt-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wider text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
              Next‑gen sports event platform
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Futuristic bookings for high‑energy sports
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Create cinematic sign‑ups, real‑time schedules, and lightning‑fast check‑ins — all wrapped in a sleek, animated experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
              >
                Start Free Trial
              </a>
              <a
                href="#sports"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
              >
                Explore Sports
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/70">
              <div className="text-sm">No credit card required</div>
              <div className="h-1 w-1 rounded-full bg-white/40" />
              <div className="text-sm">AI‑assisted scheduling</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
