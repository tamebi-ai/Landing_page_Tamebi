import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Target, Code, Rocket, Check, Copy, Shield, Gauge, Zap, CheckCircle } from "lucide-react";

export default function ApproachSection() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `class Sampling(layers.Layer):
    """Uses (mean, log_var) to sample z, the vector encoding a digit."""
    
    def call(self, inputs):
        mean, log_var = inputs
        batch = tf.shape(mean)[0]
        dim = tf.shape(mean)[1]
        epsilon = tf.random.normal(shape=(batch, dim))
        return mean + tf.exp(0.5 * log_var) * epsilon`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      icon: Search,
      title: "1. Découverte",
      description: "Nous commençons par une consultation pour comprendre vos défis, vos processus actuels et vos objectifs."
    },
    {
      icon: Target,
      title: "2. Stratégie",
      description: "Nous élaborons une feuille de route IA sur mesure, en identifiant les cas d'usage les plus pertinents et en définissant l'architecture technique."
    },
    {
      icon: Code,
      title: "3. Développement",
      description: "Notre équipe d'experts développe les agents IA, les produits ou les intégrations nécessaires pour concrétiser la stratégie."
    },
    {
      icon: Rocket,
      title: "4. Déploiement & Formation",
      description: "Nous déployons la solution et formons vos équipes pour qu'elles puissent l'utiliser de manière autonome et en tirer le meilleur parti."
    }
  ];

  return (
    <section id="approach" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4">
            De l'idée à l'impact en 4 étapes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une approche collaborative et efficace, centrée sur les réalités africaines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-yellow-400/20 rounded-3xl p-4 sm:p-6 shadow-lg flex flex-col items-center text-center w-full"
              style={{ minWidth: 0 }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-base sm:text-lg md:text-2xl font-bold text-black mb-2 sm:mb-4 break-words whitespace-normal overflow-wrap break-word">{step.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed break-words whitespace-normal overflow-wrap break-word">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}