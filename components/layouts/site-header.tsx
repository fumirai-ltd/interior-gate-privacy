import Link from "next/link";
import {useTranslations} from "next-intl";

import {Button} from "@/components/ui/button";

const navItems = [
  {id: "home", href: "/"},
  {id: "privacyPolicy", href: "/privacy-policy"},
  {id: "termsOfService", href: "/terms-of-service"},
] as const;

export const SiteHeader = () => {
  const t = useTranslations("homepage");

  return (
    <header className="bg-wood-primary">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label={t("brand.homeAria")}
          className="text-heading-xl font-bold tracking-tight"
        >
          <span className="text-interior-primary">I</span>
          {t("brand.nameSuffix")}
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-label={t("nav.aria", {item: t(`nav.${item.id}`)})}
              className="text-body-md text-primary-black/90 transition-colors hover:text-interior-primary"
            >
              {t(`nav.${item.id}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label={t("actions.login")}
            className="hidden text-body-md font-medium text-primary-black transition-colors hover:text-interior-primary sm:block"
          >
            {t("actions.login")}
          </Link>
          <Button
            aria-label={t("actions.freeTrialCta")}
            className="h-12 rounded-lg bg-interior-primary px-6 text-label-md font-medium text-white hover:bg-interior-dark"
          >
            {t("actions.freeTrialCta")}
          </Button>
        </div>
      </div>
    </header>
  );
};
