import '../../styles/pages/Pages.css';
import QuoteForm from '../../components/QuoteForm/QuoteForm';

function Formation() {
  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Formation</h1>
        <p className="section-subtitle">Initiations et perfectionnement adaptés à vos besoins</p>
      </div>

      <div className="content">
        <h2>Domaines</h2>
        <ul>
          <li>Bureautique (Suite Office, LibreOffice)</li>
          <li>Bonnes pratiques de sécurité</li>
          <li>Gestion d’email et organisation</li>
          <li>Outils métiers et applications web</li>
          <li>Formation sur mesure</li>
        </ul>
      </div>

      <QuoteForm />
    </div>
  );
}

export default Formation;
