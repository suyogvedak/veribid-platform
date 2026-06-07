"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const response = await fetch(
      "/api/auth/register",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      }
    );

    if (response.ok) {
      router.push("/auth/login");
    } else {
      alert("Signup failed");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignup}
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
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="p-3 border rounded-xl"
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="p-3 border rounded-xl"
        />

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
          Sign Up
        </button>
      </form>
    </main>
  );
}