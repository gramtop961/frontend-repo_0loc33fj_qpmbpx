import React from 'react';
import { Rocket, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-10 top-0 h-56 w-56 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to run a next‑gen event?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Open registrations, automate schedules, and wow athletes with a futuristic experience.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.a
            whileHover={{ y: -2, filter: 'brightness(1.15)' }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            <Rocket className="h-4 w-4" /> Start Free Trial
          </motion.a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-6 py-3 text-sm font-semibold hover:bg-muted/80"
          >
            <Mail className="h-4 w-4" /> Book a Demo
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Free for testing. Upgrade when you go live.</p>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border bg-card/75 p-6 backdrop-blur-xl sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Join the early access</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get product updates, beta invites, and insider tips to sell out your next event.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-3">
              <input
                type="email"
                required
                placeholder="Enter your work email"
                className="col-span-2 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-fuchsia-400"
              />
              <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white hover:brightness-110">
                Get Early Access
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
