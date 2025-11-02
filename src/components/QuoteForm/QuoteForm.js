import React, { useState } from 'react';
import './QuoteForm.css';

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'depannage',
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique d'envoi (ex: API, EmailJS)
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="quote-form-container">
        <h3>Merci !</h3>
        <p>Votre demande de devis a bien été envoyée. Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    );
  }

  return (
    <div className="quote-form-container">
      <h2>Demander un Devis</h2>
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="form-group">
          <label htmlFor="name">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Type de service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="depannage">Dépannage / Réparation</option>
            <option value="maintenance">Maintenance</option>
            <option value="reseau">Infrastructure Réseau</option>
            <option value="securite">Sécurité</option>
            <option value="site-web">Création de Site Web</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Décrivez votre besoin</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">Envoyer la Demande</button>
      </form>
    </div>
  );
}

export default QuoteForm;
