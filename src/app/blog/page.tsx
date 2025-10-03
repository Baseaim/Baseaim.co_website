"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FormProvider } from '@/contexts/FormContext';
import { useForm } from '@/contexts/FormContext';
import FormSlider from '@/components/FormSlider';
import ChatbotWidget from '@/components/ChatbotWidget';
import Footer from '@/components/Footer';
import CallCTA from '@/components/CallCTA';
import GradientBG from '@/components/GradientBG';

function BlogContent() {
  const { openForm, isFormOpen, closeForm } = useForm();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen text-gray-900 font-inter bg-white" role="main">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm" role="navigation" aria-label="Main navigation">
          <div className="w-full px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/">
                  <img
                    src="/black logo .png"
                    alt="Baseaim Logo"
                    className="h-8 w-auto cursor-pointer"
                  />
                </a>
              </div>

              {/* Right Side - Navigation Links + CTA */}
              <div className="hidden md:flex items-center space-x-6">
                <a
                  href="/#how-it-works"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  How It Works
                </a>
                <a
                  href="/#services"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Solutions
                </a>
                <a
                  href="/about-us"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  About Us
                </a>
                <a
                  href="/blog"
                  className="text-blue-600 font-medium"
                >
                  Blog
                </a>
                <a
                  href="/#contact"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
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
                  className="text-gray-700 hover:text-blue-600 focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
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
            >
              <div className="p-6">
                {/* Mobile Navigation Links */}
                <nav className="space-y-4">
                  <a
                    href="/#how-it-works"
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How It Works
                  </a>
                  <a
                    href="/#services"
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Solutions
                  </a>
                  <a
                    href="/about-us"
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </a>
                  <a
                    href="/blog"
                    className="block text-lg font-medium text-blue-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </a>
                  <a
                    href="/#contact"
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                    onClick={() => setMobileMenuOpen(false)}
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

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <GradientBG />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
                <span className="text-gray-900">Insights & </span>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Updates
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 font-inter">
                Stay informed with the latest in AI automation, industry insights, and company updates from our LinkedIn feed.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 text-sm rounded-full border border-blue-400/30 text-blue-600 bg-blue-50">
                  AI Insights
                </span>
                <span className="px-4 py-2 text-sm rounded-full border border-blue-400/30 text-blue-600 bg-blue-50">
                  Industry Trends
                </span>
                <span className="px-4 py-2 text-sm rounded-full border border-blue-400/30 text-blue-600 bg-blue-50">
                  Company News
                </span>
                <span className="px-4 py-2 text-sm rounded-full border border-blue-400/30 text-blue-600 bg-blue-50">
                  Automation Tips
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Feed Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-gray-900">
                  Latest from LinkedIn
                </h2>
                <p className="text-lg text-gray-600 font-inter">
                  Follow our journey and get insights directly from our LinkedIn page
                </p>
              </div>

              {/* LinkedIn Feed Widget Container */}
              <div className="bg-white rounded-2xl shadow-lg p-8 relative">
                {/* SociableKIT LinkedIn Feed Widget - Using iframe */}
                <iframe
                  src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25606043"
                  frameBorder="0"
                  width="100%"
                  height="600"
                  className="rounded-lg"
                  title="LinkedIn Posts Feed"
                  loading="lazy"
                />
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <p className="text-gray-600 mb-6 font-inter">
                  Want to connect with us on LinkedIn?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.linkedin.com/company/baseaim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Follow Us on LinkedIn
                  </a>
                  <button
                    onClick={openForm}
                    className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Get In Touch
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat text-gray-900">
                  Stay Updated
                </h3>
                <p className="text-gray-600 mb-8 font-inter">
                  Get the latest AI automation insights and industry trends delivered to your inbox.
                </p>
                <button
                  onClick={openForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Subscribe to Updates
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Form Slider */}
      <FormSlider
        isOpen={isFormOpen}
        onClose={closeForm}
      />

      {/* Chatbot Widget */}
      <ChatbotWidget />

      {/* Floating Call CTA for Mobile */}
      <CallCTA />
    </>
  );
}

export default function Blog() {
  return (
    <FormProvider>
      <BlogContent />
    </FormProvider>
  );
}