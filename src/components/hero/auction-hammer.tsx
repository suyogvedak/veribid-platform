"use client";

import { motion } from "framer-motion";
import { Gavel } from "lucide-react";

export default function AuctionHammer() {
  return (
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
        overflow-hidden
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          w-[700px]
          h-[700px]
          bg-violet-500/20
          blur-3xl
          rounded-full
        "
      />

      {/* HAMMER */}
      <motion.div
        animate={{
          rotate: [-35, -35, 0, -35],
          y: [-100, -100, 20, -100],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.4, 0.6, 1],
        }}
        style={{
          transformOrigin: "top left",
        }}
        className="
          relative
        "
      >
        <Gavel
          size={500}
          strokeWidth={1.5}
          className="
            text-violet-500/30
            drop-shadow-[0_0_40px_rgba(139,92,246,0.6)]
          "
        />
      </motion.div>

      {/* IMPACT RING */}
      <motion.div
        animate={{
          scale: [0, 0, 1.2, 0],
          opacity: [0, 0, 0.5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          times: [0, 0.55, 0.65, 1],
        }}
        className="
          absolute
          bottom-[22%]
          w-40
          h-40
          rounded-full
          border
          border-violet-400/40
        "
      />
    </div>
  );
}