import React, { useState } from "react";
import { motion } from "framer-motion";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@tamebi.com",
      description: "Écrivez-nous directement"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+ 229 (01)  44 912 950",
      description: "Appelez-nous du lundi au vendredi"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "9h - 18h",
      description: "Du lundi au vendredi"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Prêt à 
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent ml-4">
              Commencer
            </span>
            ?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discutons de votre projet et découvrons ensemble comment l'IA peut transformer votre entreprise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-black mb-8">Entrons en Contact</h3>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">{info.title}</h4>
                    <p className="text-xl text-black font-medium mb-1">{info.content}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-black rounded-3xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Pourquoi nous choisir ?</h4>
              <div className="space-y-3">
                {[
                  "Réponse sous 24h garantie",
                  "Consultation gratuite de 30 minutes",
                  "Devis personnalisé et transparent",
                  "Accompagnement dédié"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-green-50 border border-green-200 rounded-3xl flex items-center justify-center z-10"
              >
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-green-700 mb-2">Message Envoyé !</h4>
                  <p className="text-green-600">Nous vous recontacterons sous 24h</p>
                </div>
              </motion.div>
            )}

            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Nom *</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="rounded-xl border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="rounded-xl border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="rounded-xl border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 resize-none"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-300 hover:to-yellow-500 font-semibold py-4 rounded-xl text-lg transition-all duration-300 flex items-center justify-center"
                >
                  Envoyer le Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}