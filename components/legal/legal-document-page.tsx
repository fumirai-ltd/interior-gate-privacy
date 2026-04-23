import type {
  LegalDocumentWithIntro,
  LegalSectionWithLists,
} from "@/lib/legal/legal-document-types";

type LegalDocumentPageProps = LegalDocumentWithIntro & {
  sections: readonly LegalSectionWithLists[];
};

export const LegalDocumentPage = ({
  title,
  updatedAtLabel,
  updatedAt,
  intro,
  sections,
}: LegalDocumentPageProps) => {
  return (
    <article className="w-full max-w-3xl text-primary-black">
      <h1 className="text-display-md font-bold leading-tight">{title}</h1>
      <p className="mt-3 text-body-md text-interior-text-secondary">
        {updatedAtLabel}: {updatedAt}
      </p>

      {intro.length > 0 ? (
        <div className="mt-10 space-y-4">
          {intro.map((p) => (
            <p
              key={p}
              className="text-body-md leading-8 text-interior-text-secondary"
            >
              {p}
            </p>
          ))}
        </div>
      ) : null}

      <div
        className={intro.length > 0 ? "mt-12 space-y-10" : "mt-10 space-y-10"}
      >
        {sections.map((section) => (
          <section
            key={section.anchorId}
            id={section.anchorId}
            className="scroll-mt-28"
          >
            <h2 className="text-heading-lg font-semibold leading-tight text-primary-black">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-body-md leading-8 text-interior-text-secondary"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {section.listItems && section.listItems.length > 0 ? (
              <div className="mt-4">
                {section.listTitle ? (
                  <p className="text-body-md font-medium leading-8 text-primary-black">
                    {section.listTitle}
                  </p>
                ) : null}
                {section.orderedList ? (
                  <ol className="mt-2 list-decimal space-y-2 pl-5 text-body-md leading-8 text-interior-text-secondary marker:text-primary-black">
                    {section.listItems.map((item) => (
                      <li key={item} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-body-md leading-8 text-interior-text-secondary marker:text-primary-black">
                    {section.listItems.map((item) => (
                      <li key={item} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
};
