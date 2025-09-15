"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';

type Stat = { 
  icon?: React.ReactNode; 
  value: string; 
  label: string; 
};

interface MetricsBarProps {
  stats?: Stat[];
  enableCountUp?: boolean; // default true
  compact?: boolean;       // default false
}

interface CountUpNumberProps {
  value: string;
  className?: string;
  enableCountUp: boolean;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({ value, className, enableCountUp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  
  // Parse the numeric value and suffix (%, +, ~, etc.)
  const numericMatch = value.match(/(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1]) : 0;
  const prefix = value.match(/^[^\d]*/)?.[0] || '';
  const suffix = value.replace(/^[^\d]*\d+/, '') || '';
  
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) => `${prefix}${latest}${suffix}`);

  useEffect(() => {
    if (isInView && enableCountUp) {
      const animation = animate(count, numericValue, { 
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94]
      });
      return () => animation.stop();
    } else if (isInView && !enableCountUp) {
      count.set(numericValue);
    }
  }, [isInView, numericValue, count, enableCountUp]);

  return (
    <span ref={ref} className={className}>
      {enableCountUp ? (
        <motion.span>{displayValue}</motion.span>
      ) : (
        <span>{value}</span>
      )}
    </span>
  );
};

const defaultStats: Stat[] = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    value: "~95%",
    label: "of calls automated"
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    value: "~300%",
    label: "boost in appointments"
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    value: "+45%",
    label: "in lead conversion rates"
  }
];

export default function MetricsBar({ 
  stats = defaultStats, 
  enableCountUp = true, 
  compact = false 
}: MetricsBarProps) {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const actualEnableCountUp = enableCountUp && !prefersReducedMotion;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className={`relative bg-white ${compact ? 'py-12' : 'pt-8 pb-16 md:pb-24'}`}>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow text */}
          <div className="text-center mb-12" aria-label="Key outcomes">
            <p className="text-sm text-gray-600 font-medium flex items-center justify-center gap-2">
              you can expect 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`
                  bg-white rounded-2xl shadow-sm border border-gray-100 
                  ${compact ? 'p-6' : 'p-8'} 
                  transition-all duration-300 ease-out
                  hover:shadow-md hover:ring-2 hover:ring-blue-500/20 hover:-translate-y-1
                  focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:outline-none
                `}
                tabIndex={0}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  {stat.icon && (
                    <div className="flex-shrink-0 text-blue-500 mt-2">
                      {stat.icon}
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Value */}
                    <div className={`
                      font-montserrat font-semibold text-blue-600 leading-tight mb-2
                      ${compact ? 'text-2xl lg:text-3xl' : 'text-3xl lg:text-4xl xl:text-5xl'}
                    `}>
                      <CountUpNumber 
                        value={stat.value} 
                        enableCountUp={actualEnableCountUp}
                      />
                    </div>
                    
                    {/* Label */}
                    <p className={`
                      font-montserrat font-semibold text-gray-700 leading-relaxed
                      ${compact ? 'text-sm' : 'text-base'}
                    `}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}