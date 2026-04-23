import {HomepageHero} from "@/components/home/homepage-hero";
import {SitePageLayout} from "@/components/layouts/site-page-layout";
import {routing} from "@/i18n/routing";

export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function LocalizedHomePage() {
  return (
    <SitePageLayout>
      <HomepageHero />
    </SitePageLayout>
  );
}
