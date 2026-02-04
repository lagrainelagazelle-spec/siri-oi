import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiCpu, FiServer, FiWifi, FiMonitor } from 'react-icons/fi';
import '../styles/pages/Services.css';

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const pillars = [
    {
      id: 'solution',
      title: 'Solution',
      icon: <FiCpu />,
      description:
        "Applications et intégrations sur‑mesure pour optimiser vos processus et votre quotidien.",
      details: [
        "Étude de besoin et cahier des charges",
        "Développement d'applications (web/desktop)",
        "Intégration d'outils (CRM/ERP)",
        "Automatisations et scripts",
        "Conseil et stratégie numérique",
      ],
    },
    {
      id: 'infra',
      title: 'Infra',
      icon: <FiServer />,
      description:
        "Parc et serveurs fiables, maintenus et dimensionnés pour durer et évoluer.",
      details: [
        "Installation et configuration de serveurs",
        "Gestion postes Windows/Mac/Linux",
        "Stockage et sauvegardes",
        "Virtualisation",
        "Maintenance préventive et curative",
      ],
    },
    {
      id: 'reseau',
      title: 'Réseau',
      icon: <FiWifi />,
      description:
        "Architectures réseau performantes et sécurisées, sur site et à distance.",
      details: [
        "Routeurs, switchs, pare‑feux",
        "Wi‑Fi pro (couverture, QoS)",
        "VPN et accès distant",
        "Segmentation et sécurité",
        "Supervision et monitoring",
      ],
    },
    {
      id: 'informatique',
      title: 'Informatique',
      icon: <FiMonitor />,
      description:
        "Support réactif, dépannage et formation pour vos équipes et vos outils.",
      details: [
        "Support utilisateurs (site/distance)",
        "Dépannage matériel/logiciel",
        "Gestion des licences",
        "Formation outils bureautiques",
        "Bonnes pratiques sécurité",
      ],
    },
  ];

  const subServices = [
    { id: 'web', title: 'Création de Sites Web', path: '/services/web', desc: 'Vitrines, e‑commerce, apps web', icon: '🌐' },
    { id: 'securite', title: 'Sécurité', path: '/services/securite', desc: 'Protection et sauvegardes', icon: '🔒' },
    { id: 'optimisation', title: 'Optimisation', path: '/services/optimisation', desc: 'Performance et tuning', icon: '⚡' },
    { id: 'formation', title: 'Formation', path: '/services/formation', desc: 'Initiations et perfectionnement', icon: '📚' },
  ];

  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Nos Services Experts</h1>
        <p className="section-subtitle">
          Une expertise claire et durable organisée autour de 4 piliers
        </p>
      </div>

      {/* Sous‑navigation collante */}
      <nav className="pillars-nav">
        {pillars.map((p) => (
          <a key={p.id} href={`#${p.id}`} className="pill-nav-link">
            {p.title}
          </a>
        ))}
      </nav>

      {/* Grille de cartes d’accès rapide */}
      <div className="pillars-grid">
        {pillars.map((p) => (
          <a key={p.id} href={`#${p.id}`} className="pillar-card">
            <div className="pillar-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </a>
        ))}
      </div>

      {/* Autres rubriques */}
      <div className="section-header" style={{marginTop: '1rem'}}>
        <h2>Autres rubriques</h2>
      </div>
      <div className="pillars-grid">
        {subServices.map((s) => (
          <a key={s.id} href={s.path} className="pillar-card">
            <div className="pillar-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </a>
        ))}
      </div>

      {/* Sections détaillées */}
      <div className="services-detailed">
        {pillars.map((p) => (
          <section key={p.id} id={p.id} className="service-block">
            <div className="service-header">
              <span className="service-icon">{p.icon}</span>
              <h2>{p.title}</h2>
            </div>
            <p className="service-description">{p.description}</p>
            <div className="service-details">
              <h3>Ce pilier couvre :</h3>
              <ul>
                {p.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Services;
