import React from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  Clock, 
  Shield, 
  Users, 
  Trophy, 
  Rocket,
  Heart,
  Target
} from "lucide-react";

export default function WhyTamebiSection() {
  const advantages = [
    {
      icon: Star,
      title: "Excellence Technique",
      description: "Une équipe d'experts passionnés utilisant les dernières technologies IA pour des résultats exceptionnels."
    },
    {
      icon: Clock,
      title: "Rapidité d'Exécution",
      description: "Des délais de livraison optimisés grâce à nos méthodologies agiles et notre expertise technique."
    },
    {
      icon: Shield,
      title: "Sécurité & Confidentialité",
      description: "Protection maximale de vos données avec des protocoles de sécurité de niveau entreprise."
    },
    {
      icon: Heart,
      title: "Approche Personnalisée",
      description: "Chaque solution est conçue sur mesure pour répondre parfaitement à vos besoins spécifiques."
    }
  ];

  const stats = [
    { number: "50+", label: "Projets Réalisés", icon: Rocket },
    { number: "100%", label: "Clients Satisfaits", icon: Trophy },
    { number: "24/7", label: "Support Disponible", icon: Users },
    { number: "30j", label: "Garantie Résultats", icon: Target }
  ];

  return (
    <section id="why-tamebi" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-600 text-sm font-medium">Pourquoi Tamebi</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            L'Excellence 
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent ml-4">
              IA
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez ce qui fait de Tamebi votre partenaire idéal pour tous vos projets d'intelligence artificielle
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-black text-black mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-300">
                  <advantage.icon className="w-8 h-8 text-yellow-400 group-hover:text-black transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-3xl p-12 text-black">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Rejoignez la Révolution IA
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Faites partie des entreprises qui transforment leur avenir avec l'intelligence artificielle
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
            >
              Démarrer Maintenant →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}