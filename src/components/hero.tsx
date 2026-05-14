"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion-variants";

const Scene3D = dynamic(() => import("./scene-3d"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center text-[var(--color-muted)]">
      <span className="text-sm tracking-widest">טוען מודל…</span>
    </div>
  ),
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--color-bg)] pt-16 lg:pt-24 pb-24 lg:pb-32"
    >
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #DFC07C 0%, transparent 70%)" }}
        aria-hidden
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        viewport={viewportOnce}
        className="relative max-w-[1200px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center"
      >
        <div className="order-2 lg:order-1 text-right">
          <motion.p variants={fadeUp} className="eyebrow text-[var(--color-accent-deep)] mb-5 inline-block">
            GABI FADLUN · ENGINEERING & CONSTRUCTION
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="heading-display"
            style={{ fontSize: "var(--fs-hero)" }}
          >
            ניהול ופיקוח על פרויקטים
            <br />
            <span className="text-[var(--color-primary)]">שבונים</span>{" "}
            <span className="relative">
              את העתיד
              <span
                className="absolute -bottom-2 right-0 h-[3px] w-full bg-[var(--color-accent)]"
                aria-hidden
              />
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-[var(--color-muted)] text-lg max-w-xl leading-relaxed"
          >
            מעל עשור של ליווי וניהול פרויקטי בנייה, שיפוץ ומערכות אלקטרו-מכניות
            עבור בנקים, מלונות, משרדי ממשלה ובתי יוקרה — תחת פיקוח צמוד של הנדסאי
            בניין מוסמך ומנהל עבודה ברישיון.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              קבלו ייעוץ ראשוני
            </a>
            <a href="#projects" className="btn-ghost">
              לפרויקטים שלנו
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-[var(--color-muted)]"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              הנדסאי בניין ברישיון
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              מנהל עבודה מוסמך
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              10+ שנות ניסיון
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="order-1 lg:order-2 relative"
        >
          <div
            className="relative aspect-square w-full max-w-[560px] mx-auto rounded-[28px] overflow-hidden"
            style={{
              background:
                "linear-gradient(165deg, rgba(42,56,80,0.04) 0%, rgba(223,192,124,0.08) 100%)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div className="absolute inset-0 blueprint-grid opacity-50" aria-hidden />
            <Scene3D />

            {/* Floating accents */}
            <div className="absolute top-6 left-6 float-slow pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
            </div>
            <div className="absolute bottom-12 right-10 float-slower pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            </div>

            {/* Spec callouts */}
            <div
              className="absolute top-8 right-8 text-[10px] font-[family-name:var(--font-accent)] tracking-[0.25em] text-[var(--color-primary)] opacity-60 select-none pointer-events-none"
              dir="ltr"
            >
              SCALE 1:200
            </div>
            <div
              className="absolute bottom-6 left-8 text-[10px] font-[family-name:var(--font-accent)] tracking-[0.25em] text-[var(--color-primary)] opacity-60 select-none pointer-events-none"
              dir="ltr"
            >
              REV. 03 · 2026
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
