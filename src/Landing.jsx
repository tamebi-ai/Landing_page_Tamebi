import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { 
  ChevronDown, 
  Brain, 
  Users, 
  Lightbulb, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Star,
  Code,
  BookOpen,
  Zap
} from "lucide-react";

import Navigation from "./components/Navigation.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import WhyTamebiSection from "./components/WhyTamebiSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import ApproachSection from "./components/ApproachSection.jsx";
import BenefitsSection from "./components/BenefitsSection.jsx";

export default function Landing() {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'why-tamebi', 'approach', 'benefits', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation currentSection={currentSection} />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyTamebiSection />
        <ApproachSection />
        <BenefitsSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}