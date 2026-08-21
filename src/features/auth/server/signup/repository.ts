import type { Prisma, User } from "@prisma/client";

import { prisma } from "@/lib/prisma";

import {
  DatabaseError,
} from "../../shared/errors";

import {
  DATABASE_ERRORS,
} from "../../shared/errors";

/**
 * Data required to create a user.
 *
 * This is intentionally kept local to the
 * repository because it represents the
 * database creation operation.
 */
export interface SignupUserCreateData {
  name: string;
  username: string;
  email: string;
  phoneNumber?: string | null;
  password: string;
}

/**
 * Signup repository.
 *
 * Responsible only for database access
 * required by the signup workflow.
 *
 * Business rules belong in SignupService.
 * Validation belongs in SignupValidator.
 */
export class SignupRepository {
  /**
   * Check whether an email is already registered.
   */
  static async emailExists(
    email: string,
  ): Promise<boolean> {
    try {
      const user =
        await prisma.user.findUnique({
          where: {
            email,
          },
          select: {
            id: true,
          },
        });

      return user !== null;
    } catch (error) {
      console.error(
        "[SignupRepository] Failed to check email:",
        error,
      );

      throw new DatabaseError(
        DATABASE_ERRORS.FETCH_FAILED,
      );
    }
  }

  /**
   * Check whether a username is already registered.
   */
  static async usernameExists(
    username: string,
  ): Promise<boolean> {
    try {
      const user =
        await prisma.user.findUnique({
          where: {
            username,
          },
          select: {
            id: true,
          },
        });

      return user !== null;
    } catch (error) {
      console.error(
        "[SignupRepository] Failed to check username:",
        error,
      );

      throw new DatabaseError(
        DATABASE_ERRORS.FETCH_FAILED,
      );
    }
  }

  /**
   * Check whether a phone number is already
   * associated with an account.
   */
  static async phoneExists(
    phoneNumber: string,
  ): Promise<boolean> {
    try {
      const user =
        await prisma.user.findFirst({
          where: {
            phoneNumber,
          },
          select: {
            id: true,
          },
        });

      return user !== null;
    } catch (error) {
      console.error(
        "[SignupRepository] Failed to check phone:",
        error,
      );

      throw new DatabaseError(
        DATABASE_ERRORS.FETCH_FAILED,
      );
    }
  }

  /**
   * Create a new user.
   *
   * Password must already be hashed before
   * this method is called.
   */
  static async createUser(
    data: SignupUserCreateData,
  ): Promise<User> {
    try {
      const user =
        await prisma.user.create({
          data: {
            name: data.name,
            username: data.username,
            email: data.email,
            phoneNumber:
              data.phoneNumber ?? null,
            password: data.password,

            /**
             * Explicit defaults for the
             * authentication state.
             */
            passwordCreated: true,
            profileCompleted: false,
            isVerified: false,
          },
        });

      return user;
    } catch (error) {
      console.error(
        "[SignupRepository] Failed to create user:",
        error,
      );

      throw new DatabaseError(
        DATABASE_ERRORS.CREATE_FAILED,
      );
    }
  }

  /**
   * Find a newly-created user by ID.
   *
   * Useful after registration when the
   * service needs a clean database record.
   */
  static async findUserById(
    id: string,
  ): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(
        "[SignupRepository] Failed to find user:",
        error,
      );

      throw new DatabaseError(
        DATABASE_ERRORS.FETCH_FAILED,
      );
    }
  }
}