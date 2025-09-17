
// import './App.css';
import Navigation from './components/Navigation.jsx';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import WhyTamebiSection from './components/WhyTamebiSection.jsx';
import ApproachSection from './components/ApproachSection.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App bg-black text-white min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <WhyTamebiSection />
        <BenefitsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
