import {SitePageLayout} from "@/components/layouts/site-page-layout";
import {LegalDocumentPage} from "@/components/legal/legal-document-page";
import {LegalDocumentShell} from "@/components/legal/legal-document-shell";
import {getTermsOfServiceContent} from "@/lib/legal/terms-of-service-content";
import {routing} from "@/i18n/routing";

export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function LocalizedTermsOfServicePage() {
  const locale = routing.defaultLocale;
  const content = getTermsOfServiceContent(locale);
  const sectionLinks = content.sections.map((s) => ({
    anchorId: s.anchorId,
    label: s.heading,
  }));

  return (
    <SitePageLayout>
      <LegalDocumentShell active="terms" sectionLinks={sectionLinks}>
        <LegalDocumentPage {...content} />
      </LegalDocumentShell>
    </SitePageLayout>
  );
}
