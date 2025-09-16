"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProcessStepsProps {
  autoCycleHighlight?: boolean; // default true for desktop, false for reduced motion
}

const steps = [
  {
    number: "1",
    title: "Discovery & Strategy",
    body: "We'll identify your business goals, analyze communication challenges, and find inefficiencies to wireframe a tailored solution for your needs"
  },
  {
    number: "2", 
    title: "Creation & Launch",
    body: "We'll develop, test and integrate a custom AI Voice Agent that seamlessly integrates with your existing systems and workflows"
  },
  {
    number: "3",
    title: "Optimize", 
    body: "We'll monitor, adjust and optimise your AI Voice Agent based on real-world data, ensuring consistent performance and outstanding results for your business"
  }
];

export default function ProcessSteps({ 
  autoCycleHighlight = true 
}: ProcessStepsProps) {
  const [activeStep, setActiveStep] = useState(0);
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const shouldAutoCycle = autoCycleHighlight && !prefersReducedMotion;

  // Auto-cycle highlight effect
  useEffect(() => {
    if (!shouldAutoCycle) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [shouldAutoCycle]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 30 
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
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-white/10 to-white/20 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-500 mb-6">
              <span className="text-sm font-medium text-blue-700">How it works</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-4 font-montserrat">
              Getting started is simple
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
              A simple, three step process to make your life easier.
            </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                relative bg-blue-50/50 rounded-2xl p-8 border border-blue-100/50 shadow-sm
                transition-all duration-500 ease-out
                hover:shadow-md hover:-translate-y-1 hover:ring-2 hover:ring-blue-500/20
                ${activeStep === index && shouldAutoCycle ? 'ring-2 ring-blue-500/30 shadow-lg' : ''}
              `}
              onMouseEnter={() => shouldAutoCycle && setActiveStep(index)}
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white text-xl font-bold font-poppins">
                  {step.number}
                </div>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-inter">
                  {step.body}
                </p>
              </div>

              {activeStep === index && shouldAutoCycle && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-2xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {shouldAutoCycle && (
          <div className="flex justify-center mt-12 space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`
                  w-2 h-2 rounded-full transition-colors duration-300
                  ${activeStep === index ? 'bg-blue-600' : 'bg-blue-200'}
                `}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}