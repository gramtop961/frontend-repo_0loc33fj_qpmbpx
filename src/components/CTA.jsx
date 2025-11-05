import React from 'react';

export default function CTA() {
  return (
    <section id="cta" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Launch your next sport event in minutes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Create an event, open registration, and accept payments — all in one place. No setup fees. Cancel anytime.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90"
          >
            Start Free Trial
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-muted px-6 py-3 text-sm font-semibold hover:bg-muted/80"
          >
            Book a Demo
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Free for testing. Upgrade when you go live.</p>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="rounded-2xl border bg-card p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Trusted by organizers worldwide</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                From racing to racket sports, teams use PulseBook to streamline operations and deliver electric experiences.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-3">
              <input
                type="email"
                required
                placeholder="Enter your work email"
                className="col-span-2 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-primary"
              />
              <button className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Get Early Access
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
