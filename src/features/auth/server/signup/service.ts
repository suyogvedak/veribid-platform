import {
  SignupRepository,
} from "./repository";

import {
  SignupValidator,
} from "./validator";

import {
  SignupMapper,
} from "./mapper";

import type {
  SignupRequest,
  SignupResponse,
} from "./types";

import {
  DuplicateEmailError,
  DuplicateUsernameError,
  DuplicatePhoneError,
} from "./errors";

import {
  EmailValidator,
  PhoneValidator,
  UsernameValidator,
} from "../../shared/validators";

import {
  PasswordService,
} from "../password";

/**
 * Signup service.
 *
 * Responsible for orchestrating the complete
 * registration workflow.
 *
 * This class does not communicate with Prisma
 * directly and does not contain validation rules.
 */
export class SignupService {
  /**
   * Register a new user.
   *
   * Flow:
   *
   * 1. Normalize input
   * 2. Validate input
   * 3. Check duplicate email
   * 4. Check duplicate username
   * 5. Check duplicate phone
   * 6. Hash password
   * 7. Create user
   * 8. Map database result
   */
  static async register(
    request: SignupRequest,
  ): Promise<SignupResponse> {

    // --------------------------------------------------
    // 1. Normalize input
    // --------------------------------------------------

    const email =
      EmailValidator.normalize(
        request.email,
      );

    const username =
      UsernameValidator.normalize(
        request.username,
      );

    const phone =
      request.phone
        ? PhoneValidator.normalize(
            request.phone,
          )
        : undefined;

    const normalizedRequest: SignupRequest = {
      ...request,

      name:
        request.name.trim(),

      email,

      username,

      phone,
    };

    // --------------------------------------------------
    // 2. Validate input
    // --------------------------------------------------

    await SignupValidator.validate(
      normalizedRequest,
    );

    // --------------------------------------------------
    // 3. Check duplicate email
    // --------------------------------------------------

    const emailExists =
      await SignupRepository.emailExists(
        email,
      );

    if (emailExists) {
      throw new DuplicateEmailError();
    }

    // --------------------------------------------------
    // 4. Check duplicate username
    // --------------------------------------------------

    const usernameExists =
      await SignupRepository.usernameExists(
        username,
      );

    if (usernameExists) {
      throw new DuplicateUsernameError();
    }

    // --------------------------------------------------
    // 5. Check duplicate phone
    // --------------------------------------------------

    if (phone) {

      const phoneExists =
        await SignupRepository.phoneExists(
          phone,
        );

      if (phoneExists) {
        throw new DuplicatePhoneError();
      }
    }

    // --------------------------------------------------
    // 6. Hash password
    // --------------------------------------------------

    const hashedPassword =
      await PasswordService.hash(
        normalizedRequest.password,
      );

    // --------------------------------------------------
    // 7. Create database user
    // --------------------------------------------------

    const user =
      await SignupRepository.createUser({

        name:
          normalizedRequest.name,

        username,

        email,

        phoneNumber:
          phone ?? null,

        password:
          hashedPassword,

      });

    // --------------------------------------------------
    // 8. Map database result
    // --------------------------------------------------

    return SignupMapper.toResult(
      user,
    );
  }
}