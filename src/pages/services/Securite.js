import '../../styles/pages/Pages.css';
import QuoteForm from '../../components/QuoteForm/QuoteForm';

function Securite() {
  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Sécurité Informatique</h1>
        <p className="section-subtitle">Protection, sauvegardes et durcissement de vos systèmes et données</p>
      </div>

      <div className="content">
        <h2>Prestations</h2>
        <ul>
          <li>Audit et recommandations</li>
          <li>Antivirus, EDR et pare‑feux</li>
          <li>Politiques de mots de passe & MFA</li>
          <li>Plan de sauvegardes et restauration</li>
          <li>Sensibilisation des équipes</li>
        </ul>
      </div>

      <QuoteForm />
    </div>
  );
}

export default Securite;
