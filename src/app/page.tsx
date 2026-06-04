"use client";

import Navbar from "@/components/navbar/navbar";
import Link from "next/link";

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

        
        {/* LEFT HAMMER */}
{/* LEFT HAMMER */}
{/* LEFT HAMMER */}
<div
  className="
    absolute
    left-[20px]
    top-[40px]
    w-[520px]
    h-[520px]
    z-10
    pointer-events-none
  "
>
  <Canvas
    camera={{
      position: [0, 0, 12],
      fov: 40,
    }}
  >
    <ambientLight intensity={1.8} />

    <directionalLight
      position={[5, 5, 5]}
      intensity={2.5}
    />

    <pointLight
      position={[-5, 2, 5]}
      intensity={2}
    />

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
  <div className="text-center mb-12">

    <h2 className="text-5xl font-black">
      Quick Access
    </h2>

    <p className="mt-4 text-[var(--muted)]">
      Access important platform tools instantly.
    </p>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <Link href="/verification">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">

        <div className="text-5xl mb-6">✔️</div>

        <h3 className="text-2xl font-bold mb-4">
          Verification
        </h3>

        <p className="text-[var(--muted)]">
          Verify sellers and buyers before participating.
        </p>

      </div>
    </Link>

    <Link href="/dashboard">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">

        <div className="text-5xl mb-6">📊</div>

        <h3 className="text-2xl font-bold mb-4">
          Dashboard
        </h3>

        <p className="text-[var(--muted)]">
          Monitor bids, listings and analytics.
        </p>

      </div>
    </Link>

    <Link href="/support">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">

        <div className="text-5xl mb-6">🎧</div>

        <h3 className="text-2xl font-bold mb-4">
          Support
        </h3>

        <p className="text-[var(--muted)]">
          Get help regarding auctions and payments.
        </p>

      </div>
    </Link>

  </div>
</section>

<section className="px-10 md:px-20 py-32">
  <h2 className="text-5xl font-black">
    Live Auctions
  </h2>

  <p className="mt-6 text-xl text-[var(--muted)]">
    Participate in realtime bidding experiences.
  </p>

  <Link href="/auctions">
    <button
      className="
        mt-10
        px-8
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        to-fuchsia-600
        text-white
      "
    >
      Explore Auctions
    </button>
  </Link>
</section>

<section className="px-10 md:px-20 py-32">
  <h2 className="text-5xl font-black">
    Sell Your Items
  </h2>

  <p className="mt-6 text-xl text-[var(--muted)]">
    Create listings and start earning through auctions.
  </p>

  <Link href="/sell">
    <button
      className="
        mt-10
        px-8
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        to-fuchsia-600
        text-white
      "
    >
      Start Selling
    </button>
  </Link>
</section>

<section className="px-10 md:px-20 py-32">

  <h2 className="text-5xl font-black">
    Global Marketplace
  </h2>

  <p className="mt-6 text-xl text-[var(--muted)] max-w-3xl">
    Connect with buyers and sellers around the world
    through a secure and immersive auction ecosystem.
  </p>

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