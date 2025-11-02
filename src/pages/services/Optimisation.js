import '../../styles/pages/Pages.css';
import QuoteForm from '../../components/QuoteForm/QuoteForm';

function Optimisation() {
  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Optimisation & Performance</h1>
        <p className="section-subtitle">Accélérez vos postes, serveurs et applications</p>
      </div>

      <div className="content">
        <h2>Interventions</h2>
        <ul>
          <li>Analyse des performances</li>
          <li>Nettoyage système et démarrage</li>
          <li>Mise à jour des logiciels & pilotes</li>
          <li>Dimensionnement matériel</li>
          <li>Optimisation réseau et Wi‑Fi</li>
        </ul>
      </div>

      <QuoteForm />
    </div>
  );
}

export default Optimisation;
