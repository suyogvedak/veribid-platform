import Navbar from "@/components/navbar/navbar";
import { Gavel } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      
      <Navbar />

      {/* BACKGROUND GAVEL */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          opacity-10
        "
      >
        <Gavel
          size={500}
          strokeWidth={1}
          className="text-[var(--foreground)]"
        />
      </div>

      {/* HERO SECTION */}
      <section
        className="
          relative
          z-10
          h-screen
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
        "
      >
        <h1
          className="
            text-6xl
            md:text-8xl
            font-bold
            leading-tight
            text-[var(--foreground)]
          "
        >
          Next Generation
          <br />
          Auction Marketplace
        </h1>

        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            text-[var(--muted)]
          "
        >
          Buy, sell, and bid with immersive
          experiences, realtime auctions,
          and futuristic marketplace systems.
        </p>

        <div className="mt-10 flex gap-4">
          
          <button
  className="
    px-8 py-4
    rounded-2xl
    bg-gradient-to-r
    from-violet-600
    to-fuchsia-600
    text-white
    font-semibold
    shadow-lg
    shadow-violet-500/30
    hover:scale-105
    hover:shadow-violet-500/50
    transition-all
    duration-300
  "
>
  Start Exploring
</button>

          <button
            className="
              px-8 py-4
              rounded-2xl
              border border-[var(--border)]
              bg-[var(--card)]
              backdrop-blur-md
              text-[var(--foreground)]
            "
          >
            Learn More
          </button>

        </div>
      </section>
    </main>
  );
}