"use client";

import {Menu, X} from "lucide-react";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const navItems = [
  {id: "home", href: "/"},
  {id: "privacyPolicy", href: "/privacy-policy"},
  {id: "termsOfService", href: "/terms-of-service"},
] as const;

export const SiteHeader = () => {
  const t = useTranslations("homepage");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";

      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-wood-primary">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-6 py-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label={t("brand.homeAria")}
          onClick={handleCloseMobileMenu}
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

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-nav-panel"
            aria-expanded={isMobileMenuOpen}
            onClick={handleToggleMobileMenu}
            className="z-50 size-11 text-primary-black md:hidden"
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
          <Link
            href="/"
            aria-label={t("actions.login")}
            onClick={handleCloseMobileMenu}
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

      <div
        className={cn(
          "fixed inset-0 z-40 bg-wood-primary/96 px-6 pb-8 pt-28 backdrop-blur-sm transition-all duration-300 ease-out sm:px-8 md:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        )}
      >
        <nav id="mobile-nav-panel" role="navigation" aria-label="Mobile navigation" className="h-full w-full">
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-2 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-label={t("nav.aria", {item: t(`nav.${item.id}`)})}
                onClick={handleCloseMobileMenu}
                className="rounded-md px-3 py-3 text-heading-md font-medium text-primary-black/90 transition-colors hover:bg-wood-light hover:text-interior-primary"
              >
                {t(`nav.${item.id}`)}
              </Link>
            ))}

            <Link
              href="/"
              aria-label={t("actions.login")}
              onClick={handleCloseMobileMenu}
              className="mt-2 rounded-md px-3 py-3 text-heading-md font-medium text-primary-black transition-colors hover:bg-wood-light hover:text-interior-primary sm:hidden"
            >
              {t("actions.login")}
            </Link>

            <Button
              aria-label={t("actions.freeTrialCta")}
              onClick={handleCloseMobileMenu}
              className="mt-3 h-12 w-full rounded-lg bg-interior-primary px-6 text-label-md font-medium text-white hover:bg-interior-dark"
            >
              {t("actions.freeTrialCta")}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
