import { DefaultSession } from "next-auth";
import NextAuth from "next-auth";

declare module "next-auth" {
interface Session {
user: {
id: string;
role: string;
isVerified: boolean;
} & DefaultSession["user"];
}
}

declare module "next-auth/jwt" {
interface JWT {
id: string;
role: string;
isVerified: boolean;
}
}


declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}