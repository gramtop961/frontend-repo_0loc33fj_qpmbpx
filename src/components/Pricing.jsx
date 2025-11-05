import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

const plans = [
  {
    name: 'Creator',
    price: 'Free',
    period: '',
    highlight: false,
    features: [
      '1 active event',
      '100 registrations / month',
      'Basic scheduling',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    highlight: true,
    features: [
      'Unlimited events',
      'Unlimited registrations',
      'Advanced brackets & seeding',
      'Payments & payouts',
      'Priority support',
    ],
    cta: 'Start Free Trial',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-background via-background to-background/80 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/4 top-10 h-40 w-40 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-400/25 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Start free. Scale when you need more power.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl border bg-card/75 p-6 backdrop-blur-xl transition-all hover:shadow-2xl ${
                plan.highlight ? 'ring-2 ring-fuchsia-400/50' : ''
              }`}
            >
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 blur-xl" />
              <div className="relative flex items-baseline justify-between">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  {plan.highlight ? <Sparkles className="h-4 w-4 text-fuchsia-400" /> : <ShieldCheck className="h-4 w-4 text-cyan-400" />} {plan.name}
                </h3>
                <div className="text-3xl font-extrabold tracking-tight">
                  {plan.price}
                  <span className="text-base font-medium text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              <ul className="relative mt-6 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-8">
                <a
                  href="#cta"
                  className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white hover:brightness-110'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
