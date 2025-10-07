"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useForm } from '@/contexts/FormContext';

interface NavigationProps {
  variant?: 'transparent' | 'solid';
  onOpenForm?: () => void;
}

export default function Navigation({ variant = 'transparent', onOpenForm }: NavigationProps) {
  const formContext = useForm();
  const openForm = onOpenForm || formContext?.openForm;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const bgClass = variant === 'transparent' ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 ${bgClass}`} role="navigation" aria-label="Main navigation">
        <div className="w-full px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <Image
                  src="/logo-black.png"
                  alt="Baseaim - AI Automation Services"
                  width={120}
                  height={32}
                  priority
                  className="h-8 w-auto"
                />
              </a>
            </div>

            {/* Right Side - Navigation Links + CTA */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="/#how-it-works"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Learn how our AI automation works"
              >
                How It Works
              </a>
              <a
                href="/#services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Explore our AI automation solutions"
              >
                Solutions
              </a>
              <a
                href="/about-us"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Learn about Baseaim company"
              >
                About Us
              </a>
              <a
                href="/blog"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Read our AI automation insights and tips"
              >
                Blog
              </a>
              <a
                href="/#contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Get in touch with our team"
              >
                Contact
              </a>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                onClick={openForm}
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" onClick={() => setMobileMenuOpen(false)}></div>
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            id="mobile-menu"
          >
            <div className="p-6">
              {/* Mobile Navigation Links */}
              <nav className="space-y-2" aria-label="Mobile navigation">
                <a
                  href="/#how-it-works"
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-2 min-h-[44px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Learn how our AI automation works"
                >
                  How It Works
                </a>
                <a
                  href="/#services"
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-2 min-h-[44px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Explore our AI automation solutions"
                >
                  Solutions
                </a>
                <a
                  href="/about-us"
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-2 min-h-[44px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Learn about Baseaim company"
                >
                  About Us
                </a>
                <a
                  href="/blog"
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-2 min-h-[44px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Read our AI automation insights and tips"
                >
                  Blog
                </a>
                <a
                  href="/#contact"
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-2 min-h-[44px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Get in touch with our team"
                >
                  Contact
                </a>

                {/* Mobile CTA Button */}
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-200 mt-6"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openForm();
                  }}
                >
                  Get In Touch
                </button>
              </nav>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
