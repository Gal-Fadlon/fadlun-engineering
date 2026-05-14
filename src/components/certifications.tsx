"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion-variants";

const credentials = [
  {
    title: "הנדסאי בניין",
    sub: "רישיון לתכנון ופיקוח על עבודות בנייה",
    note: "אישור פורמלי לחתימה על תכניות ופיקוח עליהן.",
  },
  {
    title: "מנהל עבודה מוסמך",
    sub: "מוסמך לבנייה ובנייה הנדסית",
    note: "אחריות חוקית לבטיחות, ניהול אתר וניהול עובדים.",
  },
  {
    title: "מומחיות בפרויקטים מורכבים",
    sub: "בנקים, מלונות, תמ״א 38, מבני ציבור",
    note: "ביצוע במבנים פעילים תוך שמירה על רצף עסקי.",
  },
];

export default function Certifications() {
  return (
    <section className="relative bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start"
        >
          <motion.div variants={fadeUp}>
            <p className="eyebrow text-[var(--color-accent-deep)] mb-4 block">תעודות והסמכות</p>
            <h2 className="heading-display gold-underline" style={{ fontSize: "var(--fs-h2)" }}>
              חתימה של בעל
              <br />
              מקצוע ברישיון.
            </h2>
            <p className="mt-6 text-[var(--color-muted)] leading-relaxed max-w-md">
              כל פיקוח, חוות דעת או חתימה על תכנית — מבוצעים ע״י בעל רישיון פעיל
              ומגובים בביטוח אחריות מקצועית.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="space-y-5">
            {credentials.map((c, i) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="group flex items-start gap-5 p-6 rounded-[14px] border border-[var(--color-border)] bg-[var(--color-bg-alt)] hover:border-[var(--color-accent)] transition-colors duration-500"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] grid place-items-center">
                  <span className="text-[var(--color-accent)] font-[family-name:var(--font-accent)] text-sm">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-[var(--color-ink)] font-bold text-[1.1rem]">{c.title}</h3>
                  <p className="text-[var(--color-primary)] text-[0.95rem] mt-0.5 font-medium">
                    {c.sub}
                  </p>
                  <p className="text-[var(--color-muted)] text-[0.9rem] mt-2 leading-relaxed">
                    {c.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
