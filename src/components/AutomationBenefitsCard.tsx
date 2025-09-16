"use client";

import React from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AutomationBenefitsCardProps {
  lostTimeTarget?: number;
  withAutomationTarget?: number;
}

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Scalability",
    description: "Easily expand your operations by automating more processes as you grow."
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Always On",
    description: "Automation that runs 24/7 — no breaks, no downtime, just consistent delivery."
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
      </svg>
    ),
    title: "Seamless Integration",
    description: "Connects directly with your existing tools, CRM, and workflows without disruption."
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Efficiency at Scale",
    description: "Reduce repetitive admin and wasted hours, letting your team focus on high-value work."
  }
];

interface AnimatedBarProps {
  label: string;
  targetHeight: number;
  color: string;
  bgColor: string;
  hasRevealed: boolean;
  delay?: number;
  containerHeight?: string;
}

function AnimatedBar({ label, targetHeight, color, bgColor, hasRevealed, delay = 0, containerHeight = "h-[240px] md:h-[280px]" }: AnimatedBarProps) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div className="flex flex-col items-center">
      {/* Bar Container */}
      <div className={`relative w-[96px] md:w-[112px] ${containerHeight} ${bgColor} rounded-xl border border-gray-300 overflow-hidden`}>
        {/* Animated Bar */}
        <div 
          className={`absolute bottom-0 left-0 right-0 ${color} rounded-xl opacity-0 scale-y-0`}
          style={{
            transformOrigin: 'bottom',
            transitionDelay: `${delay}ms`,
            transform: hasRevealed ? `scaleY(${targetHeight})` : 'scaleY(0)',
            opacity: hasRevealed ? 1 : 0,
            transitionProperty: 'transform, opacity',
            transitionDuration: prefersReducedMotion ? '0ms, 0ms' : '900ms, 300ms',
            transitionTimingFunction: prefersReducedMotion ? 'linear, linear' : 'cubic-bezier(0.16,1,0.3,1), ease-out'
          }}
          aria-label={label}
          role="progressbar"
        />
      </div>
      
      {/* Label */}
      <div className="mt-3 text-center">
        <p className="text-xs md:text-sm font-medium text-gray-700 font-montserrat leading-tight">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function AutomationBenefitsCard({ 
  lostTimeTarget = 0.9, 
  withAutomationTarget = 0.25 
}: AutomationBenefitsCardProps) {
  const { hasRevealed, ref } = useInViewOnce();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 lg:py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/30 rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            {/* Mobile: Stack layout, Desktop: Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
              
              {/* Left Column - Features (2fr on desktop) */}
              <div>
                {/* Heading */}
                <h2 
                  className={`text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-8 font-montserrat leading-tight transition-all duration-400 ease-out ${
                    hasRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: '0ms',
                    transitionDuration: prefersReducedMotion ? '0ms' : '400ms'
                  }}
                >
                  What AI Automation can do for your business
                </h2>
                
                {/* Feature Grid - 2x2 on md+ */}
                <div className="grid gap-6 md:grid-cols-2">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 group h-full transition-all duration-400 ease-out ${
                        hasRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: `${100 + (index * 100)}ms`, // 100, 200, 300, 400ms
                        transitionDuration: prefersReducedMotion ? '0ms' : '400ms'
                      }}
                    >
                      {/* Icon Circle */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300 p-2">
                        {feature.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-2 font-montserrat">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 opacity-80 leading-relaxed font-inter">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column - Chart (1fr on desktop) */}
              <div className="flex flex-col items-center justify-center h-[320px] md:h-[360px]">
                <div className="flex items-end justify-center gap-12 md:gap-16">
                  <AnimatedBar
                    label="Lost time on manual tasks"
                    targetHeight={lostTimeTarget}
                    color="bg-gradient-to-t from-blue-600 to-blue-500"
                    bgColor="bg-blue-100"
                    hasRevealed={hasRevealed}
                    delay={0}
                  />
                  
                  <AnimatedBar
                    label="With our AI Automation"
                    targetHeight={withAutomationTarget}
                    color="bg-gradient-to-t from-blue-500 to-blue-400"
                    bgColor="bg-blue-50"
                    hasRevealed={hasRevealed}
                    delay={120}
                    containerHeight="h-[70px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}