"use client";

import Link from "next/link";
import {useCallback, useEffect, useState} from "react";

import type {LegalSectionLink} from "@/components/legal/legal-document-shell";
import {cn} from "@/lib/utils";

type LegalDocumentTocProps = {
  sectionLinks: readonly LegalSectionLink[];
  basePath: string;
  tocTitle: string;
  tocNavAria: string;
};

const SCROLL_OFFSET_PX = 120;

const getIdFromHash = () => {
  if (typeof window === "undefined") {
    return null;
  }
  const h = window.location.hash.replace(/^#/, "");
  return h || null;
};

export const LegalDocumentToc = ({
  sectionLinks,
  basePath,
  tocTitle,
  tocNavAria,
}: LegalDocumentTocProps) => {
  const [activeId, setActiveId] = useState<string | null>(
    () => sectionLinks[0]?.anchorId ?? null,
  );

  const updateActive = useCallback(() => {
    if (sectionLinks.length === 0) {
      return;
    }

    const {scrollY, innerHeight} = window;
    const doc = document.documentElement;
    if (innerHeight + scrollY >= doc.scrollHeight - 4) {
      setActiveId(sectionLinks[sectionLinks.length - 1]!.anchorId);
      return;
    }

    let current = sectionLinks[0]!.anchorId;
    for (const {anchorId} of sectionLinks) {
      const el = document.getElementById(anchorId);
      if (!el) {
        continue;
      }
      const top = el.getBoundingClientRect().top;
      if (top <= SCROLL_OFFSET_PX) {
        current = anchorId;
      }
    }
    setActiveId(current);
  }, [sectionLinks]);

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(updateActive);
    };

    const onHashChange = () => {
      const id = getIdFromHash();
      if (id && sectionLinks.some((s) => s.anchorId === id)) {
        setActiveId(id);
      } else {
        requestAnimationFrame(updateActive);
      }
    };

    const raf = requestAnimationFrame(() => {
      const fromHash = getIdFromHash();
      if (
        fromHash &&
        sectionLinks.some((s) => s.anchorId === fromHash) &&
        document.getElementById(fromHash)
      ) {
        setActiveId(fromHash);
      } else {
        setActiveId(sectionLinks[0]?.anchorId ?? null);
      }
      updateActive();
    });

    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll, {passive: true});
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [sectionLinks, updateActive]);

  return (
    <nav aria-label={tocNavAria}>
      <p className="text-label-sm font-semibold text-interior-text-secondary">
        {tocTitle}
      </p>
      <ul
        className="mt-3 flex max-h-[50vh] flex-col gap-0.5 overflow-y-auto pr-1 lg:max-h-none"
        role="list"
      >
        {sectionLinks.map((item) => {
          const href = `${basePath}#${item.anchorId}`;
          const isActive = activeId === item.anchorId;
          return (
            <li key={item.anchorId}>
              <Link
                href={href}
                scroll={true}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "block rounded-md border border-transparent px-2 py-1.5 text-left text-body-sm leading-snug transition-colors",
                  isActive
                    ? "border-interior-border/80 bg-interior-bg-active font-medium text-interior-primary"
                    : "text-primary-black/80 hover:bg-interior-bg-hover hover:text-interior-primary",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
