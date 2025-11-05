import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Hero />
      <Divider />
      <Features />
      <Divider />
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
