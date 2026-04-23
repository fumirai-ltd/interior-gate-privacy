import {JsonLdWebPage} from "@/components/seo/json-ld";
import {SitePageLayout} from "@/components/layouts/site-page-layout";
import {LegalDocumentPage} from "@/components/legal/legal-document-page";
import {LegalDocumentShell} from "@/components/legal/legal-document-shell";
import {getPrivacyPolicyContent} from "@/lib/legal/privacy-policy-content";
import {routing} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo/build-page-metadata";
import ja from "@/messages/ja.json";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: ja.seo.privacy.title,
  description: ja.seo.privacy.description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const locale = routing.defaultLocale;
  const content = getPrivacyPolicyContent(locale);
  const sectionLinks = content.sections.map((s) => ({
    anchorId: s.anchorId,
    label: s.heading,
  }));

  return (
    <SitePageLayout>
      <JsonLdWebPage
        path="/privacy-policy"
        title={ja.seo.privacy.title}
        description={ja.seo.privacy.description}
      />
      <LegalDocumentShell active="privacy" sectionLinks={sectionLinks}>
        <LegalDocumentPage {...content} />
      </LegalDocumentShell>
    </SitePageLayout>
  );
}