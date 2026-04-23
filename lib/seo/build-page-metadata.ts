import type {Metadata} from "next";

import ja from "@/messages/ja.json";

import {getMetadataBase, getSiteUrl} from "./site";

const seo = ja.seo;

const defaultOgImagePath = "/assets/img/jp-boy.webp";

type BuildArgs = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({title, description, path}: BuildArgs): Metadata {
  const base = getMetadataBase();
  const url = new URL(path.startsWith("/") ? path : `/${path}`, base);
  const imageUrl = new URL(defaultOgImagePath, base).toString();

  return {
    /* Avoid stacking with a global `title.template` */
    title: {absolute: title},
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: seo.siteName,
      title,
      description,
      url: url.toString(),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 800,
          alt: seo.openGraphImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {index: true, follow: true},
    },
  };
}

/** Default metadata for `app/layout.tsx` (applies to all pages unless overridden). */
export function getRootDefaultMetadata(): Metadata {
  return {
    metadataBase: getMetadataBase(),
    title: seo.siteName,
    description: seo.defaultDescription,
    applicationName: seo.siteName,
    authors: [{name: seo.siteName}],
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: seo.siteName,
      title: seo.home.title,
      description: seo.defaultDescription,
      url: getSiteUrl(),
      images: [
        {
          url: new URL(defaultOgImagePath, getMetadataBase()).toString(),
          width: 1200,
          height: 800,
          alt: seo.openGraphImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.home.title,
      description: seo.defaultDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}
