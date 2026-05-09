"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import ThemeToggle from "../ui/theme-toggle";
import Container from "../layout/container";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0
        w-full z-50
        backdrop-blur-xl
        border-b border-[var(--border)]
        bg-[var(--card)]
      "
    >
      <Container>
        <div className="h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide"
          >
            VeriBid
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/">Explore</Link>
            <Link href="/">Auctions</Link>

            <ThemeToggle />

            <button
              className="
                px-5 py-2
                rounded-xl
                border border-[var(--border)]
                hover:bg-white/10
                transition
              "
            >
              Login
            </button>

            <button
              className="
                px-5 py-2
                rounded-xl
                bg-violet-600
                hover:bg-violet-700
                transition
              "
            >
              Sign Up
            </button>
          </div>

          {/* MOBILE MENU */}
          <button
            className="
              md:hidden
              w-10 h-10
              flex items-center justify-center
            "
          >
            <Menu />
          </button>
        </div>
      </Container>
    </nav>
  );
}