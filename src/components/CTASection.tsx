'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@/contexts/FormContext';
import GradientBG from '@/components/GradientBG';

export default function CTASection() {
  const { openForm } = useForm();

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <motion.div
          className="cta-card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <GradientBG />
          <div className="cta-content" style={{ position: 'relative', zIndex: 10 }}>
            <h2 className="cta-title">
              Book a free call
            </h2>
            
            <p className="cta-body">
              Let's explore how cutting-edge technology can{' '}
              <span className="cta-highlight">eliminate your problems</span>{' '}
              and scale your business.
            </p>
            
            <motion.button
              onClick={openForm}
              className="cta-button"
              whileHover={prefersReducedMotion ? {} : {
                scale: 1.02,
                y: -2,
                transition: { duration: 0.12, ease: "easeOut" }
              }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              Let's get started
            </motion.button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-300 mb-2">Or skip the form</p>
              <motion.a
                href="tel:0468047436"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                <svg
                  width="18"
                  height="18"
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
                <span className="font-semibold">Call 0468 047 436</span>
              </motion.a>
              <p className="text-xs text-gray-400 mt-1">AI assistant available 24/7</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}