import {JsonLdWebPage} from "@/components/seo/json-ld";
import {SitePageLayout} from "@/components/layouts/site-page-layout";
import {LegalDocumentPage} from "@/components/legal/legal-document-page";
import {LegalDocumentShell} from "@/components/legal/legal-document-shell";
import {getTermsOfServiceContent} from "@/lib/legal/terms-of-service-content";
import {routing} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo/build-page-metadata";
import ja from "@/messages/ja.json";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: ja.seo.terms.title,
  description: ja.seo.terms.description,
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  const locale = routing.defaultLocale;
  const content = getTermsOfServiceContent(locale);
  const sectionLinks = content.sections.map((s) => ({
    anchorId: s.anchorId,
    label: s.heading,
  }));

  return (
    <SitePageLayout>
      <JsonLdWebPage
        path="/terms-of-service"
        title={ja.seo.terms.title}
        description={ja.seo.terms.description}
      />
      <LegalDocumentShell active="terms" sectionLinks={sectionLinks}>
        <LegalDocumentPage {...content} />
      </LegalDocumentShell>
    </SitePageLayout>
  );
}