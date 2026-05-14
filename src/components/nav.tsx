"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "אודות" },
  { href: "#services", label: "שירותים" },
  { href: "#projects", label: "פרויקטים" },
  { href: "#process", label: "תהליך עבודה" },
  { href: "#contact", label: "צור קשר" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[var(--shadow-header)]"
          : "bg-white/60 backdrop-blur"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto h-[78px] px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="גבי פדלון – הנדסה ובניה">
          <Image
            src="/logo.png"
            alt="גבי פדלון – הנדסה ובניה"
            width={220}
            height={120}
            priority
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[var(--color-ink)] text-[1rem] font-medium hover:text-[var(--color-primary)] transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1.5 right-0 h-[2px] w-0 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0507747162"
            className="text-[var(--color-primary)] font-semibold text-[0.95rem]"
            dir="ltr"
          >
            050-774-7162
          </a>
          <a href="#contact" className="btn-ghost text-sm">
            צרו קשר
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="פתח תפריט"
          aria-expanded={open}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--color-primary)] transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-primary)] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-primary)] transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[var(--color-bg)] overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-5 max-w-[1200px] mx-auto">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg text-[var(--color-ink)] font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 flex items-center gap-3">
                <a href="tel:0507747162" className="btn-primary" dir="ltr">
                  050-774-7162
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
