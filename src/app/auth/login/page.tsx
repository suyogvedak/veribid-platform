"use client";

import { signIn } from "next-auth/react";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    await signIn("credentials", {
      email,
      password,

      callbackUrl: "/dashboard",
    });
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="
          flex
          flex-col
          gap-4
          w-[420px]
          p-8
          rounded-3xl
          border
        "
      >
        <h1 className="text-3xl font-bold">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="p-3 border rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="p-3 border rounded-xl"
        />

        <button
          type="submit"
          className="
            bg-violet-600
            text-white
            py-3
            rounded-xl
          "
        >
          Login
        </button>

        <button
          type="button"
          onClick={() =>
            signIn("google", {
              callbackUrl:
                "/dashboard",
            })
          }
          className="
            border
            py-3
            rounded-xl
          "
        >
          Continue With Google
        </button>
      </form>
    </main>
  );
}