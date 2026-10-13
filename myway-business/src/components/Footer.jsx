import { useEffect, useState } from "react";
import "./Footer.css";

const sections = [
  {
    title: "Bewerberprofile",
    links: [
      ["MyWay App", "#myway-app"],
      ["Branchen", "#branchen"],
      ["In 3 Schritten zur Fachkraft", "#fachkraft"],
      ["Erfolgsgeschichten", "#erfolgsgeschichten"],
      ["Weltweites Netzwerk", "#netzwerk"],
    ],
  },
  {
    title: "Personal-Service",
    links: [
      ["Leistungsübersicht", "#leistungen"],
      ["Recruitment", "#recruitment"],
      ["Eignung", "#eignung"],
      ["Auswahl", "#auswahl"],
      ["Anerkennung", "#anerkennung"],
      ["Sprache", "#sprache"],
      ["Visum", "#visum"],
      ["Einreise", "#einreise"],
      ["Start", "#start"],
    ],
  },
  {
    title: "Qualifizierungen",
    links: [
      ["Berufliche Vorbereitung", "#vorbereitung"],
      ["Training am Arbeitsplatz", "#training"],
      ["Berufliche Weiterbildung", "#weiterbildung"],
      ["Unternehmensseminare", "#unternehmensseminare"],
      ["Seminarübersicht", "#seminare"],
    ],
  },
  {
    title: "Special",
    links: [
      ["Restrukturierung", "#restrukturierung"],
      ["News / Blog", "#news"],
    ],
    extra: {
      title: "Kontakt",
      links: [
        ["Persönliche Ansprechpartner", "#ansprechpartner"],
        ["Zentrale in Berlin", "#berlin"],
      ],
    },
  },
];

const socialLinks = [
  { label: "E-Mail", icon: "✉", href: "mailto:info@myway-business.de" },
  { label: "Telefon", icon: "☎", href: "tel:+490000000000" },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/" },
  { label: "Instagram", icon: "◎", href: "https://www.instagram.com/" },
  { label: "Facebook", icon: "f", href: "https://www.facebook.com/" },
];

function FooterLinks({ links }) {
  return (
    <ul className="myway-footer__links">
      {links.map(([label, href]) => (
        <li key={label}>
          <a href={href}><span>{label}</span><span aria-hidden="true">›</span></a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer({ logoSrc = null, scrollThreshold = 250 }) {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowToTop(window.scrollY > scrollThreshold);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  return (
    <>
      <footer className="myway-footer">
        <div className="myway-footer__top">
          <div className="myway-footer__container myway-footer__columns">
            {sections.map(({ title, links, extra }) => (
              <nav className="myway-footer__section" key={title} aria-label={title}>
                <h2>{title}</h2>
                <FooterLinks links={links} />
                {extra && (
                  <div className="myway-footer__extra">
                    <h2>{extra.title}</h2>
                    <FooterLinks links={extra.links} />
                  </div>
                )}
              </nav>
            ))}
          </div>
        </div>
        <div className="myway-footer__bottom">
          <div className="myway-footer__container myway-footer__bottom-inner">
            <div className="myway-footer__social" aria-label="Social Media">
              {socialLinks.map(({ label, icon, href }) => (
                <a key={label} href={href} aria-label={label} title={label}
                   {...(href.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {icon}
                </a>
              ))}
            </div>
            <div className="myway-footer__brand">
              {logoSrc ? <img src={logoSrc} alt="GfM Gruppe" /> : <span className="myway-footer__brand-text">GfM<span>GRUPPE</span></span>}
            </div>
            <div className="myway-footer__legal">
              <div><a href="/datenschutz/">Datenschutzerklärung</a><span aria-hidden="true">|</span><a href="/impressum/">Impressum</a></div>
              <small>Copyright © {new Date().getFullYear()} MyWay Academy of Jobs</small>
            </div>
          </div>
        </div>
      </footer>
      <button
        className={`myway-footer__to-top ${showToTop ? "is-visible" : ""}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Zurück nach oben"
        title="Nach oben"
        tabIndex={showToTop ? 0 : -1}
        aria-hidden={!showToTop}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none"><path d="m6 14 6-6 6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </>
  );
}
