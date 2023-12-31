import "./globals.scss";
import "leaflet/dist/leaflet.css";
import type { Metadata } from "next";

import clsx from "clsx";

import { futuraBk, futuraLt, futuraMd, futuraHV } from "@/fonts/index";

export const metadata: Metadata = {
  title: "Poliescol",
  description:
    "Diseñados para satisfacer las necesidades de la industria, de pintura automotriz, metalmecánica y constructora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "body",
          futuraBk.className,
          futuraLt.variable,
          futuraMd.variable,
          futuraHV.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
