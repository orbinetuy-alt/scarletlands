"use client";

import type { CSSProperties } from "react";
import { Navbar } from "./components/Navbar";
import { ProcessSection } from "./components/ProcessSection";
import { ScrollEffects } from "./components/ScrollEffects";
import { useLanguage } from "./components/LanguageProvider";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <main>
      <ScrollEffects />
      <Navbar />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-watermark" aria-hidden="true" />
          <div className="hero-copy hero-enter">
            <p className="hero-kicker">{t.heroKicker}</p>
            <h1 id="hero-title">
              <span>{t.heroTitle}</span>
              <em>{t.heroAccent}</em>
            </h1>
            <div className="hero-support">
              <p>{t.heroSupport}</p>
              <a href="#contacto">{t.heroCta}</a>
            </div>
          </div>

          <div className="hero-operation hero-enter hero-enter-delayed" aria-hidden="true">
            <div className="operation-label">
              <span>{t.origin}</span>
              <strong>{t.product}</strong>
            </div>
            <div className="operation-route">
              <i />
              <span />
              <i />
            </div>
            <div className="operation-label operation-label-end">
              <span>{t.destination}</span>
              <strong>{t.market}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="company-intro" id="empresa" aria-labelledby="company-title">
        <div className="company-intro-inner">
          <div className="section-index" data-reveal aria-hidden="true">
            <span>01</span>
            <i />
          </div>

          <div className="company-statement" data-reveal style={{ "--reveal-delay": "90ms" } as CSSProperties}>
            <p className="section-label">{t.companyLabel}</p>
            <h2 id="company-title">
              {t.companyTitle}<br />
              <em>{t.companyAccent}</em>
            </h2>
          </div>

          <div className="company-detail" data-reveal style={{ "--reveal-delay": "180ms" } as CSSProperties}>
            <p>{t.companyText}</p>
            <ul aria-label={t.activityLabel}>
              {t.activities.map((activity, index) => <li key={index}>{activity}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="solutions" id="soluciones" aria-labelledby="solutions-title">
        <div className="solutions-inner">
          <div className="solutions-heading">
            <div className="section-index section-index-dark" data-reveal aria-hidden="true">
              <span>02</span>
              <i />
            </div>
            <div data-reveal style={{ "--reveal-delay": "90ms" } as CSSProperties}>
              <p className="section-label">{t.solutionsLabel}</p>
              <h2 id="solutions-title">
                {t.solutionsTitle}<br />
                <em>{t.solutionsAccent}</em>
              </h2>
            </div>
          </div>

          <ol className="solutions-list">
            {t.solutions.map(([title, text], index) => (
              <li
                data-reveal
                key={index}
                style={{ "--reveal-delay": `${100 + index * 70}ms` } as CSSProperties}
              >
                <span className="solution-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="solution-arrow" aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProcessSection />

      <section className="network" aria-labelledby="network-title">
        <div className="network-intro">
          <div className="section-index section-index-dark" data-reveal aria-hidden="true">
            <span>04</span>
            <i />
          </div>
          <div data-reveal style={{ "--reveal-delay": "90ms" } as CSSProperties}>
            <p className="section-label">{t.networkLabel}</p>
            <h2 id="network-title">
              {t.networkTitle}<br />
              <em>{t.networkAccent}</em>
            </h2>
          </div>
          <p className="network-copy" data-reveal style={{ "--reveal-delay": "180ms" } as CSSProperties}>
            {t.networkText}
          </p>
        </div>

        <div className="network-marquee" aria-label={t.countries.join(", ")}>
          <div className="network-track">
            <div>
              {t.countries.map((country, index) => <span key={index}>{country}<i>●</i></span>)}
            </div>
            <div aria-hidden="true">
              {t.countries.map((country, index) => <span key={index}>{country}<i>●</i></span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto" aria-labelledby="contact-title">
        <div className="contact-inner">
          <div className="section-index contact-index" data-reveal aria-hidden="true">
            <span>05</span>
            <i />
          </div>

          <div className="contact-main" data-reveal style={{ "--reveal-delay": "90ms" } as CSSProperties}>
            <p className="contact-label">{t.contactPrompt}</p>
            <h2 id="contact-title">{t.contactTitle}</h2>
            <a className="contact-mail" href="mailto:contact@scarletlands.com">
              <span>contact@scarletlands.com</span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>

          <div className="contact-details" data-reveal style={{ "--reveal-delay": "180ms" } as CSSProperties}>
            <div>
              <span>{t.phone}</span>
              <a href="tel:+13322317618">+1 (332) 231-7618</a>
            </div>
            <div>
              <span>{t.location}</span>
              <p>7345 W Sand Lake Rd, Ste 210, Office 3648<br />Orlando, FL 32819 · United States</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-primary">
            <a className="footer-brand" href="#" aria-label="Scarlet Lands — Inicio">
              Scarlet Lands <span>LLC</span>
            </a>
            <p>{t.slogan[0]}<br />{t.slogan[1]}</p>
          </div>

          <nav className="footer-column" aria-label="Navegación del pie de página">
            <span>{t.footerNav}</span>
            <a href="#empresa">{t.nav[0]}</a>
            <a href="#soluciones">{t.nav[1]}</a>
            <a href="#proceso">{t.nav[2]}</a>
          </nav>

          <div className="footer-column">
            <span>{t.services}</span>
            <p>{t.activities[1]}</p>
            <p>{t.solutions[2][0]}</p>
            <p>{t.activities[0]}</p>
          </div>

          <address className="footer-column">
            <span>{t.contact}</span>
            <a href="mailto:contact@scarletlands.com">contact@scarletlands.com</a>
            <a href="tel:+13322317618">+1 (332) 231-7618</a>
            <p>7345 W Sand Lake Rd, Ste 210, Office 3648<br />Orlando, FL 32819 · United States</p>
          </address>

          <div className="footer-meta">
            <span>© 2026 Scarlet Lands LLC</span>
            <button
              className="footer-language"
              type="button"
              aria-label={t.changeLanguage}
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
            >
              <span className={language === "es" ? "is-active" : ""}>ES</span> <i>/</i>{" "}
              <span className={language === "en" ? "is-active" : ""}>EN</span>
            </button>
            <a href="#">{t.backToTop}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
