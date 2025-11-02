import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="main-footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section footer-brand" aria-label="Marque">
          <h3 className="footer-logo">SíRí</h3>
          <p className="footer-tagline">Solution • Infra • Réseau • Informatique</p>
        </div>

        <nav className="footer-section footer-links" aria-label="Liens">
          <h4>Liens</h4>
          <Link to="/services">Services</Link>
          <Link to="/tarifs">Tarifs</Link>
          <Link to="/support">Contact</Link>
        </nav>

        <div className="footer-section footer-contact" aria-label="Contact">
          <h4>Contact</h4>
          <a href="tel:+262692154474">+262 692 15 44 74</a>
          <a href="mailto:hidouche.laguehal@orange.fr">hidouche.laguehal@orange.fr</a>
        </div>

        <div className="footer-section footer-legal" aria-label="Légal">
          <h4>Légal</h4>
          <Link to="/mentions-legales" className="footer-link">Mentions légales</Link>
          <Link to="/confidentialite" className="footer-link">Confidentialité</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          by <a href="https://tech-info-tuto.vercel.app" target="_blank" rel="noopener noreferrer">TECH INFO TUTO</a> — All rights reserved © 2025–2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;
