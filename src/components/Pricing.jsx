import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    highlight: false,
    features: [
      'Up to 1 active event',
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
      'Unlimited active events',
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
    <section id="pricing" className="relative bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Start free. Upgrade when you need more power.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm ${
                plan.highlight ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="text-3xl font-extrabold tracking-tight">
                  {plan.price}
                  <span className="text-base font-medium text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#cta"
                  className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm ${
                    plan.highlight
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
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
