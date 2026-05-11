"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="
          w-10 h-10
          rounded-full
          border border-[var(--border)]
          bg-[var(--card)]
        "
      />
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        w-10 h-10
        rounded-full
        flex items-center justify-center
        border border-[var(--border)]
        bg-[var(--card)]
        backdrop-blur-md
        hover:scale-105
        transition
      "
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}