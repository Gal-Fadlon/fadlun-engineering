"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion-variants";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const lines = [
      `שלום גבי, פנייה מאתר:`,
      ``,
      `שם: ${name}`,
      `טלפון: ${phone}`,
    ];
    if (message) lines.push(``, `פירוט הפרויקט:`, message);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/972507747162?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--color-primary)" }}
    >
      <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #DFC07C 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="text-white"
        >
          <motion.p
            variants={fadeUp}
            className="eyebrow mb-4 block"
            style={{ color: "var(--color-accent)" }}
          >
            צרו קשר
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="heading-display heading-display-light"
            style={{ fontSize: "var(--fs-h2)" }}
          >
            מתכננים פרויקט?
            <br />
            בואו נדבר.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-white/75 leading-relaxed max-w-md">
            ייעוץ ראשוני ללא עלות. הצוות חוזר אליכם תוך 24 שעות עם שיחת אבחון
            והערכת היקף ראשונית לפרויקט שלכם.
          </motion.p>

          <motion.div variants={stagger} className="mt-12 space-y-5">
            <motion.a
              variants={fadeUp}
              href="tel:0507747162"
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full bg-[var(--color-accent)] grid place-items-center text-[var(--color-primary)] flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <div>
                <p className="text-white/60 text-xs tracking-widest uppercase font-[family-name:var(--font-accent)]">טלפון</p>
                <p className="text-white text-lg font-medium group-hover:text-[var(--color-accent)] transition-colors" dir="ltr">
                  050-774-7162
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={fadeUp}
              href="mailto:GABIFAD@GMAIL.COM"
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full bg-[var(--color-accent)] grid place-items-center text-[var(--color-primary)] flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-10 5L2 7"/>
                </svg>
              </span>
              <div>
                <p className="text-white/60 text-xs tracking-widest uppercase font-[family-name:var(--font-accent)]">דוא״ל</p>
                <p className="text-white text-lg font-medium group-hover:text-[var(--color-accent)] transition-colors" dir="ltr">
                  GABIFAD@GMAIL.COM
                </p>
              </div>
            </motion.a>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <span className="w-11 h-11 rounded-full bg-[var(--color-accent)] grid place-items-center text-[var(--color-primary)] flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 7-8 13-8 13S4 17 4 10a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <div>
                <p className="text-white/60 text-xs tracking-widest uppercase font-[family-name:var(--font-accent)]">אזור פעילות</p>
                <p className="text-white text-lg font-medium">מרכז הארץ וירושלים</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          onSubmit={onSubmit}
          className="bg-white p-8 md:p-10 rounded-[6px]"
        >
          <motion.h3
            variants={fadeUp}
            className="heading-display"
            style={{ fontSize: "1.8rem" }}
          >
            השאירו פרטים
            <span className="block w-[60px] h-[2px] bg-[var(--color-accent)] mt-3" />
          </motion.h3>

          <div className="mt-7 space-y-5">
            <motion.div variants={fadeUp}>
              <label htmlFor="name" className="block text-sm mb-2 text-[var(--color-ink)] font-medium">
                שם מלא <span className="text-[var(--color-accent-deep)]">*</span>
              </label>
              <input id="name" name="name" required className="input-field" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label htmlFor="phone" className="block text-sm mb-2 text-[var(--color-ink)] font-medium">
                טלפון <span className="text-[var(--color-accent-deep)]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                required
                type="tel"
                pattern="[0-9-+ ]{7,}"
                className="input-field"
                dir="rtl"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label htmlFor="message" className="block text-sm mb-2 text-[var(--color-ink)] font-medium">
                ספרו על הפרויקט
              </label>
              <textarea id="message" name="message" className="input-field" />
            </motion.div>

            <motion.div variants={fadeUp} className="pt-2 flex flex-wrap gap-3 items-center">
              <button
                type="submit"
                className="btn-primary"
                style={{ background: "#25D366", borderColor: "#1FAD52", color: "#fff" }}
              >
                <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden>
                  <path d="M16.001 3C9.376 3 4 8.375 4 14.999c0 2.351.677 4.547 1.85 6.412L4 29l7.787-1.84a11.94 11.94 0 0 0 4.214.762h.001C22.624 27.922 28 22.547 28 15.923 28 9.299 22.625 3 16.001 3zm5.45 14.585c-.297-.149-1.766-.871-2.039-.971-.273-.099-.471-.149-.67.149-.198.297-.768.971-.943 1.17-.173.198-.347.223-.644.074-.297-.148-1.257-.464-2.394-1.477-.886-.79-1.484-1.764-1.659-2.062-.173-.297-.018-.458.13-.605.134-.133.297-.347.446-.52.149-.174.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.148-.67-1.617-.918-2.213-.242-.581-.487-.502-.67-.512-.173-.008-.371-.01-.57-.01a1.09 1.09 0 0 0-.793.371c-.273.297-1.041 1.017-1.041 2.48s1.066 2.876 1.214 3.074c.149.198 2.095 3.2 5.075 4.487.71.306 1.262.488 1.694.624.712.227 1.36.195 1.872.118.572-.085 1.766-.722 2.015-1.42.248-.696.248-1.292.173-1.419-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                שליחה ב-WhatsApp
              </button>
              {sent && (
                <span className="text-sm text-[var(--color-muted)]">
                  נפתח חלון WhatsApp עם פרטי הפנייה — שלחו כדי לסיים.
                </span>
              )}
            </motion.div>

            <motion.p variants={fadeUp} className="text-xs text-[var(--color-muted)] pt-2">
              בלחיצה על שליחה נפתח חלון WhatsApp עם פרטי הפנייה מוכנים — אישור
              ושליחה מסיימים את התהליך.
            </motion.p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
