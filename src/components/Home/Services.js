import './Services.css'; // Changement du chemin d'importation
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaServer, FaNetworkWired, FaShieldAlt, FaRocket, FaGlobe } from 'react-icons/fa';

function Services() {
  const services = [
    {
      id: "infra-reseau",
      title: "Infrastructure Réseau",
      description: "Conception, déploiement et maintenance de réseaux d'entreprise robustes et sécurisés.",
      icon: <FaNetworkWired />,
      link: "/services#infra-reseau"
    },
    {
      id: "serveurs",
      title: "Gestion de Serveurs",
      description: "Installation, configuration et infogérance de serveurs physiques et virtuels (Linux/Windows).",
      icon: <FaServer />,
      link: "/services#serveurs"
    },
    {
      id: "securite",
      title: "Sécurité Informatique",
      description: "Audit de sécurité, mise en place de pare-feux, protection contre les malwares et plans de reprise d'activité.",
      icon: <FaShieldAlt />,
      link: "/services#securite"
    },
    {
      id: "developpement",
      title: "Développement sur mesure",
      description: "Création d'applications et de sites web performants adaptés à vos besoins spécifiques.",
      icon: <FaLaptopCode />,
      link: "/services#developpement"
    },
    {
      id: "optimisation",
      title: "Optimisation & Performance",
      description: "Analyse et amélioration des performances de votre infrastructure pour une efficacité maximale.",
      icon: <FaRocket />,
      link: "/services#optimisation"
    },
    {
      id: "hebergement",
      title: "Solutions d'Hébergement",
      description: "Conseil et gestion de solutions d'hébergement web et d'applications (Cloud, VPS, dédié).",
      icon: <FaGlobe />,
      link: "/services#hebergement"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Nos Pôles d'Expertise</h2>
          <p className="section-subtitle">
            Des solutions informatiques complètes pour accompagner votre croissance.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-footer">
                <Link to={service.link} className="learn-more">
                  En savoir plus <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
