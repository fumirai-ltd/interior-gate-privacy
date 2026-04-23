import {getRequestConfig} from "next-intl/server";

import {routing} from "@/i18n/routing";

import type {AppLocale} from "./config";

/**
 * Static export (`output: "export"`) cannot use `requestLocale` / `headers()`.
 * Locale is fixed at build time; use the default (ja) for all SSG output.
 * To ship another language, build with a different messages import or a build flag.
 */
const staticLocale: AppLocale = routing.defaultLocale;

export default getRequestConfig(async () => {
  return {
    locale: staticLocale,
    messages: (await import(`../messages/${staticLocale}.json`)).default,
  };
});
