import type { Metadata } from "next";
import { Heebo, Assistant, Poppins } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heading",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

const assistant = Assistant({
  variable: "--font-body",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const title = "גבי פדלון | הנדסה ובנייה — ניהול ופיקוח על פרויקטים";
const description =
  'ניהול ופיקוח על עבודות בנייה, שיפוץ ומערכות אלקטרו-מכניות. הנדסאי בניין ברישיון ומנהל עבודה מוסמך עם למעלה מ-10 שנות ניסיון. ליווי פרויקטים לבנק מזרחי, מלון A23, תמ"א 38, בתי יוקרה ועוד.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "ניהול פרויקטים",
    "פיקוח בנייה",
    "הנדסאי בניין",
    "תמא 38",
    "שיפוץ סניפי בנקים",
    "גבי פדלון",
    "Gabi Fadlun",
    "Engineering",
    "Construction Supervision",
  ],
  authors: [{ name: "Gabi Fadlun" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "/",
    siteName: "גבי פדלון – הנדסה ובניה",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${assistant.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
