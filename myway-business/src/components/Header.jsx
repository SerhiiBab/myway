import Logo from "../assets/Logo_MyWay.png"

import { useEffect, useState } from "react";
import "./Menu.css";

const menuData = [
  {
    title: "Bewerberprofile",
    items: [
      { label: "MyWay App", href: "#myway-app" },
      { label: "Branchen", href: "#branchen" },
      { label: "In 3 Schritten zur Fachkraft", href: "#fachkraft" },
      { label: "Erfolgsgeschichten", href: "#erfolgsgeschichten" },
      { label: "Weltweites Netzwerk", href: "#netzwerk" },
    ],
  },
  {
    title: "Personal-Service",
    items: [
      { label: "Leistungsübersicht", href: "#leistungen" },
      { label: "Recruitment", href: "#recruitment" },
      { label: "Eignung", href: "#eignung" },
      { label: "Auswahl", href: "#auswahl" },
      { label: "Anerkennung", href: "#anerkennung" },
      { label: "Sprache", href: "#sprache" },
      { label: "Visum", href: "#visum" },
      { label: "Einreise", href: "#einreise" },
      { label: "Start", href: "#start" },
    ],
  },
  {
    title: "Qualifizierungen",
    items: [
      { label: "Berufliche Vorbereitung", href: "#vorbereitung" },
      { label: "Training am Arbeitsplatz", href: "#training" },
      { label: "Berufliche Weiterbildung", href: "#weiterbildung" },
      { label: "Unternehmensseminare", href: "#unternehmensseminare" },
      { label: "Seminarübersicht", href: "#seminare" },
    ],
  },
  {
    title: "Special",
    items: [
      { label: "Restrukturierung", href: "#restrukturierung" },
      { label: "News / Blog", href: "#news" },
    ],
    extra: {
      title: "Kontakt",
      items: [
        { label: "Persönliche Ansprechpartner", href: "#ansprechpartner" },
        { label: "Zentrale in Berlin", href: "#berlin" },
      ],
    },
  },
];

function Chevron({ className = "" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuLinks({ items, closeMenu }) {
  return (
    <ul className="myway-menu__links">
      {items.map(({ label, href }) => (
        <li key={label}>
          <a href={href} onClick={closeMenu}>
            <span>{label}</span><span className="myway-menu__link-arrow" aria-hidden="true">›</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Header({ logoSrc = "/logo.svg", backgroundImage = "", onSearch, onLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState("Bewerberprofile");

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const toggleSection = (title) => setExpanded((prev) => (prev === title ? "" : title));

  return (
    <>
      <header className="myway-header">
        <div className="myway-header__inner">
          <a className="myway-header__brand" href="/" aria-label="MyWay – Startseite" onClick={closeMenu}>
            <img src={Logo} alt="MyWay academy of jobs" />
          </a>

          <nav className="myway-header__nav" aria-label="Hauptnavigation">
            {menuData.map(({ title }) => (
              <button
                className={`myway-header__nav-button ${isOpen && expanded === title ? "is-active" : ""}`}
                key={title}
                type="button"
                aria-expanded={isOpen && expanded === title}
                aria-controls="myway-mega-panel"
                onClick={() => { setIsOpen(true); setExpanded(title); }}
              >
                {title}<Chevron />
              </button>
            ))}
          </nav>

          <div className="myway-header__actions">
            <button type="button" className="myway-header__icon-button" aria-label="Suche" onClick={onSearch}>
              <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.7"/><path d="m21.5 21.5 8 8" stroke="currentColor" strokeWidth="1.7"/></svg>
            </button>
            <button type="button" className="myway-header__icon-button myway-header__login" aria-label="Login" onClick={onLogin}>
              <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M18 3h9v26h-9M3 16h19m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              type="button"
              className="myway-header__mobile-toggle"
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isOpen}
              aria-controls="myway-mega-panel"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <span aria-hidden="true">×</span> : <span aria-hidden="true">☰</span>}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <>
          <button className="myway-menu__backdrop" aria-label="Menü schließen" type="button" onClick={closeMenu} />
          <div
            id="myway-mega-panel"
            className="myway-menu"
            style={backgroundImage ? { backgroundImage: `linear-gradient(rgba(92, 132, 151, .94), rgba(92, 132, 151, .94)), url("${backgroundImage}")` } : undefined}
          >
            <div className="myway-menu__inner">
              <button type="button" className="myway-menu__close" aria-label="Menü schließen" onClick={closeMenu}>×</button>
              <div className="myway-menu__grid">
                {menuData.map(({ title, items, extra }) => (
                  <section className="myway-menu__column" key={title}>
                    <button className="myway-menu__heading" type="button" aria-expanded={expanded === title} onClick={() => toggleSection(title)}>
                      {title}<Chevron className="myway-menu__heading-icon" />
                    </button>
                    <div className={`myway-menu__section-body ${expanded === title ? "is-expanded" : ""}`}>
                      <MenuLinks items={items} closeMenu={closeMenu} />
                      {extra && (
                        <div className="myway-menu__extra">
                          <h2>{extra.title}</h2>
                          <MenuLinks items={extra.items} closeMenu={closeMenu} />
                        </div>
                      )}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
