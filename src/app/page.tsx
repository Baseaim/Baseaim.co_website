"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import IndustryPainPoints from '@/components/IndustryPainPoints';
import CTASection from '@/components/CTASection';
import GradientBG from '@/components/GradientBG';
import MetricsBar from '@/components/MetricsBar';
import ProcessSteps from '@/components/ProcessSteps';
import DemoCTA from '@/components/DemoCTA';
import { FormProvider } from '@/contexts/FormContext';
import { useForm } from '@/contexts/FormContext';
import FormSlider from '@/components/FormSlider';
import ChatbotWidget from '@/components/ChatbotWidget';
import Footer from '@/components/Footer';
import AutomationBenefitsCard from '@/components/AutomationBenefitsCard';



function HomeContent() {
  const { openForm, isFormOpen, closeForm } = useForm();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
    <main className="min-h-screen text-gray-900 font-inter bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="w-full px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/black logo .png" 
                alt="Baseaim Logo" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Right Side - Navigation Links + CTA */}
            <div className="hidden md:flex items-center space-x-6">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                About Us
              </a>
              <a 
                href="/services" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Portfolio
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
                onClick={() => {/* Mobile menu toggle logic */}}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Premium Gradient Hero Section */}
      <Hero />

      {/* Industry Pain Points Section */}
      <IndustryPainPoints />

      {/* Metrics Bar Section */}
      <MetricsBar />

      {/* Premium Services Section */}
      <section id="services" className="py-20 relative solutions-section">
        {/* Continue Hero Gradient Background */}
        <GradientBG />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-30">
              <span className="pain-points-main-text">Our AI </span>
              <span className="pain-points-highlight">Solutions</span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))' }}></div>
          </motion.div>

            {/* Solutions Grid */}
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {/* Customer Experience Solution */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                <div className="absolute inset-0 -m-6 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-blue-end))' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-medium text-black mb-4 font-montserrat font-semibold">Customer Experience Automation</h3>
                  <p className="leading-relaxed font-inter text-sm mb-6 text-black">
                    AI-powered chatbots, automated follow-ups, and personalized customer journeys that enhance satisfaction and drive conversions.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 text-xs rounded-full border border-blue-400/30 text-blue-600 bg-blue-50">24/7 Support</span>
                    <span className="px-3 py-1 text-xs rounded-full border border-blue-400/30 text-blue-600 bg-blue-50">Lead Qualification</span>
                    <span className="px-3 py-1 text-xs rounded-full border border-blue-400/30 text-blue-600 bg-blue-50">Personalization</span>
                  </div>
                </div>
              </motion.div>

              {/* Operations Solution */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                <div className="absolute inset-0 -m-6 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-blue-end))' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-medium text-black mb-4 font-montserrat font-semibold">Operations & Workflow Intelligence</h3>
                  <p className="leading-relaxed font-inter text-sm mb-6 text-black">
                    Streamline processes with intelligent automation, data synchronization, and smart task routing that eliminates bottlenecks.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 text-xs rounded-full border border-cyan-400/20 text-cyan-300 bg-cyan-400/5">Process Automation</span>
                    <span className="px-3 py-1 text-xs rounded-full border border-cyan-400/20 text-cyan-300 bg-cyan-400/5">Data Integration</span>
                    <span className="px-3 py-1 text-xs rounded-full border border-cyan-400/20 text-cyan-300 bg-cyan-400/5">Smart Routing</span>
                  </div>
                </div>
              </motion.div>

              {/* Growth Solution */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                <div className="absolute inset-0 -m-6 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-blue-end))' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-medium text-black mb-4 font-montserrat font-semibold">Growth & Analytics Solutions</h3>
                  <p className="leading-relaxed font-inter text-sm mb-6 text-black">
                    Predictive insights, lead scoring, and performance analytics that identify opportunities and optimize your growth strategy.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 text-xs rounded-full border border-blue-400/20 text-blue-300 bg-blue-400/5">Predictive Analytics</span>
                    <span className="px-3 py-1 text-xs rounded-full border border-blue-400/20 text-blue-300 bg-blue-400/5">Lead Scoring</span>
                    <span className="px-3 py-1 text-xs rounded-full border border-blue-400/20 text-blue-300 bg-blue-400/5">Growth Insights</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Solutions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-16 mb-12"
            >
              <button
                onClick={openForm}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg font-inter"
              >
                Explore Our Solutions
              </button>
            </motion.div>

            {/* Process Steps */}
            <div className="mt-32">
              <ProcessSteps />
            </div>

          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-32 w-32 h-32 bg-cyan-500/3 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Automation Benefits Section */}
      <AutomationBenefitsCard />

      {/* Demo CTA Section */}
      <DemoCTA />

      {/* Benefits / Features Section */}
      <section className="benefits-section py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 font-montserrat">
                <span className="hero-highlight">Supercharge</span><span className="text-3xl md:text-4xl"> Your Workflow</span>
              </h2>
            </motion.div>

            {/* Benefits Grid */}
            <div className="benefits-grid">
              {/* Card 1 - Automate Tasks */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="benefits-card benefits-card-peach"
              >
                <div className="benefits-content">
                  <div className="benefits-text">
                    <span className="benefits-badge">Automate Tasks</span>
                    <h3 className="benefits-headline">Save Hours with AI-Powered Automation</h3>
                    <p className="benefits-body">Reduce manual work with smart automation that streamlines repetitive tasks, freeing up time for what matters most.</p>
                    <button onClick={openForm} className="benefits-cta">Get Started →</button>
                  </div>
                  <div className="benefits-image">
                    <svg width="120" height="120" viewBox="0 0 120 120" className="benefits-icon">
                      <circle cx="60" cy="60" r="50" fill="currentColor" opacity="0.1"/>
                      <path d="M60 20C71.046 20 80 28.954 80 40V50H85C87.761 50 90 52.239 90 55V85C90 87.761 87.761 90 85 90H35C32.239 90 30 87.761 30 85V55C30 52.239 32.239 50 35 50H40V40C40 28.954 48.954 20 60 20Z" fill="currentColor" opacity="0.15"/>
                      <path d="M45 40V50H75V40C75 31.716 68.284 25 60 25C51.716 25 45 31.716 45 40Z" fill="currentColor" opacity="0.2"/>
                      <circle cx="60" cy="67" r="8" fill="currentColor" opacity="0.3"/>
                      <path d="M55 67L58 70L65 63" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
                    </svg>
                  </div>
                </div>
              </motion.article>

              {/* Card 2 - Real-Time Collaboration */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="benefits-card benefits-card-blue"
              >
                <div className="benefits-content">
                  <div className="benefits-text">
                    <span className="benefits-badge">Real-Time Collaboration</span>
                    <h3 className="benefits-headline">Work Seamlessly with Your Team</h3>
                    <p className="benefits-body">Live collaboration, instant feedback, and version control—no more messy email threads.</p>
                    <button onClick={openForm} className="benefits-cta">Try It Now →</button>
                  </div>
                  <div className="benefits-image">
                    <svg width="120" height="120" viewBox="0 0 120 120" className="benefits-icon">
                      <circle cx="60" cy="60" r="50" fill="currentColor" opacity="0.1"/>
                      <circle cx="45" cy="40" r="12" fill="currentColor" opacity="0.2"/>
                      <circle cx="75" cy="40" r="12" fill="currentColor" opacity="0.2"/>
                      <circle cx="60" cy="70" r="12" fill="currentColor" opacity="0.2"/>
                      <path d="M45 52C45 60 52 65 60 65C68 65 75 60 75 52" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
                      <path d="M35 75L85 75" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
                      <circle cx="30" cy="75" r="3" fill="currentColor" opacity="0.4"/>
                      <circle cx="90" cy="75" r="3" fill="currentColor" opacity="0.4"/>
                    </svg>
                  </div>
                </div>
              </motion.article>

              {/* Card 3 - Powerful Integrations */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="benefits-card benefits-card-lavender"
              >
                <div className="benefits-content">
                  <div className="benefits-text">
                    <span className="benefits-badge">Powerful Integrations</span>
                    <h3 className="benefits-headline">Connect with Your Favorite Tools</h3>
                    <p className="benefits-body">Integrate with Slack, Notion, Zapier, and more to keep your workflow efficient.</p>
                    <button onClick={openForm} className="benefits-cta">Explore Integrations →</button>
                  </div>
                  <div className="benefits-image">
                    <svg width="120" height="120" viewBox="0 0 120 120" className="benefits-icon">
                      <circle cx="60" cy="60" r="50" fill="currentColor" opacity="0.1"/>
                      <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.25"/>
                      <circle cx="80" cy="40" r="8" fill="currentColor" opacity="0.25"/>
                      <circle cx="40" cy="80" r="8" fill="currentColor" opacity="0.25"/>
                      <circle cx="80" cy="80" r="8" fill="currentColor" opacity="0.25"/>
                      <circle cx="60" cy="60" r="10" fill="currentColor" opacity="0.3"/>
                      <path d="M48 48L52 52" stroke="currentColor" strokeWidth="3" opacity="0.4"/>
                      <path d="M68 52L72 48" stroke="currentColor" strokeWidth="3" opacity="0.4"/>
                      <path d="M48 72L52 68" stroke="currentColor" strokeWidth="3" opacity="0.4"/>
                      <path d="M68 68L72 72" stroke="currentColor" strokeWidth="3" opacity="0.4"/>
                    </svg>
                  </div>
                </div>
              </motion.article>

              {/* Card 4 - Advanced Analytics */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="benefits-card benefits-card-mint"
              >
                <div className="benefits-content">
                  <div className="benefits-text">
                    <span className="benefits-badge">Advanced Analytics</span>
                    <h3 className="benefits-headline">Make Data-Driven Decisions</h3>
                    <p className="benefits-body">Real-time analytics and reports to optimize performance and drive better results.</p>
                    <button onClick={openForm} className="benefits-cta">View Insights →</button>
                  </div>
                  <div className="benefits-image">
                    <svg width="120" height="120" viewBox="0 0 120 120" className="benefits-icon">
                      <circle cx="60" cy="60" r="50" fill="currentColor" opacity="0.1"/>
                      <rect x="25" y="65" width="8" height="25" fill="currentColor" opacity="0.25"/>
                      <rect x="40" y="55" width="8" height="35" fill="currentColor" opacity="0.3"/>
                      <rect x="55" y="40" width="8" height="50" fill="currentColor" opacity="0.35"/>
                      <rect x="70" y="50" width="8" height="40" fill="currentColor" opacity="0.3"/>
                      <rect x="85" y="60" width="8" height="30" fill="currentColor" opacity="0.25"/>
                      <path d="M30 45L44 35L58 25L72 30L86 40" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.4"/>
                      <circle cx="30" cy="45" r="3" fill="currentColor" opacity="0.5"/>
                      <circle cx="44" cy="35" r="3" fill="currentColor" opacity="0.5"/>
                      <circle cx="58" cy="25" r="3" fill="currentColor" opacity="0.5"/>
                      <circle cx="72" cy="30" r="3" fill="currentColor" opacity="0.5"/>
                      <circle cx="86" cy="40" r="3" fill="currentColor" opacity="0.5"/>
                    </svg>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 font-montserrat">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 font-inter">
                Everything you need to know about our AI automation services
              </p>
            </motion.div>

            {/* FAQ Items */}
            <div className="divide-y divide-gray-200">
              {[
                {
                  question: "How long does implementation take?",
                  answer: "Most implementations take 2-4 weeks depending on complexity. We work closely with your team to ensure minimal disruption to your current operations while maximizing the efficiency gains."
                },
                {
                  question: "What kind of support do you provide?",
                  answer: "We offer comprehensive 24/7 support including setup assistance, training for your team, ongoing maintenance, and regular optimization reviews to ensure peak performance."
                },
                {
                  question: "Can you integrate with our existing systems?",
                  answer: "Yes! Our solutions are designed to seamlessly integrate with popular CRM systems, communication tools, and business applications. We handle all technical integration work."
                },
                {
                  question: "What's the ROI on AI automation?",
                  answer: "Our clients typically see 40-60% reduction in manual task time within the first 3 months, leading to significant cost savings and improved productivity that pays for the investment quickly."
                },
                {
                  question: "Do you offer custom solutions?",
                  answer: "Absolutely. Every business is unique, so we tailor our AI automation solutions to match your specific workflows, industry requirements, and growth objectives."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="py-6"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left hover:text-blue-600 transition-colors duration-200 group"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 font-montserrat pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-2">
                      <svg
                        className={`w-5 h-5 text-gray-400 group-hover:text-blue-600 transform transition-transform duration-200 ${
                          openFaqIndex === index ? 'rotate-45' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaqIndex === index ? 'auto' : 0,
                      opacity: openFaqIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2">
                      <p className="text-gray-600 leading-relaxed font-inter">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-gray-600 mb-6 font-inter">
                Still have questions? We're here to help.
              </p>
              <button
                onClick={openForm}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-medium rounded-lg transition-all duration-200 hover:scale-105 font-inter"
              >
                Get In Touch
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

export default function Home() {
  return (
    <FormProvider>
      <HomeContent />
    </FormProvider>
  );
}