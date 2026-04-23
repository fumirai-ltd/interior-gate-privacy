import {getPublicSiteUrl} from "@/lib/env";

/**
 * Canonical site URL for metadata, sitemap, and JSON-LD.
 * Set `NEXT_PUBLIC_SITE_URL` in production (no trailing slash). See `.env.example`.
 */
export function getSiteUrl(): string {
  return getPublicSiteUrl();
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}
