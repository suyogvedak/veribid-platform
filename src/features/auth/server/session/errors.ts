export const AUTH_ERRORS = {
  UNAUTHORIZED: {
    code: "UNAUTHORIZED",

    message: "You must be logged in.",
  },

  FORBIDDEN: {
    code: "FORBIDDEN",

    message:
      "You don't have permission to perform this action.",
  },

  USER_NOT_FOUND: {
    code: "USER_NOT_FOUND",

    message: "Authenticated user not found.",
  },

  SESSION_EMAIL_MISSING: {
    code: "SESSION_EMAIL_MISSING",

    message:
      "Authenticated session does not contain an email address.",
  },
} as const;

export type AuthErrorCode =
  keyof typeof AUTH_ERRORS;