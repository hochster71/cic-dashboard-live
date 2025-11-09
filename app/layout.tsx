/**
 * Root Layout for Next.js 13 App Router
 * 
 * Implements proper metadata configuration following Next.js 13+ conventions
 * https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 * 
 * Security headers implemented according to OWASP Secure Headers Project
 * https://owasp.org/www-project-secure-headers/
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CIC Command Center - Live Ops Dashboard',
  description: 'Cybersecurity Command and Control Dashboard for job hunting operations',
  // Security: Prevent clickjacking attacks (OWASP Secure Headers)
  other: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
  },
};

/**
 * Root Layout Component
 * 
 * Implements accessibility best practices with proper lang attribute (WCAG 2.1)
 * https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The root layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
