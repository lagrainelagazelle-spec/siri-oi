import '../styles/pages/Tarifs.css';

function Tarifs() {
  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Nos Tarifs</h1>
        <p className="section-subtitle">Des solutions adaptées à vos besoins</p>
      </div>

      <div className="tarifs-content">
        <div className="tarifs-grid">
          <div className="tarif-card">
            <div className="tarif-header">
              <span className="tarif-icon">⚡</span>
              <h3>Intervention Ponctuelle</h3>
            </div>
            <div className="price">60€<span>/heure</span></div>
            <ul className="tarif-features">
              <li>Diagnostic complet</li>
              <li>Dépannage sur place</li>
              <li>Assistance personnalisée</li>
            </ul>
          </div>

          <div className="tarif-card featured">
            <div className="tarif-badge">Recommandé</div>
            <div className="tarif-header">
              <span className="tarif-icon">🔄</span>
              <h3>Maintenance Mensuelle</h3>
            </div>
            <div className="price">129€<span>/mois</span></div>
            <p className="price-subtitle">par poste de travail</p>
            <ul className="tarif-features">
              <li>Maintenance préventive</li>
              <li>Support prioritaire</li>
              <li>Interventions illimitées</li>
            </ul>
          </div>
        </div>

        <div className="info-section">
          <h2>Informations importantes</h2>
          <div className="info-grid">
            <div className="info-card">
              <span className="info-icon">💳</span>
              <h4>Moyens de paiement</h4>
              <p>Espèces et virement</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📄</span>
              <h4>Facturation</h4>
              <p>TVA non applicable (article 293B du CGI)</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📋</span>
              <h4>Devis</h4>
              <p>Gratuit sur demande</p>
            </div>
            <div className="info-card">
              <span className="info-icon">🚗</span>
              <h4>Frais de déplacement</h4>
              <p>49€ (rayon sans limite)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarifs;
