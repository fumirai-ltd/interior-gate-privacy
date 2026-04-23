import {ArrowRight} from "lucide-react";
import {useTranslations} from "next-intl";

import {AnimatedSection} from "@/components/home/animated-section";
import {Button} from "@/components/ui/button";

export const HomepageCtaSection = () => {
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
      </div>
    </section>
  );
};
