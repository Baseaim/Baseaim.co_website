'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientBG from './GradientBG';
import PillBox from './PillBox';
import LogoCarousel from './LogoCarousel';
import { useForm } from '@/contexts/FormContext';

const Hero = () => {
  const { openForm } = useForm();
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Ecosystems', 'Development', 'Infrastructure'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="hero-section">
      <GradientBG />
      
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-text-wrapper">
            <PillBox />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-headline"
            >
              <span className="desktop-breaks">The trusted partners<br />for self sustaining AI<br /></span>
              <span className="mobile-breaks">The trusted<br />partners for<br />self sustaining AI<br /></span>
              <span className="hero-highlight">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 12, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        duration: 0.7,
                        ease: "easeOut"
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -12, 
                      scale: 1.1,
                      transition: {
                        duration: 0.4,
                        ease: "easeIn"
                      }
                    }}
                    className="cycling-word"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subheadline"
            >
              Smarter operations, lower costs, more growth — powered by AI
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-cta-wrapper"
            >
              <motion.button 
                className="hero-cta-primary"
                onClick={openForm}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 12px 35px rgba(37, 99, 235, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </motion.button>
              <motion.a 
                href="/about-us" 
                className="hero-cta-secondary"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(37, 99, 235, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-sm text-gray-600 mt-4"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="inline-block mr-1 text-blue-600"
              >
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Call our AI assistant 24/7: <a href="tel:0468047436" className="text-blue-600 hover:text-blue-700 font-medium">0468 047 436</a>
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Logo Carousel */}
      <LogoCarousel />
      
      <div className="hero-scroll-text">
        Scroll down to discover more
      </div>
    </section>
  );
};

export default Hero;