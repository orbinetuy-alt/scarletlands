"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const links = ["#empresa", "#soluciones", "#proceso"].map((href, index) => ({ href, label: t.nav[index] }));

  return (
    <header className="site-header">
      <nav className="navbar" aria-label={t.navLabel}>
        <a className="brand" href="#inicio" aria-label="Scarlet Lands — Inicio">
          <span className="brand-mark">
            <Image
              src="/logosca-removebg-preview.png"
              alt=""
              fill
              priority
              sizes="56px"
            />
          </span>
          <span className="brand-name">
            SCARLET LANDS <small>LLC</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? t.closeMenu : t.openMenu}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-panel${open ? " is-open" : ""}`} id="main-menu">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="language"
              type="button"
              aria-label={t.changeLanguage}
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
            >
              <span className={language === "es" ? "is-active" : ""}>ES</span>
              <span aria-hidden="true"> / </span>
              <span className={language === "en" ? "is-active" : ""}>EN</span>
            </button>
            <a className="contact-button" href="#contacto" onClick={() => setOpen(false)}>
              <span>{t.talk}</span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
