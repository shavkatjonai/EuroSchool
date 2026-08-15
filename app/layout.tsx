import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EURO SCHOOL — Kelajak liderlari maktabi",
  description: "Yozyovondagi zamonaviy xususiy maktab. 0–11-sinflar, xorijiy tillar, IT, sport va chuqurlashtirilgan ta’lim.",
  icons: { icon: "/assets/euro-school-mark.jpg", shortcut: "/assets/euro-school-mark.jpg" },
  openGraph: {
    title: "EURO SCHOOL — Kelajak bugundan boshlanadi",
    description: "Xalqaro ta’lim va milliy qadriyatlar uyg‘unligi. Qabul ochiq, joylar cheklangan.",
    type: "website",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uz"><body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body></html>;
}
