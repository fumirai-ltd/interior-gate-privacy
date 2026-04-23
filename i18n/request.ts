import {getRequestConfig} from "next-intl/server";

import {routing} from "@/i18n/routing";

type AppLocale = (typeof routing.locales)[number];

const isAppLocale = (locale: string): locale is AppLocale => {
  return routing.locales.includes(locale as AppLocale);
};

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale: AppLocale =
    requested && isAppLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
