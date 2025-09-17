import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Calendar, 
  MapPin, 
  Lightbulb,
  Award,
  Code,
  Brain
} from "lucide-react";

export default function AboutSection() {
  const teamValues = [
    {
      icon: Brain,
      title: "Innovation",
      description: "Toujours à la pointe des dernières avancées IA"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail d'équipe pour des résultats exceptionnels"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Qualité et performance dans chaque projet"
    }
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            L'Équipe
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent ml-4">
              Tamebi
            </span>
          </h2>
          
          
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Notre Mission</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Chez Tamebi, nous croyons que l'intelligence artificielle doit être accessible à tous. 
              Notre mission est de démocratiser l'IA en créant des solutions pratiques, 
              éthiques et innovantes qui simplifient la vie et boostent la productivité.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Avotrou, Cotonou, Bénin</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Spécialiste en IA & Machine Learning</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl p-8 backdrop-blur-sm border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-white mb-6">Notre Vision</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Devenir le partenaire de référence pour l'intégration de l'IA dans tous les secteurs, 
                en proposant des solutions sur mesure qui transforment réellement les entreprises et améliorent le quotidien.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-yellow-400 mb-1">100+</div>
                  <div className="text-sm text-gray-400">Heures de Formation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-yellow-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Support Client</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Nos Valeurs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}