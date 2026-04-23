import {Clock3, ShieldCheck, Video} from "lucide-react";
import {useTranslations} from "next-intl";

import {AnimatedSection} from "@/components/home/animated-section";

const featureItems = [
  {
    id: "videoMessaging",
    Icon: Video,
    iconClassName: "text-interior-primary",
    iconBackgroundClassName: "bg-interior-surface",
  },
  {
    id: "saveTime",
    Icon: Clock3,
    iconClassName: "text-interior-dark",
    iconBackgroundClassName: "bg-interior-surface-dark",
  },
  {
    id: "safePrivate",
    Icon: ShieldCheck,
    iconClassName: "text-primary-black",
    iconBackgroundClassName: "bg-wood-lighter",
  },
] as const;

export const HomepageFeatureList = () => {
  const t = useTranslations("homepage.features");

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <AnimatedSection>
          <h2 className="text-center text-heading-xl font-bold text-primary-black sm:text-display-md">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureItems.map(({id, Icon, iconClassName, iconBackgroundClassName}, index) => (
            <AnimatedSection key={id} delay={0.06 * index}>
              <article className="rounded-md bg-white p-8 shadow-sm">
                <div className="flex items-start gap-5">
                  <div
                    className={`flex size-14 shrink-0 items-center justify-center rounded-full ${iconBackgroundClassName}`}
                  >
                    <Icon className={`size-5 ${iconClassName}`} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold leading-8 text-primary-black">
                      {t(`items.${id}.title`)}
                    </h3>
                    <p className="mt-3 text-body-md leading-6 text-interior-text-secondary">
                      {t(`items.${id}.description`)}
                    </p>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
