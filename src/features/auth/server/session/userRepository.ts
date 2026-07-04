import type { User } from "@prisma/client";

import { prisma } from "@/lib/prisma";

export class UserRepository {

  /**
   * Find user by email.
   */
  static async findUserByEmail(
    email: string
  ): Promise<User | null> {

    return prisma.user.findUnique({
      where: {
        email,
      },
    });

  }

  /**
   * Find user by id.
   */
  static async findUserById(
    id: string
  ): Promise<User | null> {

    return prisma.user.findUnique({
      where: {
        id,
      },
    });

  }

  /**
   * Update profile completion.
   */
  static async updateProfileCompleted(
    id: string,
    profileCompleted: boolean
  ) {

    return prisma.user.update({

      where: {
        id,
      },

      data: {
        profileCompleted,
      },

    });

  }

  /**
   * Mark password as created.
   */
  static async markPasswordCreated(
    id: string
  ) {

    return prisma.user.update({

      where: {
        id,
      },

      data: {
        passwordCreated: true,
      },

    });

  }

  /**
   * Mark user as verified.
   */
  static async markVerified(
    id: string
  ) {

    return prisma.user.update({

      where: {
        id,
      },

      data: {
        isVerified: true,
      },

    });

  }

}