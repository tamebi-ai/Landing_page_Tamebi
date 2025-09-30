import React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  BookOpen, 
  Users, 
  Code, 
  Lightbulb, 
  ArrowRight,
  Zap,
  Target,
  Settings
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: "Stratégie et Conseil IA",
      description: "Nous identifions les opportunités d'intégration de l'IA pour optimiser vos processus et vous permettre de proposer des services plus intelligents.",
      features: ["Identification des opportunités", "Optimisation des processus", "Services intelligents"],
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Brain,
      title: "IA générative et agents autonomes",
      description: "Au-delà des simples chatbots, nous intégrons des IA génératives dans vos flux de travail pour automatiser des tâches complexes. Nous créons des agents IA capables de communiquer avec différents systèmes pour exécuter des missions de manière autonome.",
      features: ["Intégration IA générative", "Automatisation des tâches", "Agents autonomes"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Code,
      title: "Développement de produits IA",
      description: "De l'idée au lancement, nous concevons et développons des produits basés sur l'IA qui répondent à un besoin réel du marché.",
      features: ["Conception d'idées", "Développement IA", "Lancement produit"],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: BookOpen,
      title: "Formation IA sur mesure",
      description: "Renforcez les compétences de vos équipes grâce à des formations pratiques et ciblées sur les dernières innovations en IA.",
      features: ["Formations pratiques", "Compétences renforcées", "Innovations IA"],
      color: "from-green-400 to-green-600"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Vos défis,
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent ml-4">
              nos solutions IA
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De la conception à la mise en œuvre, nous vous accompagnons dans tous vos projets d'intelligence artificielle
          </p>
        </motion.div>

        {/* Grid responsive : 1 colonne sur mobile, 2 sur tablette, 2 sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -15, transition: { duration: 0.4, ease: "easeOut" } }}
              className="group w-full"
              style={{ minWidth: 0 }}
            >
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black break-words whitespace-normal overflow-wrap break-word">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base break-words whitespace-normal overflow-wrap break-word">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-600 break-words whitespace-normal overflow-wrap break-word">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-black text-white hover:bg-gray-800 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 rounded-xl px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg mt-auto"
                >
                  En savoir plus
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-black via-gray-800 to-black rounded-3xl p-8 lg:p-12">
            <Zap className="w-12 h-12 lg:w-16 lg:h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Prêt à Révolutionner votre Business ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm lg:text-base">
              Discutons de vos défis et découvrons ensemble comment l'IA peut transformer <span className="text-yellow-400 font-bold">votre entreprise</span>
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg"
            >
              Commencer mon Projet
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}