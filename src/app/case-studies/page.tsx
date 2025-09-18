"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@/contexts/FormContext';
import { FormProvider } from '@/contexts/FormContext';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';
import FormSlider from '@/components/FormSlider';

function CaseStudiesContent() {
  const { openForm, isFormOpen, closeForm } = useForm();

  const caseStudies = [
    {
      title: "Dental Practice Automation",
      industry: "Healthcare",
      results: "300% increase in appointment bookings",
      description: "Automated patient scheduling, follow-ups, and insurance verification for a growing dental practice.",
      metrics: [
        { value: "95%", label: "calls automated" },
        { value: "300%", label: "boost in appointments" },
        { value: "60%", label: "reduction in admin time" }
      ],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Real Estate Lead Management",
      industry: "Real Estate",
      results: "450% increase in qualified leads",
      description: "AI-powered lead qualification and nurturing system that converts website visitors into qualified prospects.",
      metrics: [
        { value: "450%", label: "increase in qualified leads" },
        { value: "80%", label: "faster response time" },
        { value: "45%", label: "higher conversion rate" }
      ],
      image: "/api/placeholder/400/300"
    },
    {
      title: "E-commerce Customer Support",
      industry: "E-commerce",
      results: "24/7 customer support automation",
      description: "Intelligent chatbot handling order inquiries, returns, and product recommendations around the clock.",
      metrics: [
        { value: "90%", label: "of queries resolved automatically" },
        { value: "40%", label: "reduction in support costs" },
        { value: "85%", label: "customer satisfaction" }
      ],
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <>
      <main className="min-h-screen text-gray-900 font-inter bg-white">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="w-full px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/">
                  <img 
                    src="/black logo .png" 
                    alt="Baseaim Logo" 
                    className="h-8 w-auto"
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
                  href="/case-studies" 
                  className="text-blue-600 font-medium"
                >
                  Case Studies
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
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 font-montserrat">
                  Real Results from <span className="text-blue-600">Real Businesses</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
                  See how our AI automation solutions have transformed businesses across different industries.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-12">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      {/* Content */}
                      <div className="space-y-6">
                        <div>
                          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
                            {study.industry}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-montserrat">
                            {study.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed font-inter">
                            {study.description}
                          </p>
                        </div>

                        {/* Key Result */}
                        <div className="bg-blue-50 rounded-xl p-6">
                          <h4 className="text-lg font-semibold text-blue-900 mb-2 font-montserrat">
                            Key Result
                          </h4>
                          <p className="text-blue-700 font-medium">
                            {study.results}
                          </p>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                          {study.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className="text-2xl font-bold text-blue-600 font-montserrat">
                                {metric.value}
                              </div>
                              <div className="text-sm text-gray-600 font-inter">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Image Placeholder */}
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center min-h-[300px]">
                        <div className="text-blue-600 text-center">
                          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <p className="text-blue-700 font-medium">Case Study Visual</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-montserrat">
                  Ready to Get Similar Results?
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-inter">
                  Let's discuss how we can create a custom AI automation solution for your business.
                </p>
                <button
                  onClick={openForm}
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg font-inter"
                >
                  Start Your Success Story
                </button>
              </motion.div>
            </div>
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
    </>
  );
}

export default function CaseStudies() {
  return (
    <FormProvider>
      <CaseStudiesContent />
    </FormProvider>
  );
}