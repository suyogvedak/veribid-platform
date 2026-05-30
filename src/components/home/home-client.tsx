"use client";

import Navbar from "@/components/navbar/navbar";
import HammerScene from "@/components/hero/hammer-scene";

export default function HomeClient() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full" />
        <div className="absolute top-[100px] right-[-150px] w-[500px] h-[500px] bg-pink-500/20 blur-[160px] rounded-full" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* 3D Hammer Scene */}
      <HammerScene />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        
  <div className="max-w-4xl text-center">
    
    <h1
      className="
        text-5xl
        md:text-7xl
        lg:text-8xl
        font-black
        leading-tight
        tracking-tight
      "
    >
      Next Gen
      <br />
      Auctions
    </h1>

    <p
      className="
        mt-8
        text-lg
        md:text-xl
        text-white/70
        leading-relaxed
      "
    >
      Buy, sell, and bid in immersive
      realtime auction experiences.
    </p>

    <div className="mt-12 flex items-center justify-center gap-6">
      
      <button
        className="
          px-10 py-5
          rounded-2xl
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-600
          text-white
          text-lg
          font-bold
          shadow-[0_0_40px_rgba(168,85,247,0.5)]
          hover:scale-105
          transition-all
          duration-300
        "
      >
        Start Exploring
      </button>

      <button
        className="
          px-10 py-5
          rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          text-lg
          text-white
          hover:bg-white/10
          transition-all
          duration-300
        "
      >
        Learn More
      </button>
    </div>
  </div>
</section>
    </main>
  );
}