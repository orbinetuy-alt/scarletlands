"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const { t } = useLanguage();
  const steps = t.steps.map(([title, text]) => ({ title, text }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(Number((entry.target as HTMLElement).dataset.step));
          }
        });
      },
      { rootMargin: "-36% 0px -36%", threshold: 0 },
    );

    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process" id="proceso" aria-labelledby="process-title">
      <div className="process-inner">
        <div className="process-sticky">
          <div className="section-index" aria-hidden="true">
            <span>03</span>
            <i />
          </div>
          <div className="process-heading">
            <p className="section-label">{t.processLabel}</p>
            <h2 id="process-title">
              {t.processTitle}<br />
              <em>{t.processAccent}</em>
            </h2>
          </div>
          <div className="process-progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${(activeStep + 1) / steps.length})` }} />
          </div>
        </div>

        <ol className="process-steps">
          {steps.map((step, index) => (
            <li
              className={activeStep === index ? "is-active" : ""}
              data-step={index}
              key={index}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
