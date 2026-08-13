import type { User } from "@prisma/client";

/**
 * Request payload for registering
 * a new user.
 */
export interface SignupRequest {
  name: string;
  username: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
}

/**
 * Data required to create
 * a new user in the database.
 */
export interface CreateUserData {
  name: string;
  username: string;
  email: string;
  phone?: string;
  password: string;
}

/**
 * Successful signup result.
 */
export interface SignupResult {
  success: true;
  message: string;
  user: Pick<
    User,
    | "id"
    | "name"
    | "username"
    | "email"
    | "phone"
    | "profileCompleted"
    | "passwordCreated"
    | "isVerified"
  >;
}

/**
 * Failed signup result.
 */
export interface SignupFailure {
  success: false;
  message: string;
  field?: keyof SignupRequest;
}

/**
 * Service response.
 */
export type SignupResponse =
  | SignupResult
  | SignupFailure;