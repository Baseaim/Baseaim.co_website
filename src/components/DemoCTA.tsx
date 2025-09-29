"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CallOption from './CallOption';

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  businessName: string;
}

export default function DemoCTA() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    phone: '+61 ',
    businessName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim() || formData.phone.trim() === '+61') {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      // Reset form or show success message
      alert('Demo request submitted successfully!');
      setFormData({
        firstName: '',
        email: '',
        phone: '+61 ',
        businessName: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            {/* Logo */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                <img 
                  src="/BASEAIM BLACK.png" 
                  alt="Baseaim Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              
              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 font-montserrat">
                Put your details here
              </h2>
              
              {/* Subheading */}
              <p className="text-gray-600 font-inter">
                to get your automation blueprint
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Grid for form fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`
                      w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-colors duration-200 font-inter
                      ${errors.firstName ? 'border-red-300 focus:ring-red-500' : ''}
                    `}
                    placeholder="First name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`
                      w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-colors duration-200 font-inter
                      ${errors.email ? 'border-red-300 focus:ring-red-500' : ''}
                    `}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`
                      w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-colors duration-200 font-inter
                      ${errors.phone ? 'border-red-300 focus:ring-red-500' : ''}
                    `}
                    placeholder="+61 xxx xxx xxx"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className={`
                      w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      transition-colors duration-200 font-inter
                      ${errors.businessName ? 'border-red-300 focus:ring-red-500' : ''}
                    `}
                    placeholder="Business name"
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium
                  transition-all duration-200 hover:shadow-lg font-inter
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  'Send'
                )}
              </motion.button>
            </form>

            {/* Call Option Alternative */}
            <CallOption variant="compact" className="mt-6 pt-4 border-t border-gray-100 text-center" />

            {/* Disclaimer */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center leading-relaxed font-inter">
                By clicking Send you agree to receive autodialed calls and emails from Talk AI and agree to Privacy Policy.
                We will only send demo calls to local Australian numbers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}