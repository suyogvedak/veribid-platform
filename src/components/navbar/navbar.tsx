"use client";

import Link from "next/link";

import {
  Menu,
  User,
  LayoutDashboard,
  ShieldCheck,
  Heart,
  Gavel,
  LogOut,
} from "lucide-react";

import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  useSession,
  signOut,
} from "next-auth/react";

import ThemeToggle from "../ui/theme-toggle";
import Container from "../layout/container";

export default function Navbar() {
  const { data: session } = useSession();

  const [profileOpen, setProfileOpen] =
    useState(false);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

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
            className="
              text-2xl
              font-bold
              tracking-wide
              text-[var(--foreground)]
              cursor-pointer
            "
          >
            VeriBid
          </Link>

          {/* DESKTOP NAV */}

          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="
                text-[var(--foreground)]
                hover:text-violet-500
                transition-all
                cursor-pointer
              "
            >
              Home
            </Link>

            <Link
              href="/explore"
              className="
                text-[var(--foreground)]
                hover:text-violet-500
                transition-all
                cursor-pointer
              "
            >
              Explore
            </Link>

            <Link
              href="/auctions"
              className="
                text-[var(--foreground)]
                hover:text-violet-500
                transition-all
                cursor-pointer
              "
            >
              Auctions
            </Link>

            <ThemeToggle />

            {!session ? (
              <>
                <Link
                  href="/auth/login"
                  className="
                    px-5 py-2
                    rounded-xl
                    border border-[var(--border)]
                    bg-[var(--card)]
                    text-[var(--foreground)]
                    hover:opacity-80
                    transition-all
                    cursor-pointer
                  "
                >
                  Login
                </Link>

                <Link
                  href="/auth/signup"
                  className="
                    px-5 py-2
                    rounded-xl
                    bg-black
                    text-white
                    dark:bg-white
                    dark:text-black
                    hover:scale-105
                    transition-all
                    duration-300
                    shadow-lg
                    cursor-pointer
                  "
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div
                className="relative"
                ref={dropdownRef}
              >

                {/* PROFILE BUTTON */}

                <button
                  onClick={() =>
                    setProfileOpen(
                      !profileOpen
                    )
                  }
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-gradient-to-r
                    from-violet-600
                    to-fuchsia-600
                    flex
                    items-center
                    justify-center
                    text-white
                    hover:scale-105
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {session.user?.image ? (
                    <img
                      src={
                        session.user.image
                      }
                      alt="Profile"
                      className="
                        w-full
                        h-full
                        rounded-full
                        object-cover
                      "
                    />
                  ) : (
                    <User size={20} />
                  )}
                </button>

                {/* DROPDOWN */}

                {profileOpen && (
                  <div
                className="
                 absolute
                 top-16
                 right-0
                 w-72
                 rounded-3xl
                 border
                 border-zinc-200
                 dark:border-zinc-800
                 bg-white
                 dark:bg-zinc-900
                  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  overflow-hidden
                  z-[9999]
                "
              >

                    {/* USER INFO */}

                    <div
                      className="
                        px-5
                        py-5
                        border-b
                       border-zinc-200
                       dark:border-zinc-800
                     "
                    >
                      <div className="flex items-center gap-3">

                        <div
                          className="
                            w-12
                            h-12
                            rounded-full
                            bg-gradient-to-r
                            from-violet-600
                            to-fuchsia-600
                            flex
                            items-center
                            justify-center
                            text-white
                          "
                        >
                          {session.user?.image ? (
                            <img
                              src={
                                session.user.image
                              }
                              alt="Profile"
                              className="
                                w-full
                                h-full
                                rounded-full
                                object-cover
                              "
                            />
                          ) : (
                            <User size={20} />
                          )}
                        </div>

                        <div>
                          <p
                            className="
                              font-semibold
                             text-black
                             dark:text-white
                            "
                          >
                            {session.user?.name}
                          </p>

                          <p
                            className="
                              text-xs
                             text-zinc-600
                             dark:text-zinc-400
                              truncate
                              max-w-[180px]
                            "
                          >
                            {
                              session.user
                                ?.email
                            }
                          </p>
                        </div>

                      </div>
                    </div>

                    {/* MENU */}

                    <Link
                      href="/profile"
                      onClick={() =>
                        setProfileOpen(false)
                      }
                      className="
                        flex
                        items-center
                        gap-3
                        px-5
                        py-4
                       hover:bg-zinc-100
                       dark:hover:bg-zinc-800
                        transition-all
                        duration-300
                        whitespace-nowrap
                       cursor-pointer
                       text-black
                       dark:text-white

                      "
                    >
                      <User size={18} />
                      Profile
                    </Link>

                    <Link
                      href="/dashboard"
                      onClick={() =>
                        setProfileOpen(false)
                      }
                      className="
                        flex
                        items-center
                        gap-3
                        px-5
                        py-4
                       hover:bg-zinc-100
                       dark:hover:bg-zinc-800
                        transition-all
                        duration-300
                        whitespace-nowrap
                       cursor-pointer
                       text-black
                       dark:text-white
                      "
                    >
                      <LayoutDashboard size={18} />
                      Dashboard
                    </Link>

                    <Link
                      href="/my-auctions"
                      onClick={() =>
                        setProfileOpen(false)
                      }
                      className="
                        flex
                        items-center
                        gap-3
                        px-5
                        py-4
                       hover:bg-zinc-100
                       dark:hover:bg-zinc-800
                        transition-all
                        duration-300
                        whitespace-nowrap
                       cursor-pointer
                       text-black
                       dark:text-white
                      "
                    >
                      <Gavel size={18} />
                      My Auctions
                    </Link>

                    <Link
                      href="/watchlist"
                      onClick={() =>
                        setProfileOpen(false)
                      }
                      className="
                        flex
                        items-center
                        gap-3
                        px-5
                        py-4
                       hover:bg-zinc-100
                       dark:hover:bg-zinc-800
                        transition-all
                        duration-300
                        whitespace-nowrap
                       cursor-pointer
                       text-black
                       dark:text-white
                      "
                    >
                      <Heart size={18} />
                      Watchlist
                    </Link>

                    <Link
                      href="/verification"
                      onClick={() =>
                        setProfileOpen(false)
                      }
                      className="
                        flex
                        items-center
                        gap-3
                        px-5
                        py-4
                       hover:bg-zinc-100
                       dark:hover:bg-zinc-800
                        transition-all
                        duration-300
                        whitespace-nowrap
                        cursor-pointer
                       text-black
                       dark:text-white  
                      "
                    >
                      <ShieldCheck size={18} />
                      Verification
                    </Link>

                    <div className="border-t border-zinc-200 dark:border-zinc-800" />

                    <button
                      onClick={() => {
                        setProfileOpen(false);

                        signOut({
                          callbackUrl: "/",
                        });
                      }}
                      className="
                        w-full
                        flex
                        items-center
                        gap-3
                        px-5
                        py-4
                        hover:bg-red-500/10
                        transition-all
                        duration-300
                        text-red-500
                        cursor-pointer
                      "
                    >
                      <LogOut size={18} />
                      Logout
                    </button>

                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE MENU */}

          <button
            className="
              md:hidden
              w-10
              h-10
              flex
              items-center
              justify-center
              text-[var(--foreground)]
              cursor-pointer
            "
          >
            <Menu />
          </button>

        </div>
      </Container>
    </nav>
  );
}