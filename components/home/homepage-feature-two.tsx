import {ArrowRight} from "lucide-react";
import Image from "next/image";
import {useTranslations} from "next-intl";

import {AnimatedSection} from "@/components/home/animated-section";
import {Button} from "@/components/ui/button";

export const HomepageFeatureTwo = () => {
  const t = useTranslations("homepage.featureTwo");

  return (
    <section className="bg-wood-primary py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
        <AnimatedSection direction="up">
          <h2 className="text-display-md font-bold leading-tight text-primary-black">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-lg text-body-lg leading-8 text-interior-text-secondary/85">
            {t("description")}
          </p>

          <Button className="mt-10 h-14 rounded-lg bg-interior-primary px-7 text-body-md text-white hover:bg-interior-dark">
            {t("cta")}
            <ArrowRight className="size-4" />
          </Button>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.08} className="relative">
          <Image
            src=""
            alt={t("imageAlt")}
            width={960}
            height={768}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="mx-auto h-auto w-full max-w-xl rounded-2xl border border-interior-border/70 object-contain"
          />
        </AnimatedSection>
      </div>
    </section>
  );
};
