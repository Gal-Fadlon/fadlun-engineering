"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUp, stagger, viewportOnce } from "./motion-variants";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail: string;
  format?: "compact" | "plain";
};

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "שנות ניסיון", detail: "בליווי פרויקטים מורכבים" },
  { value: 130000, suffix: " מ״ר", label: "קמפוס בנק מזרחי לוד", detail: "פרויקט דגל ברמת ביצוע מהגבוהות בארץ", format: "compact" },
  { value: 100, suffix: "+", label: "פרויקטים", detail: "בנקים, מלונות, תמ״א 38, יוקרה" },
  { value: 24, suffix: "/7", label: "זמינות מקצועית", detail: "מענה בזמן אמת בכל שלב" },
];

function Counter({ to, format }: { to: number; format?: "compact" | "plain" }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => {
    if (format === "compact" && v >= 1000) {
      return Math.round(v).toLocaleString("he-IL");
    }
    return Math.round(v).toString();
  });
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, motionValue, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  return (
    <section id="about" className="relative bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start"
        >
          <motion.div variants={fadeUp}>
            <p className="eyebrow text-[var(--color-accent-deep)] mb-4 block">אודות</p>
            <h2 className="heading-display gold-underline" style={{ fontSize: "var(--fs-h2)" }}>
              מקצוענות שנמדדת
              <br />
              בפרטים הקטנים.
            </h2>
            <p className="mt-8 text-[var(--color-muted)] leading-relaxed max-w-md">
              גבי פדלון – הנדסה ובנייה. ניהול ופיקוח על כל סוגי עבודות הבנייה,
              השיפוץ והמערכות האלקטרו-מכניות. הנדסאי בניין ברישיון לתכנון ופיקוח,
              ומנהל עבודה מוסמך לבנייה הנדסית — מלווה פרויקטים משלב התכנון, דרך
              הפעלת יועצים ובניית מכרזים, ועד מסירת חזקה ללקוח.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-6">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="relative border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-7 rounded-[14px] overflow-hidden group"
              >
                <span className="absolute top-0 right-0 h-[2px] w-12 bg-[var(--color-accent)] group-hover:w-20 transition-all duration-500" />
                <div className="flex items-baseline gap-1">
                  <span
                    className="stat-num text-[var(--color-primary)]"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 3.6rem)" }}
                  >
                    {s.prefix}
                    <Counter to={s.value} format={s.format} />
                    {s.suffix}
                  </span>
                </div>
                <h3 className="mt-2 text-[var(--color-ink)] font-bold text-[1.05rem]">
                  {s.label}
                </h3>
                <p className="mt-1.5 text-[var(--color-muted)] text-sm leading-relaxed">
                  {s.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
