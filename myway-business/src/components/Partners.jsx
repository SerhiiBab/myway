import "./Partners.css";

const partners = [
  { name: "Medienstadt Babelsberg", image: "https://myway-business.de/wp-content/uploads/2025/06/medienstadt.jpg" },
  { name: "Geschäftsnetzwerk Potsdam", image: "https://myway-business.de/wp-content/uploads/2025/02/geschaeftsnetzwerk.jpg" },
  { name: "Unternehmerverband Brandenburg-Berlin (UVBB)", image: "https://myway-business.de/wp-content/uploads/2025/02/LOGO_UVBB.jpg" },
  { name: "Netzwerk Sachsen-Anhalt", image: "https://myway-business.de/wp-content/uploads/2024/02/netzwerk_sa.jpg" },
  { name: "Wirtschaftsinitiative Flughafenregion Brandenburg", image: "https://myway-business.de/wp-content/uploads/2025/06/wfb.jpg" },
  { name: "TÜV Rheinland", image: "https://myway-business.de/wp-content/uploads/2025/02/logo-TUEV.jpg" },
  { name: "Sky Pflege Akademie", image: "https://myway-business.de/wp-content/uploads/2025/02/SkyPflege_Logo.jpg" },
  { name: "Deutscher Demografie Preis", image: "https://myway-business.de/wp-content/uploads/2025/02/ddp_neutral.jpg" },
  { name: "Deutscher Engagementpreis", image: "https://myway-business.de/wp-content/uploads/2025/02/Logo_Deutscher_Engagement-Preis.jpg" },
  { name: "GfM Gruppe", image: "https://myway-business.de/wp-content/uploads/2024/02/Logo-GfM-Gruppe.png" },
  { name: "HR Arena", image: "https://myway-business.de/wp-content/uploads/2025/02/HR-Arena-logo.jpg" },
];

export default function Partners() {
  return (
    <section className="myway-partners" aria-labelledby="myway-partners-title">
      <div className="myway-partners__container">
        <header className="myway-partners__header">
          <h2 id="myway-partners-title">Netzwerkpartner &amp; Akkreditierungen</h2>
          <p>Worauf wir stolz sind und Sie sich verlassen können:</p>
        </header>
        <div className="myway-partners__grid">
          {partners.map(({ name, image }) => (
            <div className="myway-partners__cell" key={name}>
              <img src={image} alt={name} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
