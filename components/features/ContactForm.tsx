"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { services } from "@/data/site";

const serviceOptions = [
  { value: "", label: "Select a service" },
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other", label: "Other / Not Sure" },
];

interface ContactFormProps {
  compact?: boolean;
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // Formspark endpoint
      const response = await fetch("https://submit-form.com/CLSVKvOHr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-accent-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Thank You!
        </h3>
        <p className="text-text-secondary">
          We&apos;ve received your enquiry and will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-accent-primary hover:text-accent-secondary transition-colors text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className={compact ? "space-y-4" : "grid md:grid-cols-2 gap-4"}>
        <Input
          name="name"
          label="Full Name"
          placeholder="Your name"
          required
        />
        <Input
          name="email"
          type="email"
          label="Email Address"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className={compact ? "space-y-4" : "grid md:grid-cols-2 gap-4"}>
        <Input
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="07xxx xxxxxx"
          required
        />
        <Input
          name="postcode"
          label="Postcode"
          placeholder="MK1 1AA"
          required
        />
      </div>

      <Select
        name="service"
        label="Service Required"
        options={serviceOptions}
        placeholder="Select a service"
        required
      />

      {!compact && (
        <Textarea
          name="message"
          label="Tell Us About Your Project"
          placeholder="Describe what you'd like to achieve with your outdoor space..."
          rows={4}
        />
      )}

      {/* Honeypot for spam protection */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />

      <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
        {isSubmitting ? "Sending..." : "Get Free Quote"}
      </Button>

      <p className="text-xs text-text-tertiary text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="text-accent-primary hover:underline">
          Privacy Policy
        </a>
        . We&apos;ll respond within 24 hours.
      </p>
    </form>
  );
}
