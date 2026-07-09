import type { User } from "@prisma/client";

export interface LinkAccountInput {

  email: string;

  provider: string;

  providerAccountId: string;

}

export interface LinkAccountResult {

  success: boolean;

  linked: boolean;

  user: User | null;

  reason?: string;

}