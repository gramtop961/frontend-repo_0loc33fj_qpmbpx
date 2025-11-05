import React from 'react';
import { Rocket, Calendar, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: 'One‑Click Registration',
    desc: 'Custom forms, waitlists, coupon codes, and team invites — all streamlined for peak conversion.',
    icon: Rocket,
  },
  {
    title: 'Smart Scheduling',
    desc: 'Drag‑and‑drop brackets, live seeding, automated courts and heat assignments, and conflict detection.',
    icon: Calendar,
  },
  {
    title: 'Secure Payments',
    desc: 'PCI‑compliant checkout with refunds, partial payments, and payouts directly to your org.',
    icon: Shield,
  },
  {
    title: 'Real‑Time Ops',
    desc: 'Mobile check‑in, QR badges, live leaderboards, and SMS updates keep events moving fast.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for speed and scale</h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Everything you need to launch, sell out, and run unforgettable sports events.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-shadow hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-transform duration-300 group-hover:scale-125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
