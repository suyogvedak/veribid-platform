export const ACCOUNT_LINKING_ERRORS = {

  EMAIL_ALREADY_IN_USE: {

    code: "EMAIL_ALREADY_IN_USE",

    message:
      "An account already exists with this email.",

  },

  PROVIDER_ALREADY_LINKED: {

    code: "PROVIDER_ALREADY_LINKED",

    message:
      "This provider is already linked.",

  },

  PROVIDER_NOT_LINKED: {

    code: "PROVIDER_NOT_LINKED",

    message:
      "Authentication provider is not linked.",

  },

  ACCOUNT_NOT_FOUND: {

    code: "ACCOUNT_NOT_FOUND",

    message:
      "Account not found.",

  },

} as const;