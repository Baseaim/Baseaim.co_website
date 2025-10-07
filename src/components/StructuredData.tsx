import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'faq' | 'breadcrumb';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Baseaim",
          "url": "https://baseaim.co",
          "logo": "https://baseaim.co/logo.png",
          "description": "Leading AI automation company specializing in custom AI solutions, business process automation, and intelligent workflow optimization.",
          "foundingDate": "2024",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://twitter.com/baseaim",
            "https://linkedin.com/company/baseaim"
          ],
          "serviceArea": {
            "@type": "Place",
            "name": "Worldwide"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Automation Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom AI Solutions",
                  "description": "Tailored AI automation solutions for business process optimization"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Business Process Automation",
                  "description": "Intelligent workflow automation to eliminate repetitive tasks"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "AI Consulting",
                  "description": "Strategic AI implementation consulting for enterprise growth"
                }
              }
            ]
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Automation Services",
          "description": "Custom AI solutions and business process automation to increase efficiency by 300%+",
          "provider": {
            "@type": "Organization",
            "name": "Baseaim"
          },
          "serviceType": "AI Automation",
          "category": "Technology Services",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "USD"
            }
          },
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Services Portfolio",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Customer Experience Automation",
                  "description": "AI-powered chatbots, automated follow-ups, and personalized customer journeys"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Operations & Workflow Intelligence",
                  "description": "Streamline processes with intelligent automation and smart task routing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Growth & Analytics Solutions", 
                  "description": "Predictive insights, lead scoring, and performance analytics"
                }
              }
            ]
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long does AI implementation take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most AI implementations take 2-4 weeks depending on complexity. We work closely with your team to ensure minimal disruption to your current operations while maximizing the efficiency gains."
              }
            },
            {
              "@type": "Question", 
              "name": "What kind of support do you provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer comprehensive 24/7 support including setup assistance, training for your team, ongoing maintenance, and regular optimization reviews to ensure peak performance."
              }
            },
            {
              "@type": "Question",
              "name": "Can you integrate with our existing systems?", 
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Our solutions are designed to seamlessly integrate with popular CRM systems, communication tools, and business applications. We handle all technical integration work."
              }
            },
            {
              "@type": "Question",
              "name": "What's the ROI on AI automation?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "Our clients typically see 40-60% reduction in manual task time within the first 3 months, leading to significant cost savings and improved productivity that pays for the investment quickly."
              }
            }
          ]
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}