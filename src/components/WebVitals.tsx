'use client';

import { useEffect } from 'react';

export function reportWebVitals(metric: any) {
  // You can send metrics to your analytics service here
  if (metric.label === 'web-vital') {
    console.log(metric); // Replace with your analytics service

    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
}

export default function WebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import web-vitals only on client side
      import('web-vitals').then((webVitals) => {
        webVitals.onCLS(reportWebVitals);
        webVitals.onINP(reportWebVitals);  // INP replaced FID in newer versions
        webVitals.onFCP(reportWebVitals);
        webVitals.onLCP(reportWebVitals);
        webVitals.onTTFB(reportWebVitals);
      });
    }
  }, []);

  return null;
}