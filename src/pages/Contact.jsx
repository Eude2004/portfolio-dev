import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    setSubmitted(true);
    // Réinitialiser le formulaire
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h1>Me Contacter</h1>
      
      {submitted ? (
        <div className="success-message">
          <p>Merci pour votre message ! Je vous répondrai dès que possible.</p>
          <button onClick={() => setSubmitted(false)}>Envoyer un autre message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>
      )}
      
      <div className="contact-info">
        <h2>Informations de contact</h2>
        <p>Vous pouvez également me contacter directement :</p>
        <ul>
          <li>Email: <a href="mailto:tsiemieude@gmail.com">Envoyez-moi un email</a></li>
          <li>WhatsApp: <a href="https://wa.me/237698182367" target="_blank" rel="noopener noreferrer">
            Envoyez-moi un message sur WhatsApp</a></li>
          <li>GitHub: <a href="https://github.com/tsiemi-eude" target="_blank" rel="noopener noreferrer">
             Visitez mon profil GitHub</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;