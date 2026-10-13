import "./Hero.css";

const heroLinks = [
  { label: "Bewerberprofile", href: "#bewerberprofile" },
  { label: "Personal-Service", href: "#personal-service" },
  { label: "Qualifizierungen", href: "#qualifizierungen" },
  { label: "Special", href: "#special" },
];

export default function Hero() {
  return (
    <section className="myway-hero" aria-labelledby="myway-hero-title">
      <div className="myway-hero__image" aria-hidden="true" />
      <div className="myway-hero__container">
        <div className="myway-hero__intro">
          <p className="myway-hero__eyebrow">
            12 Länder, 11 Branchen, Recruitment,<br className="myway-hero__desktop-break" />
            Berufsvorbereitung, Sprache,<br className="myway-hero__desktop-break" />
            Visum, starke Partner
          </p>
          <h1 id="myway-hero-title">
            Fachkräftenachwuchs<br />
            national und<br />
            international
          </h1>
        </div>

        <nav className="myway-hero__navigation" aria-label="Hauptbereiche">
          {heroLinks.map(({ label, href }) => (
            <a className="myway-hero__card" href={href} key={label}>
              <span>{label}</span>
              <svg className="myway-hero__arrow" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M3 16h25m-11-11 11 11-11 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
