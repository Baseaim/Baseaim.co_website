"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@/contexts/FormContext';
import { FormProvider } from '@/contexts/FormContext';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';
import FormSlider from '@/components/FormSlider';
import GradientBG from '@/components/GradientBG';

function AboutUsContent() {
  const { openForm, isFormOpen, closeForm } = useForm();

  return (
    <>
      <main className="min-h-screen text-gray-900 font-inter bg-white">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
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
                  href="/about-us" 
                  className="text-blue-600 font-medium"
                >
                  About Us
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
        <section className="relative pt-24 pb-16 overflow-hidden">
          <GradientBG />
          <div className="relative container mx-auto px-6 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-headline">
                  <span className="about-text">About</span> <span className="hero-highlight">Baseaim</span>
                </h1>
                <p className="hero-subheadline">
                  We're on a mission to help businesses thrive through intelligent AI automation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-montserrat">
                    Our <span className="values-text">Mission</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-inter font-medium mb-8">
                    At <span className="gradient-text-inline">BaseAim</span>, our mission is to lead at the forefront of the <span className="gradient-text-inline">AI revolution</span>. We help businesses harness the power of this AI gold rush — not with cookie-cutter strategies, but with long-term infrastructure built for growth and scale. We believe in true partnership, connecting our AI expertise with your vision to unlock measurable results.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden min-h-[300px]"
                >
                  <img 
                    src="/frames_1.44.1.png" 
                    alt="Our Mission" 
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-montserrat">
                  Our Values
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
                  The principles that guide everything we do
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Relentless Curiosity",
                    description: "We constantly explore, experiment, and push what's possible with AI.",
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    )
                  },
                  {
                    title: "Collaborative Excellence",
                    description: "We win together — with clients, partners, and our own team.",
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    )
                  },
                  {
                    title: "Play + Purpose",
                    description: "We take our mission seriously, but never ourselves. Work should energize, not drain.",
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    title: "Growth with Impact",
                    description: "We measure success not only by revenue, but by the time and freedom we give back.",
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    )
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-inter">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-montserrat">
                  Meet Our Founders
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
                  The visionaries behind Baseaim's mission to transform business through AI
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Khan Kim",
                    position: "COO & Co-Founder",
                    image: "/megamind-forehead.png",
                    socials: {
                      linkedin: "https://www.linkedin.com/in/khan-k",
                      twitter: "#",
                    }
                  },
                  {
                    name: "Eden Ryder Lee",
                    position: "CTO & Founder",
                    image: "/WhatsApp Image 2025-09-24 at 16.04.57.jpeg",
                    socials: {
                      linkedin: "https://www.linkedin.com/in/eden-lee-6016a4300/",
                      twitter: "#",
                    }
                  },
                  {
                    name: "Sora Nakayama",
                    position: "CGO & Co-Founder",
                    image: "/linked in profile pic.png",
                    socials: {
                      linkedin: "https://www.linkedin.com/in/sora-nakayama-a19a52286",
                      twitter: "#",
                    }
                  }
                ].map((founder, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                        {founder.image.startsWith('/api/placeholder') ? (
                          <div className="text-blue-600 text-center">
                            <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm text-blue-700 mt-2 font-medium">Photo Coming Soon</p>
                          </div>
                        ) : (
                          <img 
                            src={founder.image} 
                            alt={founder.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                          {founder.name}
                        </h3>
                        <p className="text-blue-600 font-medium mb-4 font-inter">
                          {founder.position}
                        </p>
                        
                        <div className="flex justify-center gap-3">
                          <a
                            href={founder.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          
                          <a
                            href={founder.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-montserrat">
                  What Makes Us <span className="different-text">Different</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
                  We don't just deliver solutions—we build partnerships that drive real, measurable growth
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Seamless Process",
                    description: "From onboarding to delivery, we ensure every step is smooth and efficient.",
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    title: "Tailored AI Roadmaps",
                    description: "Custom strategies built specifically for your unique business needs and goals.",
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    title: "ROI-Driven Approach",
                    description: "Every solution is designed to deliver measurable returns on your investment.",
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    )
                  },
                  {
                    title: "Long-term Partners",
                    description: "We're in it for the long haul, growing and evolving alongside your business.",
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    )
                  }
                ].map((differentiator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                      {differentiator.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                      {differentiator.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-inter">
                      {differentiator.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-montserrat">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-inter">
                  Let's discuss how we can create a custom AI automation solution tailored to your needs.
                </p>
                <button
                  onClick={openForm}
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg font-inter"
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

export default function AboutUs() {
  return (
    <FormProvider>
      <AboutUsContent />
    </FormProvider>
  );
}