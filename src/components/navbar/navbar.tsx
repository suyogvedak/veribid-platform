"use client";

import Container from "../layout/container";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            VeriBid
          </h1>

          <div className="flex gap-6">
            <button>Explore</button>
            <button>Auctions</button>
            <button>Login</button>
          </div>
        </div>
      </Container>
    </nav>
  );
}