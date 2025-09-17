import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contactez-nous</h2>
    <form className="contact-form">
      <input type="text" placeholder="Nom" required className="text-black" style={{ color: 'black', backgroundColor: 'white' }} />
      <input type="email" placeholder="Email" required className="text-black" style={{ color: 'black', backgroundColor: 'white' }} />
      <textarea placeholder="Votre message" required className="text-black" style={{ color: 'black', backgroundColor: 'white' }} />
      <button type="submit">Envoyer</button>
    </form>
  </section>
);

export default Contact;
