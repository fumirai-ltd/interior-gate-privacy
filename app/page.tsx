import { HomepageHero } from "@/components/home/homepage-hero";
import {SitePageLayout} from "@/components/layouts/site-page-layout";
import {buildPageMetadata} from "@/lib/seo/build-page-metadata";
import ja from "@/messages/ja.json";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: ja.seo.home.title,
  description: ja.seo.home.description,
  path: "/",
});

export default function Page() {
  return (
    <SitePageLayout>
      <HomepageHero />
    </SitePageLayout>
  );
}
