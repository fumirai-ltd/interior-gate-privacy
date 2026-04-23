/**
 * Build-time / runtime public configuration (`NEXT_PUBLIC_*`).
 * Do not put secrets here — they are inlined for the client bundle.
 */
export function getPublicSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() as string;
  return raw.replace(/\/$/, "");
}
