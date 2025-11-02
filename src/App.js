import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './pages/Home';
import Tarifs from './pages/Tarifs';
import Support from './pages/Support';
import Services from './pages/Services';
import Web from './pages/services/Web';
import Securite from './pages/services/Securite';
import Optimisation from './pages/services/Optimisation';
import Formation from './pages/services/Formation';

function App() {
  const basePath = process.env.REACT_APP_BASE_PATH || '';
  
  return (
    <Router basename={basePath}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web" element={<Web />} />
          <Route path="/services/securite" element={<Securite />} />
          <Route path="/services/optimisation" element={<Optimisation />} />
          <Route path="/services/formation" element={<Formation />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;