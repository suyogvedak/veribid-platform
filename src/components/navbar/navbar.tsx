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
          
          <Link
            href="/"
            className="
              text-2xl
              font-bold
              tracking-wide
              text-[var(--foreground)]
            "
          >
            VeriBid
          </Link>

          <div className="hidden md:flex items-center gap-8">
            
            <Link
              href="/"
              className="text-[var(--foreground)]"
            >
              Home
            </Link>

            <Link
              href="/"
              className="text-[var(--foreground)]"
            >
              Explore
            </Link>

            <Link
              href="/"
              className="text-[var(--foreground)]"
            >
              Auctions
            </Link>

            <ThemeToggle />

            <button
              className="
                px-5 py-2
                rounded-xl
                border border-[var(--border)]
                bg-[var(--card)]
                text-[var(--foreground)]
                hover:opacity-80
                transition
              "
            >
              Login
            </button>

            <button
              className="
                px-5 py-2
                rounded-xl
                bg-[var(--primary)]
                text-white
                hover:opacity-90
                transition
              "
            >
              Sign Up
            </button>
          </div>

          <button
            className="
              md:hidden
              w-10 h-10
              flex items-center justify-center
              text-[var(--foreground)]
            "
          >
            <Menu />
          </button>
        </div>
      </Container>
    </nav>
  );
}