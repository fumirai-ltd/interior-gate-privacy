import {ArrowRight} from "lucide-react";
import Link from "next/link";
import {useTranslations} from "next-intl";

import {AnimatedSection} from "@/components/home/animated-section";
import {Button} from "@/components/ui/button";

const footerNavItems = ["about", "features", "works", "support"] as const;

export const HomepageCtaFooter = () => {
  const t = useTranslations("homepage.footer");

  return (
    <section className="bg-primary-black py-24 text-white">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <AnimatedSection className="text-center">
          <h2 className="mx-auto max-w-3xl text-display-md font-bold leading-tight">
            {t("ctaTitle")}
          </h2>
          <Button className="mt-9 h-14 rounded-lg bg-interior-primary px-7 text-body-md text-white hover:bg-interior-dark">
            {t("ctaButton")}
            <ArrowRight className="size-4" />
          </Button>
        </AnimatedSection>

        <AnimatedSection
          delay={0.1}
          className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-8 lg:flex-row"
        >
          <p className="text-heading-xl font-bold">
            <span className="text-interior-primary">I</span>
            {t("brandSuffix")}
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            {footerNavItems.map((item) => (
              <Link key={item} href="/" className="text-body-md text-white/80 hover:text-white">
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
        </AnimatedSection>

        <AnimatedSection
          delay={0.16}
          className="mt-7 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-7 text-body-sm text-white/70 lg:flex-row"
        >
          <p>{t("copyright")}</p>
          <p>{t("legal")}</p>
        </AnimatedSection>
      </div>
    </section>
  );
};
