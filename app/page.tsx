/**
 * CIC Command Center - Main Dashboard Page
 * 
 * Implements Next.js 13 App Router architecture
 * https://nextjs.org/docs/app/building-your-application/routing
 * 
 * Uses client-side rendering for interactive components following
 * Next.js best practices for state management
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components
 */

"use client";

import { useEffect, useState } from "react";
import StripeRevenueTile from "@/components/StripeRevenueTile";
import ResumeVaultTile from "@/components/ResumeVaultTile";
import EmpireExpansionMap from "@/components/EmpireExpansionMap";
import NDALegalConsole from "@/components/NDALegalConsole";
import GlobalCommandTicker from "@/components/GlobalCommandTicker";

/**
 * CIC Command Center Dashboard Component
 * 
 * Implements hydration-safe rendering pattern to prevent React hydration mismatches
 * Pattern recommended by Next.js documentation:
 * https://nextjs.org/docs/messages/react-hydration-error
 * 
 * @returns {JSX.Element | null} The dashboard component or null during SSR
 */
export default function CICCommandCenter() {
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch by only rendering after client-side mount
  // This follows React 18 concurrent rendering best practices
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black text-white p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <h1 className="col-span-full text-3xl font-bold text-green-400 border-b border-green-600 pb-2">
        CIC COMMAND CENTER – LIVE OPS
      </h1>
      <StripeRevenueTile />
      <ResumeVaultTile />
      <EmpireExpansionMap />
      <NDALegalConsole />
      <GlobalCommandTicker />
    </main>
  );
}
