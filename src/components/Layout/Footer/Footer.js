import './Footer.css'; // Assurez-vous d'importer le fichier CSS
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} SíRí - Tous droits réservés.</p>
        </div>
        <div className="footer-credits">
          <p>
            Solution Infra - Réseau Informatique by{' '}
            <a 
              href="https://www.techinfotuto.fr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              @ti
            </a>
          </p>
        </div>
        <div className="footer-legal">
          <Link to="/mentions-legales" className="footer-link">Mentions Légales</Link>
          <Link to="/confidentialite" className="footer-link">Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
