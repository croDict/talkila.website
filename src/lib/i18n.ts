export const defaultLocale = "de" as const;
export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export const APP_STORE_URL =
  "https://apps.apple.com/app/talkila/id0000000000"; // TODO: Replace with real App Store URL

export const SUPPORT_EMAIL = "support@talkila.com";
