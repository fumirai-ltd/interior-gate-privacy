import Link from "next/link";
import {getTranslations} from "next-intl/server";
import type {ReactNode} from "react";

import {LegalDocumentToc} from "@/components/legal/legal-document-toc";
import {cn} from "@/lib/utils";

export type LegalSectionLink = {
  anchorId: string;
  label: string;
};

type LegalDocumentShellProps = {
  active: "privacy" | "terms";
  /** In-page TOC: headings for the current document only (locale-specific). */
  sectionLinks: readonly LegalSectionLink[];
  children: ReactNode;
};

const documents: readonly {
  id: "privacy" | "terms";
  href: "/privacy-policy" | "/terms-of-service";
}[] = [
  {id: "privacy", href: "/privacy-policy"},
  {id: "terms", href: "/terms-of-service"},
] as const;

export const LegalDocumentShell = async ({
  active,
  sectionLinks,
  children,
}: LegalDocumentShellProps) => {
  const tNav = await getTranslations("homepage");
  const tLegal = await getTranslations("legal");
  const basePath = active === "privacy" ? "/privacy-policy" : "/terms-of-service";

  return (
    <main className="bg-wood-primary text-primary-black">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          <aside
            className="flex shrink-0 flex-col gap-8 border-b border-interior-border/50 pb-8 lg:sticky lg:top-24 lg:max-h-[calc(100svh-8rem)] lg:w-64 lg:min-w-0 lg:overflow-y-auto lg:border-0 lg:pb-0 lg:self-start xl:w-72"
            aria-label={tLegal("hubNavAria")}
          >
            <p className="text-label-sm font-semibold uppercase tracking-wide text-interior-text-secondary">
              {tLegal("hubTitle")}
            </p>

            <nav aria-label={tLegal("documentsNavAria")}>
              <ul className="mt-1 flex flex-col gap-1" role="list">
                {documents.map((doc) => {
                  const isActive = active === doc.id;
                  const label =
                    doc.id === "privacy"
                      ? tNav("nav.privacyPolicy")
                      : tNav("nav.termsOfService");
                  return (
                    <li key={doc.id}>
                      <Link
                        href={doc.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "block rounded-lg border border-transparent px-3 py-2.5 text-body-md transition-colors",
                          isActive
                            ? "border-interior-border bg-interior-bg-active font-semibold text-interior-primary"
                            : "text-primary-black/85 hover:border-interior-border/60 hover:bg-interior-bg-hover hover:text-interior-primary",
                        )}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <LegalDocumentToc
              sectionLinks={sectionLinks}
              basePath={basePath}
              tocTitle={tLegal("onThisPage")}
              tocNavAria={tLegal("onThisPageAria")}
            />
          </aside>

          <div className="min-w-0 flex-1 border-t border-interior-border/80 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};
