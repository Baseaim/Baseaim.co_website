'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';

interface CountUpNumberProps {
  value: string;
  className?: string;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({ value, className }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  
  // Parse the numeric value and suffix (%, hours, etc.)
  const numericMatch = value.match(/(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1]) : 0;
  const suffix = value.replace(/\d+/, '').trim();
  
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) => `${latest}${suffix}`);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, numericValue, { 
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom ease-out curve
      });
      return () => animation.stop();
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{displayValue}</motion.span>
    </span>
  );
};

export default function IndustryPainPoints() {

  return (
    <section className="pt-20 pb-8 relative pain-points-section">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-500">
              <span className="text-sm font-medium text-blue-700">new revolution</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="pain-points-main-text">Why most SMBs </span>
            <span className="pain-points-highlight">Stay stuck</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-work-sans" style={{ color: 'var(--foreground-muted)' }}>
            Every day without automation, your competition gets further ahead. 
            See how AI transforms these business-critical challenges.
          </p>
        </motion.div>

        {/* Old Way vs New Way Comparison */}
        <div className="max-w-6xl mx-auto">
          <div className="comparison-grid">
            {/* Old Way Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="comparison-column old-way"
            >
              <div className="comparison-header">
                <div className="comparison-icon old-way-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-500">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="comparison-title">The Old Way</h3>
              </div>
              
              <div className="comparison-items">
                <div className="comparison-item">
                  <div className="item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Manual data entry and repetitive tasks</span>
                </div>
                
                <div className="comparison-item">
                  <div className="item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Hours or days to respond to customers</span>
                </div>
                
                <div className="comparison-item">
                  <div className="item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Error-prone processes and human mistakes</span>
                </div>
                
                <div className="comparison-item">
                  <div className="item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Expensive hiring for every new task</span>
                </div>
                
                <div className="comparison-item">
                  <div className="item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Making decisions based on gut feeling</span>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="comparison-divider">
              <div className="divider-line"></div>
              <div className="divider-arrow">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* New Way Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="comparison-column new-way"
            >
              <div className="comparison-header">
                <div className="comparison-icon new-way-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="comparison-title">The AI Way</h3>
              </div>
              
              <div className="comparison-items">
                <div className="comparison-item">
                  <div className="item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Automated processing in seconds</span>
                </div>
                
                <div className="comparison-item">
                  <div className="item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Instant 24/7 customer responses</span>
                </div>
                
                <div className="comparison-item">
                  <div className="item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>99.9% accuracy with AI precision</span>
                </div>
                
                <div className="comparison-item">
                  <div className="item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Unlimited capacity without hiring</span>
                </div>
                
                <div className="comparison-item">
                  <div className="item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Data-driven insights and predictions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}