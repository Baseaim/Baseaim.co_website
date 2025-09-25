"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { FormProvider } from '@/contexts/FormContext';
import { useForm } from '@/contexts/FormContext';
import FormSlider from '@/components/FormSlider';
import ChatbotWidget from '@/components/ChatbotWidget';

function PrivacyPolicyContent() {
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

        {/* Privacy Policy Content */}
        <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
                Privacy Policy
              </h1>
              <p className="text-gray-600 mb-8">
                Last updated: December 2024
              </p>

              <div className="prose prose-gray max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    1. Introduction
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Baseaim ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI automation services and visit our website.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    2. Information We Collect
                  </h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Personal Information</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company name and business details</li>
                    <li>Billing and payment information</li>
                    <li>Communication preferences</li>
                    <li>Account credentials</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Business Data</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                    <li>Workflow and process data you input for automation</li>
                    <li>Analytics and performance metrics</li>
                    <li>Integration data from connected services</li>
                    <li>Customer interaction logs</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Technical Information</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Cookies and usage data</li>
                    <li>Log files and analytics data</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-gray-600 mb-4">We use the collected information for:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Providing and maintaining our AI automation services</li>
                    <li>Processing transactions and managing your account</li>
                    <li>Customizing automation solutions for your business needs</li>
                    <li>Communicating with you about services, updates, and support</li>
                    <li>Improving our services and developing new features</li>
                    <li>Analyzing usage patterns and optimizing performance</li>
                    <li>Complying with legal obligations and protecting our rights</li>
                    <li>Preventing fraud and ensuring security</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    4. Data Sharing and Disclosure
                  </h2>
                  <p className="text-gray-600 mb-4">We may share your information with:</p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Service Providers</h3>
                  <p className="text-gray-600 mb-4">
                    Third-party vendors who assist in providing our services, including cloud hosting providers, payment processors, and analytics services.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Integration Partners</h3>
                  <p className="text-gray-600 mb-4">
                    With your consent, we may share data with third-party services you choose to integrate with our platform (e.g., CRM systems, marketing tools).
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Legal Requirements</h3>
                  <p className="text-gray-600 mb-4">
                    We may disclose information if required by law, court order, or government request, or to protect our rights, property, or safety.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Business Transfers</h3>
                  <p className="text-gray-600 mb-4">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    5. Data Security
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We implement appropriate technical and organizational measures to protect your information, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and audits</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                    <li>Regular backups and disaster recovery plans</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    6. Data Retention
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We retain your information for as long as necessary to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide our services and maintain your account</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Maintain business records for analysis and auditing</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    When retention is no longer necessary, we securely delete or anonymize your data.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    7. Your Rights and Choices
                  </h2>
                  <p className="text-gray-600 mb-4">Depending on your location, you may have the right to:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your information</li>
                    <li><strong>Portability:</strong> Receive your data in a portable format</li>
                    <li><strong>Objection:</strong> Object to certain processing activities</li>
                    <li><strong>Restriction:</strong> Request restriction of processing</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    8. Cookies and Tracking Technologies
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We use cookies and similar tracking technologies to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Maintain your session and preferences</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Personalize your experience</li>
                    <li>Provide targeted advertising</li>
                    <li>Detect and prevent fraud</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    You can manage cookie preferences through your browser settings. For more details, see our <a href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</a>.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    9. International Data Transfers
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Standard contractual clauses</li>
                    <li>Data processing agreements</li>
                    <li>Compliance with applicable data protection laws</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    10. Children's Privacy
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    11. Third-Party Links
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies before providing any information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    12. California Privacy Rights (CCPA)
                  </h2>
                  <p className="text-gray-600 mb-4">
                    California residents have additional rights under the California Consumer Privacy Act (CCPA), including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Right to know what personal information is collected</li>
                    <li>Right to know whether personal information is sold or disclosed</li>
                    <li>Right to opt-out of the sale of personal information</li>
                    <li>Right to non-discrimination for exercising privacy rights</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    13. Updates to This Policy
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    14. Contact Us
                  </h2>
                  <p className="text-gray-600 mb-4">
                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">Baseaim Privacy Team</p>
                    <p className="text-gray-600">Email: privacy@baseaim.com</p>
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
      {isFormOpen && <FormSlider isOpen={isFormOpen} onClose={closeForm} />}
    </>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <FormProvider>
      <PrivacyPolicyContent />
    </FormProvider>
  );
}