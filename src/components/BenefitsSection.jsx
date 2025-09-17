import React from "react";
import { motion } from "framer-motion";
import { Coins, Trophy, Zap, TrendingUp } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Coins,
      title: "Optimisation des coûts",
      description: "Nous simplifions les méthodes de travail et renforçons l’efficacité locale grâce à des outils pensés pour les réalités africaines, tout en réduisant les coûts."
    },
    {
      icon: Trophy,
      title: "Meilleures performances",
      description: "En combinant données pertinentes et innovation, nous aidons les acteurs africains à mieux performer et à obtenir des résultats durables."
    },
    {
      icon: Zap,
      title: "Productivité accrue",
      description: "Des outils intelligents pour alléger le travail quotidien, mieux s’organiser et faire avancer plus vite les projets locaux."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Optimiser l'<span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Efficacité</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez les principaux avantages de collaborer avec nous pour transformer votre activité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg border border-yellow-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-black" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}