"use client";

import { useEffect } from "react";
import { useLanguage } from "./LanguageProvider";

export function ScrollEffects() {
  const { language } = useLanguage();

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    let frame = 0;

    const updateHeader = () => {
      frame = 0;
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8%" },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [language]);

  return null;
}
