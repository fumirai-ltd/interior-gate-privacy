import Image from "next/image";
import {useTranslations} from "next-intl";

import {AnimatedSection} from "@/components/home/animated-section";

export const HomepageFeatureThree = () => {
  const t = useTranslations("homepage.featureThree");

  return (
    <section className="bg-wood-primary py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
        <AnimatedSection direction="right" className="mx-auto w-full max-w-xl">
          <Image
            src="/assets/img/mail.png"
            alt={t("imageAlt")}
            width={960}
            height={768}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full rounded-2xl border border-interior-border/70 object-contain"
          />
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.08}>
          <h2 className="text-display-md font-bold leading-tight text-primary-black">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-lg text-body-lg leading-8 text-interior-text-secondary/85">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-wrap gap-10">
            <div>
              <p className="text-4xl font-medium leading-tight text-primary-black">
                {t("statOneValue")}
              </p>
              <p className="text-body-sm leading-6 text-interior-text-secondary">
                {t("statOneLabel")}
              </p>
            </div>
            <div>
              <p className="text-4xl font-medium leading-tight text-primary-black">
                {t("statTwoValue")}
              </p>
              <p className="text-body-sm leading-6 text-interior-text-secondary">
                {t("statTwoLabel")}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
