"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { FormProvider } from '@/contexts/FormContext';
import { useForm } from '@/contexts/FormContext';
import FormSlider from '@/components/FormSlider';
import ChatbotWidget from '@/components/ChatbotWidget';

function TermsOfServiceContent() {
  const { openForm, isFormOpen, closeForm } = useForm();

  return (
    <>
      <main className="min-h-screen text-gray-900 font-inter bg-white">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <a href="/">
                  <img
                    src="/black logo .png"
                    alt="Baseaim Logo"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-6">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                  Home
                </a>
                <a href="/about-us" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                  About Us
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

        {/* Terms of Service Content */}
        <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
                Terms of Service
              </h1>
              <p className="text-gray-600 mb-8">
                Effective Date: December 2024
              </p>

              <div className="prose prose-gray max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    By accessing or using Baseaim's AI automation services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Services. These Terms constitute a legally binding agreement between you and Baseaim.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    2. Service Description
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Baseaim provides AI-powered automation solutions for businesses, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Workflow automation and optimization</li>
                    <li>AI-powered customer support systems</li>
                    <li>Data analytics and insights</li>
                    <li>System integration services</li>
                    <li>Custom automation development</li>
                    <li>Training and consultation services</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    We reserve the right to modify, suspend, or discontinue any part of our Services at any time with reasonable notice.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    3. Account Registration
                  </h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Account Creation</h3>
                  <p className="text-gray-600 mb-4">
                    To use certain features of our Services, you must create an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized access</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Account Termination</h3>
                  <p className="text-gray-600 mb-4">
                    We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent or illegal activities.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    4. Acceptable Use Policy
                  </h2>
                  <p className="text-gray-600 mb-4">You agree not to use our Services to:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon intellectual property rights</li>
                    <li>Transmit malicious code, viruses, or harmful content</li>
                    <li>Engage in unauthorized data collection or mining</li>
                    <li>Interfere with or disrupt the Services or servers</li>
                    <li>Attempt to gain unauthorized access to any systems</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Use the Services for competitive analysis or benchmarking</li>
                    <li>Resell or redistribute the Services without authorization</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    5. Pricing and Payment
                  </h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Subscription Plans</h3>
                  <p className="text-gray-600 mb-4">
                    Our Services are offered through various subscription plans. Pricing details are available on our website and may be updated periodically. You agree to pay all fees according to your selected plan.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Billing</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                    <li>Subscriptions are billed in advance on a monthly or annual basis</li>
                    <li>All fees are non-refundable unless otherwise stated</li>
                    <li>You authorize us to charge your payment method automatically</li>
                    <li>Taxes may apply based on your location</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Late Payments</h3>
                  <p className="text-gray-600 mb-4">
                    Late payments may result in service suspension. We reserve the right to charge interest on overdue amounts at the rate of 1.5% per month or the maximum rate permitted by law.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    6. Intellectual Property Rights
                  </h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Our Property</h3>
                  <p className="text-gray-600 mb-4">
                    All content, features, and functionality of the Services, including software, text, images, logos, and designs, are owned by Baseaim or our licensors and are protected by intellectual property laws.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Your Content</h3>
                  <p className="text-gray-600 mb-4">
                    You retain ownership of content you submit to our Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, process, and store your content solely to provide the Services.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Feedback</h3>
                  <p className="text-gray-600 mb-4">
                    Any feedback, suggestions, or ideas you provide may be used by us without any obligation to compensate you.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    7. Data Protection and Privacy
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Your use of our Services is also governed by our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>. You acknowledge that:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>You have all necessary rights to submit data to our Services</li>
                    <li>You will comply with applicable data protection laws</li>
                    <li>We process data according to your instructions and our Privacy Policy</li>
                    <li>You are responsible for the accuracy and legality of your data</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    8. Service Level Agreement
                  </h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Availability</h3>
                  <p className="text-gray-600 mb-4">
                    We strive to maintain 99.9% uptime for our Services, excluding scheduled maintenance. Service credits may be available for extended downtime as outlined in your subscription agreement.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Support</h3>
                  <p className="text-gray-600 mb-4">
                    Technical support is provided according to your subscription tier. Response times and support channels vary by plan.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    9. Warranties and Disclaimers
                  </h2>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-gray-700 font-semibold mb-2">DISCLAIMER</p>
                    <p className="text-gray-600 text-sm">
                      THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                    </p>
                  </div>

                  <p className="text-gray-600 mb-4">We do not warrant that:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>The Services will meet all of your requirements</li>
                    <li>The Services will be uninterrupted, secure, or error-free</li>
                    <li>Results obtained from the Services will be accurate or reliable</li>
                    <li>Any errors in the Services will be corrected</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    10. Limitation of Liability
                  </h2>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <p className="text-gray-700 font-semibold mb-2">LIMITATION</p>
                    <p className="text-gray-600 text-sm">
                      IN NO EVENT SHALL BASEAIM BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICES.
                    </p>
                  </div>

                  <p className="text-gray-600 mb-4">
                    Our total liability to you for any claims arising from these Terms or the Services shall not exceed the amount you paid us in the twelve months preceding the claim.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    11. Indemnification
                  </h2>
                  <p className="text-gray-600 mb-4">
                    You agree to indemnify, defend, and hold harmless Baseaim, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising from:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Your use of the Services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any third-party rights</li>
                    <li>Any content you submit to the Services</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    12. Termination
                  </h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">By You</h3>
                  <p className="text-gray-600 mb-4">
                    You may terminate your account at any time through your account settings or by contacting support. Termination does not entitle you to refunds for unused subscription periods.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">By Us</h3>
                  <p className="text-gray-600 mb-4">
                    We may terminate or suspend your account immediately for violations of these Terms or for any other reason at our sole discretion with notice.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Effect of Termination</h3>
                  <p className="text-gray-600 mb-4">
                    Upon termination, your right to use the Services ceases immediately. We may delete your data after a reasonable retention period unless legally required to retain it.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    13. Governing Law and Disputes
                  </h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Governing Law</h3>
                  <p className="text-gray-600 mb-4">
                    These Terms are governed by the laws of Victoria, Australia, without regard to conflict of law principles.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Dispute Resolution</h3>
                  <p className="text-gray-600 mb-4">
                    Any disputes arising from these Terms shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration in Melbourne, Victoria, Australia.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Class Action Waiver</h3>
                  <p className="text-gray-600 mb-4">
                    You agree to resolve disputes with us on an individual basis and waive your right to participate in class actions or class arbitrations.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    14. General Provisions
                  </h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Entire Agreement</h3>
                  <p className="text-gray-600 mb-4">
                    These Terms, together with our Privacy Policy and any other agreements you enter with us, constitute the entire agreement between you and Baseaim.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Severability</h3>
                  <p className="text-gray-600 mb-4">
                    If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in effect.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Waiver</h3>
                  <p className="text-gray-600 mb-4">
                    Our failure to enforce any right or provision shall not constitute a waiver of that right or provision.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Assignment</h3>
                  <p className="text-gray-600 mb-4">
                    You may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights to any successor or affiliate.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    15. Changes to Terms
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We reserve the right to modify these Terms at any time. Material changes will be notified via email or through the Services at least 30 days before taking effect. Your continued use after changes constitutes acceptance of the modified Terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    16. Contact Information
                  </h2>
                  <p className="text-gray-600 mb-4">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">Baseaim Legal Department</p>
                    <p className="text-gray-600">Email: legal@baseaim.com</p>
                    <p className="text-gray-600">Phone: +1 (234) 567-8900</p>
                    <p className="text-gray-600">Location: Melbourne, VIC, Australia</p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatbotWidget />
      {isFormOpen && <FormSlider onClose={closeForm} />}
    </>
  );
}

export default function TermsOfServicePage() {
  return (
    <FormProvider>
      <TermsOfServiceContent />
    </FormProvider>
  );
}