import {useTranslations} from "next-intl";

import {AnimatedSection} from "@/components/home/animated-section";

const cards = ["one", "two"] as const;

export const HomepageTestimonial = () => {
  const t = useTranslations("homepage.testimonial");

  return (
    <section className="bg-wood-primary py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <AnimatedSection>
          <h2 className="mx-auto max-w-xl text-center text-display-md font-bold leading-tight text-primary-black">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {cards.map((id, index) => (
            <AnimatedSection key={id} delay={0.08 * index}>
              <article className="relative rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-heading-lg font-semibold text-primary-black">
                  {t(`cards.${id}.heading`)}
                </h3>
                <p className="mt-5 text-body-md leading-8 text-interior-text-secondary">
                  {t(`cards.${id}.content`)}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="size-14 rounded-full bg-interior-surface" />
                  <div>
                    <p className="text-body-md font-semibold text-primary-black">
                      {t(`cards.${id}.author`)}
                    </p>
                    <p className="text-body-sm text-interior-text-secondary">
                      {t(`cards.${id}.role`)}
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
