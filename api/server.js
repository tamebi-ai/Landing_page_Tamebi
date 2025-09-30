const serverless = require('serverless-http');
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: '*', // Allow all origins
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting pour éviter le spam
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 5, // 5 tentatives par IP
//   message: {
//     error: 'Trop de tentatives, réessayez dans 15 minutes'
//   }
// });

// app.use('/api/contact', limiter);

// Configuration SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465, // true pour 465, false pour autres ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Fonction de validation
const validateContactData = (data) => {
  const { nom, email, message } = data;
  const errors = [];

  if (!nom || nom.trim().length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Adresse email invalide');
  }

  if (!message || message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères');
  }

  return errors;
};

// Route principale pour envoyer le message
app.post('/api/contact', async (req, res) => {
  try {
  // Accepte 'name' ou 'nom' pour compatibilité avec le frontend
  const nom = req.body.nom || req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Validation des données
  const errors = validateContactData({ nom, email, message });
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        errors: errors
      });
    }

    // Création du transporteur SMTP
    const transporter = createTransporter();

    // Vérification de la connexion SMTP
    await transporter.verify();

    // Configuration de l'email à envoyer à l'entreprise
    const mailOptionsToCompany = {
      from: `"${nom}" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL,
      replyTo: email,
      subject: `Nouveau contact depuis votre site web`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nouveau message depuis votre site web
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Informations du contact</h3>
            <p><strong>Nom:</strong> ${nom}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #007bff;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888;">
            <p>Ce message a été envoyé depuis votre formulaire de contact le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}</p>
          </div>
        </div>
      `
    };

    // Email de confirmation automatique (optionnel)
    const mailOptionsToUser = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Confirmation de réception de votre message`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007bff;">Merci pour votre message !</h2>
          
          <p>Bonjour ${nom},</p>
          
          <p>Nous avons bien reçu votre demande.</p>
          
          <p>Notre équipe va examiner votre demande et vous répondra dans les plus brefs délais.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h4>Récapitulatif de votre demande:</h4>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>Cordialement,<br>
          L'équipe ${process.env.COMPANY_NAME}</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="font-size: 12px; color: #888;">
            Si vous n'avez pas envoyé cette demande, vous pouvez ignorer cet email.
          </p>
        </div>
      `
    };

    // Envoi de l'email à l'entreprise
    await transporter.sendMail(mailOptionsToCompany);
    
    // Envoi de l'email de confirmation à l'utilisateur (optionnel)
    if (process.env.SEND_CONFIRMATION === 'true') {
      await transporter.sendMail(mailOptionsToUser);
    }

    console.log(`Nouveau message reçu de ${nom} (${email})`);

    res.json({
      success: true,
      message: 'Votre message a été envoyé avec succès. Nous vous répondrons rapidement.'
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    res.status(500).json({
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.'
    });
  }
});

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Serveur de contact opérationnel',
    timestamp: new Date().toISOString()
  });
});

// Gestion des erreurs 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route non trouvée'
  });
});

// Démarrage du serveur
// app.listen(PORT, () => {
//   console.log(`🚀 Serveur démarré sur le port ${PORT}`);
//   console.log(`📧 Service de contact disponible sur /api/contact`);
// });

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};

