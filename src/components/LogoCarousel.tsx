'use client'

import React from 'react';
import { motion } from 'framer-motion';

const LogoCarousel = () => {
  const brands = [
    { name: 'OpenAI', logo: '/OpenAI-black-wordmark.png' },
    { name: 'Claude', logo: '/Claude_Logo_1.png' },
    { name: 'ElevenLabs', logo: '/elevenlabs-logo-black.png' },
    { name: 'Make.com', logo: '/Make_idU77DJcxU_1.png' },
    { name: 'n8n', logo: '/N8N.Io_idQ-KxEpHW_0.png' },
    { name: 'Zapier', logo: '/zapier-logo_black.png' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="logo-carousel-container"
      role="region"
      aria-label="Our trusted AI technology partners"
    >
      <div className="logo-carousel-wrapper">
        <div className="logo-carousel-track" aria-live="off">
          {/* First set of logos */}
          {brands.map((brand, index) => (
            <div key={`first-${index}`} className="logo-card">
              <div className="logo-placeholder">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="carousel-logo"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block';
                  }}
                />
                <span className="brand-name carousel-logo-fallback">{brand.name}</span>
              </div>
            </div>
          ))}
          {/* Duplicate set for infinite scroll */}
          {brands.map((brand, index) => (
            <div key={`second-${index}`} className="logo-card">
              <div className="logo-placeholder">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="carousel-logo"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block';
                  }}
                />
                <span className="brand-name carousel-logo-fallback">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Gradient fade edges */}
      <div className="carousel-fade-left"></div>
      <div className="carousel-fade-right"></div>
    </motion.div>
  );
};

export default LogoCarousel;