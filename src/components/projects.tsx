"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { fadeUp, stagger, viewportOnce } from "./motion-variants";

type Project = {
  title: string;
  scope: string;
  tag: string;
  metric?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "קמפוס בנק מזרחי, לוד",
    scope: "ליווי פרויקט הקמת קמפוס בנקאי ברמת גימור ופרטי ביצוע מהגבוהים בארץ.",
    tag: "פיננסים",
    metric: "130,000 מ״ר",
    gradient: "linear-gradient(135deg, #2A3850 0%, #4A5A75 100%)",
  },
  {
    title: "סניפי בנק מזרחי",
    scope: "שיפוץ סניפים פעילים, תכנון והוספת עמדות, החלפת מערכות אלקטרו-מכניות ואיטומים.",
    tag: "רצף עסקי",
    metric: "10+ סניפים",
    gradient: "linear-gradient(135deg, #34425A 0%, #2A3850 100%)",
  },
  {
    title: "מלון A23, דיזנגוף ת״א",
    scope: "ניהול הקמת מלון בוטיק במרכז תל אביב — מהקירוי ועד פתיחת חדרים לאירוח.",
    tag: "מלונאות",
    metric: "נכס שיא",
    gradient: "linear-gradient(135deg, #DFC07C 0%, #C6AC78 100%)",
  },
  {
    title: "משרד החינוך, ירושלים",
    scope: "פיקוח ותכנון על עבודות במבנים מאתגרים בלב מתחם פעיל של משרד ממשלתי.",
    tag: "מגזר ציבורי",
    metric: "מבנה מאוכלס",
    gradient: "linear-gradient(135deg, #2A3850 0%, #34425A 100%)",
  },
  {
    title: "תמ״א 38/1",
    scope: "פיקוח צמוד מצד היזם על פרויקטי חיזוק והרחבה — שמירה על הדיירים והאינטרס הכלכלי.",
    tag: "התחדשות עירונית",
    metric: "פיקוח יזמי",
    gradient: "linear-gradient(135deg, #4A5A75 0%, #2A3850 100%)",
  },
  {
    title: "שיפוץ בתי יוקרה",
    scope: "ניהול שיפוצים בסטנדרט פרימיום — מהריסה ועד גימור פרטני בפרויקטים פרטיים.",
    tag: "פרטי",
    metric: "Premium",
    gradient: "linear-gradient(135deg, #C6AC78 0%, #DFC07C 100%)",
  },
];

function TiltCard({ project, index }: { project: Project; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 140, damping: 14 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 140, damping: 14 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      variants={fadeUp}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="relative group rounded-[18px] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] tilt-card"
    >
      <div
        className="relative aspect-[5/3] overflow-hidden"
        style={{ background: project.gradient }}
      >
        <div className="absolute inset-0 blueprint-grid-dark opacity-60" aria-hidden />
        <div className="absolute inset-0 flex items-end p-6">
          <div className="w-full flex justify-between items-end">
            <span
              className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-white/90 font-[family-name:var(--font-accent)]"
              dir="ltr"
            >
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
              0{index + 1}
            </span>
            {project.metric && (
              <span className="text-white/95 text-sm font-bold tracking-wide">
                {project.metric}
              </span>
            )}
          </div>
        </div>

        {/* Floating geometric ornaments */}
        <motion.div
          className="absolute top-6 left-6 w-10 h-10 border-2 border-white/30 rounded-sm"
          style={{ transform: "translateZ(40px)" }}
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          aria-hidden
        />
        <div
          className="absolute bottom-16 right-8 w-3 h-3 rounded-full bg-[var(--color-accent)]"
          style={{ transform: "translateZ(60px)" }}
          aria-hidden
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-[2px] w-6 bg-[var(--color-accent)]" />
          <span className="text-[var(--color-accent-deep)] text-[0.78rem] tracking-[0.2em] uppercase font-[family-name:var(--font-accent)]">
            {project.tag}
          </span>
        </div>
        <h3 className="text-[var(--color-ink)] font-bold text-[1.2rem] mb-2">{project.title}</h3>
        <p className="text-[var(--color-muted)] leading-relaxed text-[0.95rem]">{project.scope}</p>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[var(--color-bg)] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl"
        >
          <div>
            <motion.p variants={fadeUp} className="eyebrow text-[var(--color-accent-deep)] mb-4 block">
              פרויקטים נבחרים
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="heading-display gold-underline"
              style={{ fontSize: "var(--fs-h2)" }}
            >
              שותפים שמובילים
              <br />
              את הסטנדרט.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-[var(--color-muted)] max-w-md leading-relaxed">
            ניסיון מצטבר מול לקוחות פיננסיים, מלונאים, מגזר ציבורי ויזמים פרטיים —
            עם דגש על רצף עסקי, איכות ביצוע ושקיפות תקציבית.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          style={{ perspective: 1200 }}
        >
          {projects.map((p, i) => (
            <TiltCard key={p.title} project={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
