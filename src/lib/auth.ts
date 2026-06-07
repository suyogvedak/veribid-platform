import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";

export const authOptions = {
adapter: PrismaAdapter(prisma),

session: {
strategy: "jwt" as const,
},

providers: [
GoogleProvider({
clientId: process.env.GOOGLE_CLIENT_ID || "",
clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
}),


CredentialsProvider({
  name: "credentials",

  credentials: {
    email: {
      label: "Email",
      type: "email",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },

  async authorize(credentials) {
    const email = credentials?.email as string;
    const password = credentials?.password as string;

    if (!email || !password) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return null;
    }

    const valid = await bcrypt.compare(
      password,
      user.password
    );

    if (!valid) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
    };
  },
}),


],

pages: {
signIn: "/auth/login",
},

secret: process.env.NEXTAUTH_SECRET,
};
