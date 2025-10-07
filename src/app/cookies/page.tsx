"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { FormProvider } from '@/contexts/FormContext';
import { useForm } from '@/contexts/FormContext';
import FormSlider from '@/components/FormSlider';
import ChatbotWidget from '@/components/ChatbotWidget';

function CookiePolicyContent() {
  const { openForm, isFormOpen, closeForm} = useForm();

  return (
    <>
      <main className="min-h-screen text-gray-900 font-inter bg-white">
        <Navigation variant="solid" onOpenForm={openForm} />

        {/* Cookie Policy Content */}
        <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
                Cookie Policy
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
                    This Cookie Policy explains how Baseaim ("we," "our," or "us") uses cookies and similar tracking technologies on our website and services. By using our website, you consent to our use of cookies as described in this policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    2. What Are Cookies?
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Remembering your preferences and settings</li>
                    <li>Understanding how you use our website</li>
                    <li>Improving our services based on usage patterns</li>
                    <li>Providing personalized content and features</li>
                    <li>Ensuring security and preventing fraud</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    3. Types of Cookies We Use
                  </h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Essential Cookies</h3>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 font-semibold mb-2">Always Active</p>
                    <p className="text-gray-600 text-sm mb-3">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                      <li>Session management and authentication</li>
                      <li>Security tokens and fraud prevention</li>
                      <li>Load balancing and server routing</li>
                      <li>Essential site navigation</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Performance Cookies</h3>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 font-semibold mb-2">Optional</p>
                    <p className="text-gray-600 text-sm mb-3">
                      These cookies help us understand how visitors interact with our website.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                      <li>Google Analytics for traffic analysis</li>
                      <li>Page load time monitoring</li>
                      <li>Error tracking and debugging</li>
                      <li>A/B testing and optimization</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Functional Cookies</h3>
                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 font-semibold mb-2">Optional</p>
                    <p className="text-gray-600 text-sm mb-3">
                      These cookies enable enhanced functionality and personalization.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                      <li>Language and region preferences</li>
                      <li>Chatbot conversation history</li>
                      <li>User interface customization</li>
                      <li>Form auto-fill information</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Marketing Cookies</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 font-semibold mb-2">Optional</p>
                    <p className="text-gray-600 text-sm mb-3">
                      These cookies track your online activity to help advertisers deliver more relevant advertising.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                      <li>Remarketing and retargeting campaigns</li>
                      <li>Social media integration</li>
                      <li>Conversion tracking</li>
                      <li>Interest-based advertising</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    4. Third-Party Cookies
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We work with third-party services that may set cookies on your device:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Provider</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Purpose</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-600">Google Analytics</td>
                          <td className="px-4 py-3 text-sm text-gray-600">Website analytics and performance</td>
                          <td className="px-4 py-3 text-sm text-gray-600">Performance</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-600">Google Tag Manager</td>
                          <td className="px-4 py-3 text-sm text-gray-600">Tag management and tracking</td>
                          <td className="px-4 py-3 text-sm text-gray-600">Performance</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-600">n8n Chatbot</td>
                          <td className="px-4 py-3 text-sm text-gray-600">Customer support automation</td>
                          <td className="px-4 py-3 text-sm text-gray-600">Functional</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-600">LinkedIn</td>
                          <td className="px-4 py-3 text-sm text-gray-600">Social media sharing and analytics</td>
                          <td className="px-4 py-3 text-sm text-gray-600">Marketing</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-600">Facebook</td>
                          <td className="px-4 py-3 text-sm text-gray-600">Social media integration</td>
                          <td className="px-4 py-3 text-sm text-gray-600">Marketing</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    5. Cookie Duration
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Cookies can be either "session" or "persistent" cookies:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Session Cookies</h4>
                      <p className="text-gray-600 text-sm">
                        Temporary cookies that are deleted when you close your browser. Used for maintaining your session and security.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Persistent Cookies</h4>
                      <p className="text-gray-600 text-sm">
                        Remain on your device for a set period (up to 2 years). Used for remembering preferences and analytics.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    6. Managing Cookies
                  </h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Browser Settings</h3>
                  <p className="text-gray-600 mb-4">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                    <li>View what cookies are stored on your device</li>
                    <li>Delete cookies individually or entirely</li>
                    <li>Block third-party cookies</li>
                    <li>Block all cookies from specific websites</li>
                    <li>Block all cookies entirely</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Browser-Specific Instructions</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">
                      • <a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a>
                    </p>
                    <p className="text-gray-600">
                      • <a href="https://support.mozilla.org/en-US/kb/cookies" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
                    </p>
                    <p className="text-gray-600">
                      • <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a>
                    </p>
                    <p className="text-gray-600">
                      • <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a>
                    </p>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                    <p className="text-gray-700 font-semibold mb-2">Important Note</p>
                    <p className="text-gray-600 text-sm">
                      Disabling cookies may affect the functionality of our website. Some features may not work properly without cookies enabled.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    7. Cookie Consent
                  </h2>
                  <p className="text-gray-600 mb-4">
                    When you first visit our website, you will see a cookie consent banner. You can:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your cookie preferences</li>
                    <li>Change your preferences at any time through cookie settings</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Your consent is valid for 12 months, after which we will ask for your consent again.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    8. Do Not Track Signals
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Some browsers offer a "Do Not Track" (DNT) signal. Currently, our website does not respond to DNT signals, but you can still manage cookies through the methods described above.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    9. Children's Privacy
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Our services are not directed at children under 18. We do not knowingly collect information from children through cookies. If you believe we have inadvertently collected such information, please contact us.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    10. International Users
                  </h2>
                  <p className="text-gray-600 mb-4">
                    If you are accessing our website from outside the United States, please note that cookie data may be transferred to and processed in the United States, where data protection laws may differ from your jurisdiction.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    11. Updates to This Policy
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. The "Last updated" date at the top indicates when this policy was last revised. We encourage you to review this policy periodically.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                    12. Contact Us
                  </h2>
                  <p className="text-gray-600 mb-4">
                    If you have questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">Baseaim Privacy Team</p>
                    <p className="text-gray-600">Email: privacy@baseaim.com</p>
                    <p className="text-gray-600">Phone: +1 (234) 567-8900</p>
                    <p className="text-gray-600">Location: Melbourne, VIC, Australia</p>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">Your Privacy Matters</p>
                    <p className="text-gray-600 text-sm">
                      We are committed to transparency about our data practices. If you have concerns about how we use cookies or handle your data, please don't hesitate to reach out to our privacy team.
                    </p>
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

export default function CookiePolicyPage() {
  return (
    <FormProvider>
      <CookiePolicyContent />
    </FormProvider>
  );
}