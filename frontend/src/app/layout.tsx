import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shyamtiwari.vercel.app"),
  title: "Shyam Tiwari — Backend Engineer",
  description:
    "Backend engineer with 4+ years building fintech systems — lending platforms, KYC pipelines, and repayment engines. SDE-II @ Olyv, ex-ClearTax, IIT Roorkee.",
  authors: [{ name: "Shyam Tiwari" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Shyam Tiwari — Backend Engineer",
    description:
      "4+ years building high-throughput fintech systems — KYC pipelines, lending platforms, repayment engines. SDE-II @ Olyv, ex-ClearTax, IIT Roorkee.",
    url: "/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shyam Tiwari — Backend Engineer",
    description:
      "4+ years building high-throughput fintech systems — KYC pipelines, lending platforms, repayment engines.",
    images: ["/og-image.png"],
  },
};

// Runs synchronously before first paint → sets the theme, no flash.
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
