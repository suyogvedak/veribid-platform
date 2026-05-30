"use client";

import Navbar from "@/components/navbar/navbar";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import JudgeHammer from "@/components/JudgeHammer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 overflow-hidden">
        
        <div
          className="
            absolute
            top-[-200px]
            left-[-100px]
            w-[500px]
            h-[500px]
            bg-violet-500/20
            blur-[160px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            top-[100px]
            right-[-150px]
            w-[500px]
            h-[500px]
            bg-fuchsia-500/20
            blur-[160px]
            rounded-full
          "
        />
      </div>

      {/* ANIMATED HAMMER BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        
        <Canvas
          camera={{
            position: [0, 0, 10],
            fov: 45,
          }}
        >
          {/* LIGHTING */}

          <ambientLight intensity={1.5} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
          />

          <pointLight
            position={[-5, 3, 5]}
            intensity={2}
          />

          {/* HAMMER MODEL */}

          <Suspense fallback={null}>
            <JudgeHammer />
          </Suspense>
        </Canvas>
      </div>

      {/* HERO SECTION */}
      <section
        className="
          relative
          z-10
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
        "
      >

        {/* TITLE */}

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

        {/* SUBTEXT */}

        <p
          className="
            mt-8
            max-w-2xl
            text-lg
            md:text-xl
            text-[var(--muted)]
            leading-relaxed
          "
        >
          Buy, sell, and bid in immersive
          realtime auction experiences.
        </p>

        {/* BUTTONS */}

        <div className="mt-12 flex items-center gap-6">

          {/* START BUTTON */}

          <button
            className="
              px-10
              py-5
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

          {/* SECONDARY BUTTON */}

          <button
            className="
              px-10
              py-5
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              backdrop-blur-xl
              text-lg
              text-[var(--foreground)]
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}