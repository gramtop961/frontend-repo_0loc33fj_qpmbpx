import React from 'react';
import Hero from './components/Hero';
import SportsShowcase from './components/SportsShowcase';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function AnimatedDivider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="relative h-8">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/40 to-cyan-400/40 blur-lg" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Hero />
      <AnimatedDivider />
      <SportsShowcase />
      <AnimatedDivider />
      <Pricing />
      <CTA />
      <footer className="border-t bg-background/80">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} PulseBook Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
