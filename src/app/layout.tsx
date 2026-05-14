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

export const metadata: Metadata = {
  title: "גבי פדלון | הנדסה ובנייה — ניהול ופיקוח על פרויקטים",
  description:
    "ניהול ופיקוח על עבודות בנייה, שיפוץ ומערכות אלקטרו-מכניות. הנדסאי בניין מוסמך ומנהל עבודה עם למעלה מ-10 שנות ניסיון. בנק מזרחי, מלון A23, תמ\"א 38 ועוד.",
  keywords: [
    "ניהול פרויקטים",
    "פיקוח בנייה",
    "הנדסאי בניין",
    "תמא 38",
    "שיפוץ סניפי בנקים",
    "גבי פדלון",
    "Gabi Fadlun",
  ],
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
