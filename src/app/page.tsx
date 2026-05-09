import Navbar from "@/components/navbar/navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section
        className="
          h-screen
          flex flex-col
          items-center
          justify-center
          text-center
          px-6
        "
      >
        <h1
          className="
            text-6xl md:text-8xl
            font-bold
            leading-tight
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
            text-white/70
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
              bg-violet-600
              hover:bg-violet-700
              transition
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
            "
          >
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}