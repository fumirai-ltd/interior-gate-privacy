import Link from "next/link";
import {useTranslations} from "next-intl";

const footerNavItems = ["home", "privacyPolicy", "termsOfService"] as const;

export const SiteFooter = () => {
  const t = useTranslations("homepage.footer");

  return (
    <footer className="bg-primary-black text-white">
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-10 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <p className="text-heading-xl font-bold">
            <span className="text-interior-primary">I</span>
            {t("brandSuffix")}
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            {footerNavItems.map((item) => (
              <Link
                key={item}
                href={
                  item === "home"
                    ? "/"
                    : item === "privacyPolicy"
                      ? "/privacy-policy"
                      : "/terms-of-service"
                }
                className="text-body-md text-white/80 hover:text-white"
              >
                {t(`nav.${item}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="size-4 rounded-full bg-white/70" />
            <span className="size-4 rounded-full bg-white/70" />
            <span className="size-4 rounded-full bg-white/70" />
            <span className="size-4 rounded-full bg-white/70" />
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-7 text-body-sm text-white/70 lg:flex-row">
          <p>{t("copyright")}</p>
          <p>{t("legal")}</p>
        </div>
      </div>
    </footer>
  );
};
