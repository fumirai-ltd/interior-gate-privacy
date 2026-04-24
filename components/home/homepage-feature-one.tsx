import Image from "next/image";
import {useTranslations} from "next-intl";

import {AnimatedSection} from "@/components/home/animated-section";

export const HomepageFeatureOne = () => {
  const t = useTranslations("homepage.featureOne");

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
        <AnimatedSection direction="right" className="flex justify-center">
          <Image
            src="/assets/img/agent-ai.webp"
            alt={t("imageAlt")}
            width={960}
            height={768}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full max-w-xl rounded-2xl border border-interior-border/70 object-contain"
          />
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.06}>
          <h2 className="text-display-md font-bold leading-tight text-primary-black">
            {t("title")}
          </h2>

          <div className="mt-8 space-y-6 text-body-lg leading-8 text-interior-text-secondary/90">
            <p>{t("descriptionOne")}</p>
            <p>{t("descriptionTwo")}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
