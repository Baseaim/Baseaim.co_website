'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientBG from './GradientBG';
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-headline"
            >
              The trusted partners<br />
              for self sustaining AI<br />
              <span className="hero-highlight">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
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
                      y: -8, 
                      scale: 1.05,
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
              <button 
                className="hero-cta-primary"
                onClick={openForm}
              >
                Get Started Today
              </button>
              <a href="/about-us" className="hero-cta-secondary">
                About Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-text">
        Scroll down to discover more
      </div>
    </section>
  );
};

export default Hero;