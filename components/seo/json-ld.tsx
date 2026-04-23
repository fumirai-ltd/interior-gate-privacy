import ja from "@/messages/ja.json";

import {getSiteUrl} from "@/lib/seo/site";

const seo = ja.seo;

/** WebSite + Organization (JSON-LD) for search engines. */
export const JsonLdSite = () => {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${siteUrl}#website`,
        "@type": "WebSite",
        name: seo.siteName,
        url: siteUrl,
        description: seo.defaultDescription,
        inLanguage: "ja-JP",
        publisher: {"@id": `${siteUrl}#organization`},
        potentialAction: {
          "@type": "ReadAction",
          target: [siteUrl],
        },
      },
      {
        "@id": `${siteUrl}#organization`,
        "@type": "Organization",
        name: seo.siteName,
        url: siteUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
    />
  );
};

type JsonLdPageProps = {
  path: string;
  title: string;
  description: string;
};

/** WebPage JSON-LD for a specific path (e.g. legal pages). */
export const JsonLdWebPage = ({path, title, description}: JsonLdPageProps) => {
  const siteUrl = getSiteUrl();
  const pageUrl = new URL(path, siteUrl).toString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "ja-JP",
    isPartOf: {"@id": `${siteUrl}#website`},
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
    />
  );
};
