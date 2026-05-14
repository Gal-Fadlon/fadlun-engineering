import Image from "next/image";

const cols = [
  {
    heading: "החברה",
    links: [
      { label: "אודות", href: "#about" },
      { label: "שירותים", href: "#services" },
      { label: "תהליך עבודה", href: "#process" },
    ],
  },
  {
    heading: "מתחומי הפעילות",
    links: [
      { label: "פיקוח בנייה", href: "#services" },
      { label: "מערכות אלקטרו-מכניות", href: "#services" },
      { label: "תמ״א 38/1", href: "#projects" },
      { label: "שיפוץ סניפי בנקים", href: "#projects" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-divider)] pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
        <div>
          <Image
            src="/logo.png"
            alt="גבי פדלון – הנדסה ובניה"
            width={260}
            height={140}
            className="h-16 w-auto object-contain"
          />
          <p className="mt-5 text-[var(--color-muted)] text-sm leading-relaxed max-w-xs">
            ניהול ופיקוח על פרויקטים של בנייה, שיפוץ ומערכות אלקטרו-מכניות.
            הנדסאי בניין ברישיון ומנהל עבודה מוסמך.
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.heading}>
            <h4 className="text-[var(--color-ink)] font-bold mb-4 text-[1rem]">{c.heading}</h4>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="relative text-[var(--color-muted)] text-sm hover:text-[var(--color-primary)] transition-colors inline-block"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-[var(--color-ink)] font-bold mb-4 text-[1rem]">יצירת קשר</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="tel:0507747162"
                className="text-[var(--color-primary)] font-semibold"
                dir="ltr"
              >
                050-774-7162
              </a>
            </li>
            <li>
              <a
                href="mailto:GABIFAD@GMAIL.COM"
                className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                dir="ltr"
              >
                GABIFAD@GMAIL.COM
              </a>
            </li>
            <li className="text-[var(--color-muted)]">מרכז הארץ וירושלים</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mt-12 pt-6 border-t border-[var(--color-divider)] flex flex-col md:flex-row justify-between gap-3 text-xs text-[var(--color-muted)]">
        <span>© {year} גבי פדלון – הנדסה ובנייה. כל הזכויות שמורות.</span>
        <span dir="ltr">Engineered with care · Tel Aviv & Jerusalem</span>
      </div>
    </footer>
  );
}
