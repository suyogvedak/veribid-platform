"use client";

import Navbar from "@/components/navbar/navbar";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import JudgeHammer from "@/components/JudgeHammer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">

      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 overflow-hidden">

        {/* LEFT GLOW */}
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

        {/* RIGHT GLOW */}
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

      {/* MAIN HERO SECTION */}
      <section
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-between
          px-10
          md:px-20
          pt-20
        "
      >

        {/* ========================================= */}
        {/* LEFT SIDE - FLOATING HAMMER */}
        {/* ========================================= */}

        
        <div
          className="
          absolute
          left-[-80px]
          top-[-80px]
          w-[700px]
          h-[700px]
          z-0
          overflow-visible
          pointer-events-none
          "
        >
          <Canvas
            gl={{ alpha: true }}

            style={{
              background: "transparent",
            }}

            camera={{
              position: [0, 0, 8],
              fov: 40,
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

        {/* ========================================= */}
        {/* RIGHT SIDE - HERO CONTENT */}
        {/* ========================================= */}

        <div
          className="
            relative
            z-10
            ml-auto
            max-w-[700px]
            text-left
          "
        >

          {/* TITLE */}

          <h1
            className="
              text-6xl
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
              text-lg
              md:text-xl
              text-[var(--muted)]
              leading-relaxed
              max-w-[650px]
            "
          >
            Buy, sell, and bid in immersive realtime
            auction experiences.
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
        </div>
      </section>

      {/* ========================================= */}
      {/* FEATURES SECTION */}
      {/* ========================================= */}

      <section
        className="
          relative
          z-10
          px-10
          md:px-20
          pb-32
        "
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            <div className="text-5xl mb-6">⚡</div>

            <h3 className="text-2xl font-bold mb-4">
              Realtime Auctions
            </h3>

            <p className="text-[var(--muted)] leading-relaxed">
              Experience lightning-fast live bidding with
              immersive realtime interactions.
            </p>
          </div>

          {/* CARD 2 */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            <div className="text-5xl mb-6">🔒</div>

            <h3 className="text-2xl font-bold mb-4">
              Secure Marketplace
            </h3>

            <p className="text-[var(--muted)] leading-relaxed">
              Advanced protection systems ensure safe and
              transparent auction experiences.
            </p>
          </div>

          {/* CARD 3 */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            <div className="text-5xl mb-6">🌎</div>

            <h3 className="text-2xl font-bold mb-4">
              Global Access
            </h3>

            <p className="text-[var(--muted)] leading-relaxed">
              Connect buyers and sellers worldwide with
              futuristic digital auction systems.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* FOOTER */}
      {/* ========================================= */}

      <footer
        className="
          relative
          z-10
          border-t
          border-white/10
          py-8
          px-10
          md:px-20
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          text-sm
          text-[var(--muted)]
        "
      >
        <div>
          © 2026 VeriBid. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:text-white transition-colors">
            Privacy
          </button>

          <button className="hover:text-white transition-colors">
            Terms
          </button>

          <button className="hover:text-white transition-colors">
            Contact
          </button>
        </div>
      </footer>
    </main>
  );
}