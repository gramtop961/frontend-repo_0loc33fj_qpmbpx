import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlays to enhance text contrast without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        {/* Top nav */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/20 backdrop-blur" />
            <span className="text-lg font-semibold tracking-tight text-white">PulseBook</span>
          </div>
          <div className="hidden gap-4 md:flex">
            <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
            <a href="#pricing" className="text-sm text-white/80 hover:text-white">Pricing</a>
            <a href="#cta" className="text-sm text-white/80 hover:text-white">Get Started</a>
          </div>
          <a href="#cta" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow/50 shadow-black/20 hover:shadow-lg">
            Book a Demo
          </a>
        </div>

        {/* Hero copy */}
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-24 md:pt-16 md:pb-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80 ring-1 ring-white/20 backdrop-blur">
              Sport Event Booking SaaS
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Powering high‑energy sports events with effortless bookings
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              From amateur leagues to pro circuits, manage registrations, schedules, payments, and check‑ins in one dynamic, branded hub.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow/50 shadow-black/20 hover:shadow-lg"
              >
                Start Free Trial
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
              >
                See How It Works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/70">
              <div className="text-sm">No credit card required</div>
              <div className="h-1 w-1 rounded-full bg-white/40" />
              <div className="text-sm">Setup in under 5 minutes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
