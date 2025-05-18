import { useEffect, useState } from "react";
import StripeRevenueTile from "@/components/StripeRevenueTile";
import ResumeVaultTile from "@/components/ResumeVaultTile";
import EmpireExpansionMap from "@/components/EmpireExpansionMap";
import NDALegalConsole from "@/components/NDALegalConsole";
import GlobalCommandTicker from "@/components/GlobalCommandTicker";

export default function CICCommandCenter() {
  const [mounted, setMounted] = useState(false);
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
