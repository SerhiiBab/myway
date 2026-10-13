import "./Benefits.css";

const topics = [
  { label: "Netzwerkpartner", href: "/netzwerkpartner/" },
  { label: "motivierte und leistungsbereite Interessenten", href: "/motivierte-und-leistungsbereite-interessenten/" },
  { label: "MyWay Bewerberbörse", href: "/myway-bewerberboerse/" },
  { label: "Auszubildende", href: "/auszubildende/" },
  { label: "fachlich und sprachlich geeignete Bewerber", href: "/fachlich-und-sprachlich-geeignete-bewerber/" },
  { label: "Transparenz jederzeit", href: "/transparenz-jederzeit/" },
  { label: "Fachkräfte", href: "/fachkraefte/" },
  { label: "Berufliche Vorbereitung", href: "/berufliche-vorbereitung/" },
  { label: "Sprachkurse", href: "/sprachkurse/" },
  { label: "große Erfahrung beim Thema Visum", href: "/grosse-erfahrung-beim-thema-visum/" },
  { label: "Qualifizierungen & Seminare", href: "/qualifizierungen-und-seminare/" },
  { label: "Restrukturierung", href: "/restrukturierung/" },
];

export default function Benefits() {
  return (
    <section className="myway-benefits" aria-labelledby="myway-benefits-title">
      <div className="myway-benefits__inner">
        <h2 id="myway-benefits-title" className="myway-benefits__title">
          Stärken &amp; Vorteile der MyWay Akademie
        </h2>
        <p className="myway-benefits__subtitle">Wählen Sie Ihr Thema aus:</p>
        <nav className="myway-benefits__topics" aria-label="Themen und Vorteile">
          {topics.map(({ label, href }) => (
            <a key={href} href={href} className="myway-benefits__topic">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
