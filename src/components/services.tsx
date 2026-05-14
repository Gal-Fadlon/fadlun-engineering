"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion-variants";

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const Icon = {
  Building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V8l8-5 8 5v13" />
      <path d="M9 21V12h6v9" />
      <path d="M9 8h.01M12 8h.01M15 8h.01" />
    </svg>
  ),
  Tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5z" />
    </svg>
  ),
  Clipboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
      <path d="M8 12h8M8 16h5" />
    </svg>
  ),
  Users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h4" />
    </svg>
  ),
  Calc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h8" />
    </svg>
  ),
  Compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 6-4 2 2-6 4-2z" />
    </svg>
  ),
  Shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

const services: Service[] = [
  {
    title: "ניהול ופיקוח בנייה",
    desc: "ליווי צמוד של עבודות הבנייה והשיפוץ — מהיסודות ועד המסירה — תחת רישיון הנדסאי בניין.",
    icon: Icon.Building,
  },
  {
    title: "מערכות אלקטרו-מכניות",
    desc: "תכנון, פיקוח והחלפת מערכות אלקטרו-מכניות מורכבות במבנים פעילים תוך שמירה על רצף עסקי.",
    icon: Icon.Tools,
  },
  {
    title: "ניהול פרויקטים",
    desc: "ניהול מקצה לקצה — משלב התכנון, דרך הפעלת יועצים ובניית מכרזים, ועד מסירה ללקוח.",
    icon: Icon.Clipboard,
  },
  {
    title: "הפעלת יועצים ומומחים",
    desc: "תיאום עם אדריכלים, יועצי נגישות, מיזוג, בטיחות וקונסטרוקציה לכלל מקצועות הבנייה.",
    icon: Icon.Users,
  },
  {
    title: "בניית מכרזים",
    desc: "הכנת מסמכי מכרז, בחירת קבלנים, השוואת הצעות וניהול משא-ומתן הגון ושקוף.",
    icon: Icon.Doc,
  },
  {
    title: "בדיקת חשבונות",
    desc: "מעקב כספי, אישור חשבונות חלקיים וסופיים, ובקרה על קצב ההתקדמות מול תקציב ולו״ז.",
    icon: Icon.Calc,
  },
  {
    title: "פיקוח על פרויקטי תמ״א 38",
    desc: "פיקוח צמוד מצד היזם על פרויקטי תמ״א 38/1 — מהפינוי ועד מסירת הדירות לדיירים.",
    icon: Icon.Compass,
  },
  {
    title: "חוות דעת מקצועיות",
    desc: "מתן חוות דעת הנדסיות, בדק טרום-רכישה ובחינת ליקויים — בכתב ובחתימת בעל רישיון.",
    icon: Icon.Shield,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[var(--color-bg)] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="eyebrow text-[var(--color-accent-deep)] mb-4 block">
            השירותים שלנו
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="heading-display gold-underline"
            style={{ fontSize: "var(--fs-h2)" }}
          >
            כל מה שדרוש לפרויקט
            <br />
            שעומד בזמן ובתקציב.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-[var(--color-muted)] leading-relaxed"
          >
            שילוב של פיקוח הנדסי מדויק, ניהול תקציבי הדוק ותיאום בלתי-מתפשר בין
            כל בעלי המקצוע — כדי שתישארו עם פרויקט אחד פחות להדאיג לגביו.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[14px] p-7 overflow-hidden"
            >
              <span className="absolute top-0 right-0 h-[2px] w-10 bg-[var(--color-accent)] group-hover:w-full transition-all duration-700" />
              <div className="w-11 h-11 rounded-full bg-[rgba(223,192,124,0.18)] text-[var(--color-primary)] grid place-items-center mb-5">
                <span className="w-5 h-5 block">{s.icon}</span>
              </div>
              <h3 className="text-[var(--color-ink)] font-bold text-[1.1rem] mb-2">{s.title}</h3>
              <p className="text-[var(--color-muted)] text-[0.95rem] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
