'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CallOptionProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

export default function CallOption({ variant = 'default', className = '' }: CallOptionProps) {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '0468 047 436';
  const phoneLink = 'tel:0468047436';

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const phoneIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="inline-block"
    >
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (variant === 'compact') {
    return (
      <motion.div
        className={`call-option-compact ${className}`}
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: 0.2 }}
      >
        <p className="text-sm text-gray-600 mb-2">Prefer to talk?</p>
        <a
          href={phoneLink}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          {phoneIcon}
          <span className="font-semibold">{phoneNumber}</span>
        </a>
      </motion.div>
    );
  }

  if (variant === 'inline') {
    return (
      <motion.span
        className={`call-option-inline ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
      >
        <span className="text-gray-600">or call </span>
        <a
          href={phoneLink}
          className="text-blue-600 hover:text-blue-700 font-medium transition-colors inline-flex items-center gap-1"
        >
          {phoneIcon}
          <span>{phoneNumber}</span>
        </a>
      </motion.span>
    );
  }

  // Default variant
  return (
    <motion.div
      className={`call-option ${className}`}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.3 }}
    >
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">OR</span>
        </div>
      </div>

      <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <motion.span
                animate={prefersReducedMotion ? {} : { rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                className="text-blue-600"
              >
                {phoneIcon}
              </motion.span>
              <span>Prefer to speak with our AI assistant?</span>
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Skip the form and book your discovery call instantly with our AI voice assistant
            </p>

            {/* Desktop: Show both call and copy options */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={phoneLink}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
              >
                <span>Call Now</span>
                <span className="font-bold">{phoneNumber}</span>
              </a>

              <motion.button
                onClick={handleCopyNumber}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                {copied ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-sm">Copy number</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Mobile: Call button only */}
            <a
              href={phoneLink}
              className="md:hidden inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              {phoneIcon}
              <span>Call {phoneNumber}</span>
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Available 24/7 • Instant response • No waiting time
        </p>
      </div>
    </motion.div>
  );
}