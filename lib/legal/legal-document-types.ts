export type LegalSectionWithLists = {
  /** Stable id for in-page anchor + sidebar TOC (unique per document) */
  anchorId: string;
  heading: string;
  paragraphs: readonly string[];
  listTitle?: string;
  listItems?: readonly string[];
  orderedList?: boolean;
};

export type LegalDocumentWithIntro = {
  title: string;
  updatedAtLabel: string;
  updatedAt: string;
  intro: readonly string[];
  sections: readonly LegalSectionWithLists[];
};
