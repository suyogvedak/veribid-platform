"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AuctionHammer() {
  return (
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        overflow-hidden
        pointer-events-none
        z-0
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          w-[800px]
          h-[800px]
          rounded-full
          bg-violet-500/20
          blur-3xl
        "
      />

      {/* HAMMER ANIMATION */}
      <motion.div
        animate={{
          rotate: [-35, -35, 10, -35],
          y: [-120, -120, 40, -120],
          scale: [1, 1, 1.05, 1],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.45, 0.6, 1],
        }}
        style={{
          transformOrigin: "top left",
        }}
        className="relative"
      >
        <Image
          src="/images/hammer.png"
          alt="Auction Hammer"
          width={650}
          height={650}
          priority
          className="
            opacity-90
            drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]
          "
        />
      </motion.div>

      {/* IMPACT EFFECT */}
      <motion.div
        animate={{
          scale: [0, 0, 1.5, 0],
          opacity: [0, 0, 0.5, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeOut",
          times: [0, 0.5, 0.65, 1],
        }}
        className="
          absolute
          bottom-[18%]
          w-52
          h-52
          rounded-full
          border
          border-violet-400/40
        "
      />
    </div>
  );
}