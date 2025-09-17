import React from "react";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
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
      icon: Brain,
      title: "Projets IA Sur Mesure",
      description: "Développement de solutions d'intelligence artificielle adaptées à vos besoins spécifiques. De l'automatisation des tâches aux systèmes de recommandation intelligents.",
      features: ["Analyse des besoins", "Développement sur mesure", "Déploiement", "Maintenance"],
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: BookOpen,
      title: "Formations IA",
      description: "Programmes de formation complets pour maîtriser les outils et concepts de l'IA, adaptés à tous les niveaux, du débutant à l'expert.",
      features: ["Formation personnalisée", "Ateliers pratiques", "Certification", "Suivi individuel"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Users,
      title: "Consulting IA",
      description: "Accompagnement stratégique pour intégrer l'IA dans votre organisation. Audit, stratégie et roadmap de transformation digitale.",
      features: ["Audit IA", "Stratégie digitale", "Change management", "ROI optimization"],
      color: "from-purple-400 to-purple-600"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 border border-black/10 rounded-full mb-6">
            <Settings className="w-4 h-4 text-black" />
            <span className="text-black text-sm font-medium">Nos Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Solutions IA
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent ml-4">
              Complètes
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De la conception à la mise en œuvre, nous vous accompagnons dans tous vos projets d'intelligence artificielle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-black text-white hover:bg-gray-800 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 rounded-xl"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
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
          <div className="bg-gradient-to-r from-black via-gray-800 to-black rounded-3xl p-12">
            <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Prêt à Révolutionner votre Business ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Discutons de vos défis et découvrons ensemble comment l'IA peut transformer votre entreprise
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-8 py-4 rounded-full"
            >
              Commencer mon Projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}