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
          </div>
        </motion.div>
      </div>
    </section>
  );
}