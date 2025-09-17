import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket, Check, Copy, Shield, Gauge, Zap, CheckCircle } from "lucide-react";

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
      title: "1. Compréhension & Analyse",
      description: "Nous analysons vos besoins en profondeur pour explorer les solutions les plus adaptées à votre contexte et à vos objectifs."
    },
    {
      icon: PenTool,
      title: "2. Conception & Validation",
      description: "Nous concevons des solutions sur mesure et les testons rigoureusement pour garantir leur fiabilité et leur performance.",
      extraContent: null
    },
    {
      icon: Rocket,
      title: "3. Lancement & Maintenance",
      description: "Votre solution est mise en service sans accroc, puis nous veillons à sa performance optimale et à son évolution sur le long terme."
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
            L'IA pour un changement 
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent ml-4">durable</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une approche collaborative et efficace, centrée sur les réalités africaines.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400/20 transform -translate-x-1/2 hidden md:block"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="md:flex items-center mb-16 md:mb-24"
            >
              <div className={`md:w-1/2 ${index === 1 ? 'md:order-2' : ''} flex justify-center items-center`}>
                <div className="max-w-md mx-auto text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
              <div className={`md:w-1/2 p-4 md:p-8 ${index === 1 ? 'md:order-1' : ''} flex justify-center items-center`}>
                {step.extraContent ? step.extraContent : <div className="hidden md:block"></div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}