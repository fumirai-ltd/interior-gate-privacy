import type {ReactNode} from "react";

import {SiteFooter} from "@/components/layouts/site-footer";
import {SiteHeader} from "@/components/layouts/site-header";

type SitePageLayoutProps = {
  children: ReactNode;
};

export const SitePageLayout = ({children}: SitePageLayoutProps) => {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
};
