"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface AreaCardProps {
  name: string;
  href: string;
  county: string;
  index?: number;
}

export function AreaCard({ name, href, county, index = 0 }: AreaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link
        href={href}
        className="group block p-4 bg-bg-tertiary rounded-lg border border-border-subtle hover:border-accent-primary/50 transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
              {name}
            </h3>
            <p className="text-xs text-text-tertiary">{county}</p>
          </div>
          <svg
            className="w-5 h-5 text-text-tertiary group-hover:text-accent-primary group-hover:translate-x-1 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}
