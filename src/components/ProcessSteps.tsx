"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProcessStepsProps {
  autoCycleHighlight?: boolean; // default true for desktop, false for reduced motion
}

const steps = [
  {
    number: "1",
    title: "Discover & Analyze",
    body: "We identify inefficiencies in your current processes and pinpoint exactly where AI can deliver the biggest impact"
  },
  {
    number: "2",
    title: "AI Blueprint",
    body: "We design a comprehensive AI roadmap tailored to your business, ensuring every automation delivers maximum value"
  },
  {
    number: "3", 
    title: "Build & Implement",
    body: "We develop and implement your custom AI solutions, seamlessly integrating them into your existing workflow"
  },
  {
    number: "4",
    title: "Refine & Optimize", 
    body: "We continuously fine-tune your AI systems to ensure they're running at full capacity and delivering peak performance"
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

      {/* Header Section - Constrained */}
      <div className="max-w-12xl mx-auto relative z-10">
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
              A simple, four step process to make your life easier.
            </p>
        </motion.div>
      </div>

      {/* Cards Section - Extended Width */}
      <div className="w-full px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-7"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                relative bg-blue-50/50 rounded-2xl px-12 py-8 border border-blue-100/50 shadow-sm
                transition-all duration-500 ease-out
                hover:shadow-md hover:-translate-y-1 hover:ring-2 hover:ring-blue-500/20
                ${activeStep === index && shouldAutoCycle ? 'ring-2 ring-blue-500/30 shadow-lg' : ''}
              `}
              onMouseEnter={() => shouldAutoCycle && setActiveStep(index)}
            >
              <div>
                {/* Step Number */}
                <div className="text-4xl font-bold text-gray-900 mb-3 font-montserrat">
                  {step.number}
                </div>
                
                {/* Step Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-sm text-gray-600 leading-snug font-inter">
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
      </div>

      {shouldAutoCycle && (
        <div className="max-w-12xl mx-auto relative z-10">
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
        </div>
      )}
    </div>
  );
}