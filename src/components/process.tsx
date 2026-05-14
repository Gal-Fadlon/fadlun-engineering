"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion-variants";

const steps = [
  { n: "01", title: "ייעוץ ותכנון", desc: "הגדרת היקף, לוחות זמנים ותקציב יחד עם האדריכל והיועצים." },
  { n: "02", title: "בניית מכרז", desc: "הכנת כתב כמויות, איסוף הצעות והשוואה שקופה בין קבלנים." },
  { n: "03", title: "בחירת קבלנים", desc: "סינון, ראיונות ובדיקת איתנות פיננסית — ולא רק המחיר." },
  { n: "04", title: "פיקוח שוטף", desc: "סיורים קבועים, יומן עבודה, פתרונות בזמן אמת מול הקבלן." },
  { n: "05", title: "בדיקת חשבונות", desc: "אישור חשבונות חלקיים מול ביצוע בפועל ובקרה על הסטיות." },
  { n: "06", title: "מסירה ללקוח", desc: "ליקויים, בדק, וקבלת חזקה עם דוקומנטציה מלאה לרשם המבנים." },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="eyebrow text-[var(--color-accent-deep)] mb-4 block">
            תהליך עבודה
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="heading-display gold-underline"
            style={{ fontSize: "var(--fs-h2)" }}
          >
            שיטה ברורה.
            <br />
            ללא הפתעות.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 relative"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="relative pr-8 border-r-2 border-[var(--color-divider)] hover:border-[var(--color-accent)] transition-colors duration-500"
            >
              <span
                className="absolute top-0 -right-[7px] w-3 h-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-surface)]"
                aria-hidden
              />
              <div
                className="text-[var(--color-accent-deep)] font-[family-name:var(--font-accent)] font-light"
                style={{ fontSize: "2.4rem", lineHeight: 1 }}
              >
                {s.n}
              </div>
              <h3 className="mt-3 text-[var(--color-ink)] font-bold text-[1.15rem]">{s.title}</h3>
              <p className="mt-2 text-[var(--color-muted)] leading-relaxed text-[0.97rem]">{s.desc}</p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-1.5 -right-0.5 h-px w-12 bg-[var(--color-accent)] opacity-0" aria-hidden />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
