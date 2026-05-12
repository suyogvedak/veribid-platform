"use client";

import Navbar from "@/components/navbar/navbar";
import HammerScene from "@/components/hero/hammer-scene";

export default function HomeClient() {
  return (
    <main className="min-h-screen relative overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* 3D HAMMER */}
      <HammerScene />

      {/* HERO */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-6xl md:text-8xl font-bold leading-tight text-[var(--foreground)] drop-shadow-[0_0_30px_rgba(0,0,0,0.4)]">
          Next Generation
          <br />
          Auction Marketplace
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
          Buy, sell, and bid with immersive
          experiences, realtime auctions,
          and futuristic marketplace systems.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-violet-500/30 hover:scale-105 hover:shadow-violet-500/50 transition-all duration-300">
            Start Exploring
          </button>

          <button className="px-8 py-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-md text-[var(--foreground)] hover:scale-105 transition-all duration-300">
            Learn More
          </button>

        </div>

      </section>
    </main>
  );
}