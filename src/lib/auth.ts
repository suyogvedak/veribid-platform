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
          username: user.username,
        };
      },
    }),
  ],

 callbacks: {
  async jwt({
    token,
    user,
  }: {
    token: any;
    user: any;
  }) {

    if (user) {
      token.id = user.id;
      token.username =
        user.username;
    }

    if (token.email) {
      const dbUser =
        await prisma.user.findUnique({
          where: {
            email:
              token.email,
          },
        });

      if (dbUser) {
        token.id =
          dbUser.id;

        token.username =
          dbUser.username;
      }
    }

    return token;
  },

  async session({
    session,
    token,
  }: {
    session: any;
    token: any;
  }) {

    if (session.user) {
      session.user.id =
        token.id;

      session.user.username =
        token.username;
    }

    return session;
  },
},
};