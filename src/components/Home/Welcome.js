import './Welcome.css'; // Changement du chemin d'importation
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate('/services');
  };

  const handleContactClick = () => {
    navigate('/support');
  };

  return (
    <section className="welcome-hero">
      <div className="container">
        <h1 className="hero-title">
          Solutions Infra - Réseau Informatique
        </h1>
        <p className="hero-subtitle">
          Votre partenaire confiance pour une infrastructure robuste et performante.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={handleServicesClick}>
            Découvrir nos services
          </button>
          <button className="btn btn-secondary" onClick={handleContactClick}>
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}

export default Welcome;