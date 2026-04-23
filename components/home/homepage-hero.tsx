import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import {useTranslations} from "next-intl";

import {AnimatedSection} from "@/components/home/animated-section";
import {HomepageCtaSection} from "@/components/home/homepage-cta-footer";
import { Button } from "@/components/ui/button";
import {HomepageFeatureOne} from "@/components/home/homepage-feature-one";
import {HomepageFeatureList} from "@/components/home/homepage-feature-list";
import {HomepageFeatureThree} from "@/components/home/homepage-feature-three";
import {HomepageFeatureTwo} from "@/components/home/homepage-feature-two";
import {HomepageTestimonial} from "@/components/home/homepage-testimonial";
import {HOMEPAGE_ASSETS} from "@/lib/constants/homepage";

const ratingStars = [0, 1, 2, 3, 4] as const;

const testimonials = [
  {
    id: "jenny",
    avatar: HOMEPAGE_ASSETS.avatarJenny,
    className:
      "right-2 top-52 sm:right-6 sm:top-48 lg:right-0 lg:top-70 xl:right-10",
  },
  {
    id: "ronald",
    avatar: HOMEPAGE_ASSETS.avatarRonald,
    className:
      "bottom-20 left-2 sm:bottom-24 sm:left-8 lg:bottom-30 lg:left-0 xl:left-4",
  },
] as const;

export const HomepageHero = () => {
  const t = useTranslations("homepage");

  return (
    <main className="text-primary-black">
      <div className="bg-wood-primary">
        <div className="mx-auto flex min-h-svh w-full max-w-7xl flex-col px-6 pb-0 pt-10 sm:px-8 lg:px-10">
          <section className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
          <AnimatedSection direction="up" className="max-w-xl">
            <h1 className="text-display-md font-bold leading-tight tracking-tight lg:text-5xl">
              {t("hero.heading")}
            </h1>
            <p className="mt-6 max-w-md text-body-lg leading-8 text-interior-text-secondary/80">
              {t("hero.description")}
            </p>
            <Button
              aria-label={t("actions.chatCta")}
              className="mt-8 h-14 rounded-lg bg-interior-primary px-6 text-body-md font-medium text-white hover:bg-interior-dark"
            >
              {t("actions.chatCta")}
              <ArrowRight className="size-4" />
            </Button>

            <div className="mt-16 flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center -space-x-3">
                <Image
                  src={HOMEPAGE_ASSETS.avatarGroupOne}
                  alt={t("stats.avatars.avatarOneAlt")}
                  className="size-12 rounded-full border-2 border-white object-cover"
                  width={48}
                  height={48}
                  fetchPriority="high"
                />
                <Image
                  src={HOMEPAGE_ASSETS.avatarGroupTwo}
                  alt={t("stats.avatars.avatarTwoAlt")}
                  className="size-12 rounded-full border-2 border-white object-cover"
                  width={48}
                  height={48}
                />
                <Image
                  src={HOMEPAGE_ASSETS.avatarGroupThree}
                  alt={t("stats.avatars.avatarThreeAlt")}
                  className="size-12 rounded-full border-2 border-white object-cover"
                  width={48}
                  height={48}
                />
              </div>

              <div>
                <p className="text-heading-xl font-bold leading-none">
                  {t("stats.customersValue")}
                </p>
                <p className="mt-2 text-body-md text-interior-text-secondary/60">
                  {t("stats.customersLabel")}
                </p>
              </div>

              <div className="h-10 w-px bg-primary-black/40" />

              <div>
                <p className="text-heading-xl font-bold leading-none">
                  {t("stats.ratingValue")}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {ratingStars.map((value) => (
                      <Star
                        key={value}
                        className={`size-3.5 ${
                          value === ratingStars.length - 1
                            ? "fill-interior-border text-interior-border"
                            : "fill-interior-primary text-interior-primary"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-body-md text-interior-text-secondary/60">
                    {t("stats.ratingLabel")}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            direction="left"
            delay={0.08}
            className="relative mx-auto flex w-full max-w-2xl items-end justify-center"
          >
            <div className="absolute bottom-14 size-96 rounded-full bg-interior-primary" />
            <Image
              src={HOMEPAGE_ASSETS.heroPerson}
              alt={t("hero.imageAlt")}
              width={668}
              height={965}
              className="relative z-10 h-auto w-full max-w-xl object-contain"
              fetchPriority="high"
              priority
            />

            {testimonials.map((testimonial) => {
              const name = t(`testimonials.${testimonial.id}.name`);
              const message = t(`testimonials.${testimonial.id}.message`);
              const bubbleDelay = testimonial.id === "jenny" ? 0.15 : 0.25;

              return (
                <AnimatedSection
                  key={testimonial.id}
                  direction="up"
                  delay={bubbleDelay}
                  className={`absolute z-20 w-64 rounded-lg bg-white/90 p-3 shadow-2xl backdrop-blur-sm ${testimonial.className}`}
                  whileHover={{scale: 1.03, y: -2}}
                >
                  <article className="flex items-start gap-3">
                    <Image
                      src={testimonial.avatar}
                      alt={t("testimonials.avatarAlt", {name})}
                      width={40}
                      height={40}
                      className="mt-1 size-10 rounded-full object-cover"
                      loading="lazy"
                      unoptimized
                    />
                    <div>
                      <p className="text-body-sm font-bold text-primary-black">
                        {name}
                      </p>
                      <p className="mt-1 text-body-xs leading-5 text-interior-text-secondary/70">
                        {message}
                      </p>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </AnimatedSection>
        </section>
        </div>
      </div>

      <AnimatedSection direction="up">
        <HomepageFeatureList />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.04}>
        <HomepageFeatureOne />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.08}>
        <HomepageFeatureTwo />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.12}>
        <HomepageFeatureThree />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.16}>
        <HomepageTestimonial />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <HomepageCtaSection />
      </AnimatedSection>
    </main>
  );
};
