"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

async function handleLogin(
e: React.FormEvent<HTMLFormElement>
) {
e.preventDefault();

setLoading(true);
setError("");

try {
  const result = await signIn(
    "credentials",
    {
      email,
      password,
      redirect: false,
    }
  );

  if (result?.error) {
    setError("Invalid email or password");
    setLoading(false);
    return;
  }

  window.location.href = "/";
} catch (err) {
  console.error(err);

  setError(
    "Something went wrong. Please try again."
  );

  setLoading(false);
}


}

return ( <main className="min-h-screen flex items-center justify-center px-6"> <form
     onSubmit={handleLogin}
     className="
       flex
       flex-col
       gap-4
       w-[420px]
       p-8
       rounded-3xl
       border
       border-white/10
       bg-white/5
       backdrop-blur-xl
     "
   > <h1 className="text-3xl font-bold">
Login </h1>


    {error && (
      <div
        className="
          text-red-500
          text-sm
          rounded-xl
          p-3
          border
          border-red-500/30
        "
      >
        {error}
      </div>
    )}

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) =>
        setEmail(e.target.value)
      }
      className="
        p-3
        border
        border-white/10
        rounded-xl
        bg-transparent
      "
      required
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      className="
        p-3
        border
        border-white/10
        rounded-xl
        bg-transparent
      "
      required
    />

    <button
      type="submit"
      disabled={loading}
      className="
        bg-violet-600
        text-white
        py-3
        rounded-xl
        font-semibold
        hover:bg-violet-700
        transition-all
        disabled:opacity-50
      "
    >
      {loading
        ? "Logging in..."
        : "Login"}
    </button>

    <button
      type="button"
      onClick={() =>
        signIn("google", {
          callbackUrl: "/",
        })
      }
      className="
        border
        border-white/10
        py-3
        rounded-xl
        hover:bg-white/5
        transition-all
      "
    >
      Continue With Google
    </button>
  </form>
</main>

);
}
