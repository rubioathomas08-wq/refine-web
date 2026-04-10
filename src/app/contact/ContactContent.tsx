"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

export default function ContactContent() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Contact
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Let&apos;s Get You Online
            </h1>
            <p className="mt-4 text-lg text-gray-text">
              Fill out the form below and we&apos;ll get back to you within 24
              hours. We build a free demo before you commit to anything.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="pt-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center"
              >
                <svg className="mx-auto h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  Message Sent!
                </h3>
                <p className="mt-2 text-gray-text">
                  We&apos;ll be in touch within 24 hours. Talk soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-white/10 bg-dark-card px-4 py-3 text-sm text-off-white placeholder-gray-text/50 outline-none transition-colors focus:border-primary"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="mb-2 block text-sm font-medium">
                      Business Name
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      className="w-full rounded-lg border border-white/10 bg-dark-card px-4 py-3 text-sm text-off-white placeholder-gray-text/50 outline-none transition-colors focus:border-primary"
                      placeholder="Smith's HVAC"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border border-white/10 bg-dark-card px-4 py-3 text-sm text-off-white placeholder-gray-text/50 outline-none transition-colors focus:border-primary"
                      placeholder="(615) 555-1234"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-white/10 bg-dark-card px-4 py-3 text-sm text-off-white placeholder-gray-text/50 outline-none transition-colors focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium">
                    What Do You Need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-lg border border-white/10 bg-dark-card px-4 py-3 text-sm text-off-white outline-none transition-colors focus:border-primary"
                  >
                    <option value="">Select an option</option>
                    <option value="starter">Starter Website (up to 5 pages)</option>
                    <option value="standard">Standard Website (up to 8 pages)</option>
                    <option value="professional">Professional Website (up to 12 pages)</option>
                    <option value="premium">Premium Website (13–20+ pages)</option>
                    <option value="maintenance">Monthly Retainer</option>
                    <option value="hourly">Hourly Work / Add-ons</option>
                    <option value="browsing">Just Browsing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Tell Us More
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-white/10 bg-dark-card px-4 py-3 text-sm text-off-white placeholder-gray-text/50 outline-none transition-colors focus:border-primary"
                    placeholder="Tell us about your business, what you need, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:col-span-2">
            {/* Book a call */}
            <div className="rounded-2xl border border-white/10 bg-dark-card p-8">
              <h3 className="font-display text-lg font-bold">Prefer to Talk?</h3>
              <p className="mt-3 text-sm text-gray-text">
                Call or text us directly and we&apos;ll set up a time to walk
                through your project. No forms, no waiting.
              </p>
              <a
                href="tel:+16158012070"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (615) 801-2070
              </a>
            </div>

            {/* Contact info */}
            <div className="rounded-2xl border border-white/10 bg-dark-card p-8">
              <h3 className="font-display text-lg font-bold">Direct Contact</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-text">
                <p>
                  <span className="text-off-white">Email:</span>{" "}
                  rubio.athomas@gmail.com
                </p>
                <p>
                  <span className="text-off-white">Phone:</span>{" "}
                  (615) 801-2070
                </p>
                <p>
                  <span className="text-off-white">Location:</span>{" "}
                  Murfreesboro, TN
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm leading-relaxed text-gray-text">
                <span className="font-semibold text-primary">No risk.</span> We
                build a free demo before you commit to anything. You only pay
                when you&apos;re 100% happy with what we&apos;ve built.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
