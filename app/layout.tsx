import { Geist, Geist_Mono } from "next/font/google"
import {NextIntlClientProvider} from "next-intl";
import type {AbstractIntlMessages} from "next-intl";
import type {Metadata, Viewport} from "next";

import "./globals.css"
import {JsonLdSite} from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import {getRootDefaultMetadata} from "@/lib/seo/build-page-metadata";
import jaMessages from "@/messages/ja.json";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

/** `output: "export"` — layout must be static (no getLocale / headers). */
export const dynamic = "force-static";

export const metadata: Metadata = getRootDefaultMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A73E8",
  colorScheme: "light",
};

const locale = routing.defaultLocale;
const messages = jaMessages as AbstractIntlMessages;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <JsonLdSite />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
