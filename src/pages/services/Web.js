import '../../styles/pages/Pages.css';
import QuoteForm from '../../components/QuoteForm/QuoteForm';

function Web() {
  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Création de Sites Web</h1>
        <p className="section-subtitle">Vitrines, e‑commerce et apps web performantes, adaptées à votre activité</p>
      </div>

      <div className="content">
        <h2>Ce que nous proposons</h2>
        <ul>
          <li>Sites vitrines professionnels et responsives</li>
          <li>Boutiques e‑commerce (catalogue, panier, paiement)</li>
          <li>Applications web sur mesure</li>
          <li>Optimisations SEO de base et performance</li>
          <li>Maintenance et mises à jour</li>
        </ul>
      </div>

      <QuoteForm />
    </div>
  );
}

export default Web;
