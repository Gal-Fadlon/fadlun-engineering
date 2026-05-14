"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE_INTL = "972507747162";
const DEFAULT_MSG = "שלום גבי, הגעתי אליך דרך האתר ואשמח לדבר על פרויקט.";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(DEFAULT_MSG)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="צרו קשר ב-WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full grid place-items-center"
          style={{
            background: "#25D366",
            boxShadow:
              "0 10px 30px -8px rgba(37, 211, 102, 0.55), 0 4px 12px rgba(0,0,0,0.18)",
          }}
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full animate-ping opacity-50"
            style={{ background: "#25D366", animationDuration: "2.4s" }}
          />
          <svg
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="white"
            aria-hidden
            className="relative z-10"
          >
            <path d="M16.001 3C9.376 3 4 8.375 4 14.999c0 2.351.677 4.547 1.85 6.412L4 29l7.787-1.84a11.94 11.94 0 0 0 4.214.762h.001C22.624 27.922 28 22.547 28 15.923 28 9.299 22.625 3 16.001 3zm0 22.038h-.002a9.913 9.913 0 0 1-3.762-.737l-.27-.106-4.62 1.091 1.106-4.502-.176-.288a9.91 9.91 0 0 1-1.518-5.272c0-5.49 4.466-9.956 9.964-9.956a9.91 9.91 0 0 1 7.04 2.915 9.91 9.91 0 0 1 2.916 7.041c0 5.49-4.466 9.814-9.678 9.814zm5.45-7.453c-.297-.149-1.766-.871-2.039-.971-.273-.099-.471-.149-.67.149-.198.297-.768.971-.943 1.17-.173.198-.347.223-.644.074-.297-.148-1.257-.464-2.394-1.477-.886-.79-1.484-1.764-1.659-2.062-.173-.297-.018-.458.13-.605.134-.133.297-.347.446-.52.149-.174.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.148-.67-1.617-.918-2.213-.242-.581-.487-.502-.67-.512-.173-.008-.371-.01-.57-.01a1.09 1.09 0 0 0-.793.371c-.273.297-1.041 1.017-1.041 2.48s1.066 2.876 1.214 3.074c.149.198 2.095 3.2 5.075 4.487.71.306 1.262.488 1.694.624.712.227 1.36.195 1.872.118.572-.085 1.766-.722 2.015-1.42.248-.696.248-1.292.173-1.419-.074-.124-.272-.198-.57-.347z"/>
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
