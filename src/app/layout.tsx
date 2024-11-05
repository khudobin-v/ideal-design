import "./globals.css";

import { Header, ToTop } from "@/components";
import { Old_Standard_TT, Raleway } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";
import cn from "classnames";
import { ReactNode } from "react";

export const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic"],
});

const oldStandart = Old_Standard_TT({
  weight: ["400", "700"],
  subsets: ["cyrillic", "cyrillic-ext"],
});

type RootLayoutProps = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  const bodyClassNames = cn("bg-zinc-900", oldStandart.className);
  return (
    <html lang="ru">
      <body className={cn(bodyClassNames)}>
        <Header />
        {children}
        <ToTop />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
