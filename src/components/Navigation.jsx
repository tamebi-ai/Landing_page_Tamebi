import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from '../logo/tam.jpg';
import { Menu, X } from "lucide-react";

export default function Navigation({ currentSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
  { id: 'hero', label: 'Accueil' },
  { id: 'approach', label: 'Notre Approche' },
  { id: 'services', label: 'Nos services' },
  { id: 'about', label: 'À Propos' },
  
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); 
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-400/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="Tamebi Logo" className="h-16 w-24 rounded-lg bg-white p-1 border border-yellow-400 shadow" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 ${
                  currentSection === item.id 
                    ? 'text-yellow-400 border-b border-yellow-400 pb-1' 
                    : 'text-white hover:text-yellow-400'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-6 py-3 rounded-full"
            >
              Nous Contacter
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4 border-t border-yellow-400/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 text-sm font-medium transition-all duration-300 ${
                    currentSection === item.id 
                      ? 'text-yellow-400' 
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold w-full mt-4 py-3 rounded-full"
              >
                Nous Contacter
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}