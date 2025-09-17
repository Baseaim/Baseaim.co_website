'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

interface ProcessStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Fill Out the Form",
    description: "Start your journey with a simple form submission",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="process-icon">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Consultation",
    description: "We discuss your needs and business goals",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="process-icon">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="11" r="1" fill="currentColor"/>
        <circle cx="8" cy="11" r="1" fill="currentColor"/>
        <circle cx="16" cy="11" r="1" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Custom Development Plan",
    description: "Tailored strategy designed for your business",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="process-icon">
        <polygon points="12,2 2,7 12,12 22,7 12,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="2,17 12,22 22,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="2,12 12,17 22,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Implement & Develop",
    description: "We build and deploy your AI solution",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="process-icon">
        <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  const inView = useInView(sectionRef, { 
    amount: 0.1,
    once: false,
    margin: "-100px 0px -100px 0px"
  });

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const startTimer = useCallback(() => {
    if (prefersReducedMotion || isPaused || !isVisible) return;
    
    intervalRef.current = setInterval(() => {
      setActiveStep(prev => prev === 4 ? 1 : prev + 1);
    }, 3000);
  }, [isPaused, isVisible, prefersReducedMotion]);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resetTimer = useCallback(() => {
    stopTimer();
    startTimer();
  }, [stopTimer, startTimer]);

  // Handle visibility change
  useEffect(() => {
    setIsVisible(inView);
    // Debug logging
    if (typeof window !== 'undefined' && !prefersReducedMotion) {
      console.log('ProcessTimeline visibility changed:', inView);
    }
  }, [inView, prefersReducedMotion]);

  // Start/stop timer based on visibility and pause state
  useEffect(() => {
    if (isVisible && !isPaused && !prefersReducedMotion) {
      // Small delay to ensure component is fully rendered
      const timeout = setTimeout(() => {
        startTimer();
      }, 100);
      
      return () => {
        clearTimeout(timeout);
        stopTimer();
      };
    } else {
      stopTimer();
    }

    return stopTimer;
  }, [isVisible, isPaused, prefersReducedMotion, startTimer, stopTimer]);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    resetTimer();
  };

  const handleKeyDown = (event: React.KeyboardEvent, stepId: number) => {
    if (event.key === 'ArrowLeft' && stepId > 1) {
      setActiveStep(stepId - 1);
      stepRefs.current[stepId - 2]?.focus();
      resetTimer();
    } else if (event.key === 'ArrowRight' && stepId < 4) {
      setActiveStep(stepId + 1);
      stepRefs.current[stepId]?.focus();
      resetTimer();
    }
  };

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) {
      setIsPaused(true);
    }
  };
  const handleMouseLeave = () => {
    if (!prefersReducedMotion) {
      setIsPaused(false);
    }
  };
  const handleFocus = () => {
    if (!prefersReducedMotion) {
      setIsPaused(true);
    }
  };
  const handleBlur = () => {
    if (!prefersReducedMotion) {
      setIsPaused(false);
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="process-section"
      aria-label="Process"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900 font-montserrat">
            Our Process
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="process-timeline-container">
          {/* Timeline Track */}
          <div className="process-track">
            <div className="process-track-base"></div>
            <div 
              className="process-track-progress"
              style={{
                width: `${((activeStep - 1) / 3) * 100}%`
              }}
            ></div>
          </div>

          {/* Steps */}
          <ol className="process-steps">
            {processSteps.map((step, index) => (
              <li key={step.id} className="process-step-item">
                <motion.button
                  ref={(el) => { stepRefs.current[index] = el; }}
                  className={`process-card ${activeStep === step.id ? 'active' : ''}`}
                  onClick={() => handleStepClick(step.id)}
                  onKeyDown={(e) => handleKeyDown(e, step.id)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  aria-current={activeStep === step.id ? 'step' : undefined}
                  animate={activeStep === step.id ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                  transition={{ 
                    duration: 0.12,
                    ease: "easeOut"
                  }}
                >
                  {/* Timeline Circle */}
                  <div className={`process-circle ${activeStep === step.id ? 'active' : ''}`}>
                    <span className="process-step-number">{step.stepNumber}</span>
                  </div>

                  {/* Card Content */}
                  <div className="process-content">
                    <div className="process-step-label">STEP {step.stepNumber}</div>
                    <div className="process-icon-wrapper">
                      {step.icon}
                    </div>
                    <h3 className={`process-title ${activeStep === step.id ? 'active' : ''}`}>
                      {step.title}
                    </h3>
                    <p className="process-description">
                      {step.description}
                    </p>
                  </div>
                </motion.button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}