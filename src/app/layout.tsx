import "./globals.css";

import { Header, ToTop } from "@/components";

import { Golos_Text } from "next/font/google";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import cn from "classnames";

const golosText = Golos_Text({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic"],
});

type RootLayoutProps = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  const bodyClassNames = cn("bg-zinc-900", golosText.className);
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
