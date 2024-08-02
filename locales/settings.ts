export const localeSettings = {
  fallbackLocale: "zh",
  locales: ["en", "zh"],
};

export type LocaleTypes = (typeof localeSettings.locales)[number];
