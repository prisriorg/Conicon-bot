/* eslint-disable @next/next/no-sync-scripts */

import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { Root } from "@/components/Root/Root";
import "./_assets/globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Telegram Web Mini Application",
  description: "Your application description goes here",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        
        <Root>{children}</Root>
      </body>
    </html>
  );
}
