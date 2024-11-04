import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Menu, X, ChevronDown, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

// Lazy load components
const Portfolio = lazy(() => import('./components/Portfolio'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('hero');
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const socialLinks = [
    { Icon: Facebook, href: 'https://facebook.com/avtwebservices', label: 'Facebook' },
    { Icon: Instagram, href: 'https://instagram.com/avtwebservices', label: 'Instagram' },
    { Icon: Twitter, href: 'https://twitter.com/avtwebservices', label: 'Twitter' },
    { Icon: Linkedin, href: 'https://linkedin.com/company/avtwebservices', label: 'LinkedIn' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/images/logoentiernorect.png" 
                alt="AvtWebServices Logo" 
                className="h-8 w-auto"
                loading="eager"
                fetchpriority="high"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
                Témoignages
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary px-6 py-2 rounded-full"
              >
                Contact
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
              >
                Témoignages
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full px-3 py-2 bg-primary text-white rounded-md"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-8 animate-fade-in">
            Créez votre présence en ligne
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Des sites web sur mesure qui captivent et convertissent
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-8 py-4 rounded-full text-lg"
            >
              Commencer un projet
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="btn-secondary px-8 py-4 rounded-full text-lg"
            >
              Voir nos réalisations
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>

      <Suspense fallback={<div className="h-screen flex items-center justify-center">Chargement...</div>}>
        <Portfolio />
      </Suspense>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary">Contactez-nous</h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Votre message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn-primary px-8 py-4 rounded-lg text-lg"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <img 
                src="/images/logoentiernorect.png" 
                alt="AvtWebServices Logo" 
                className="h-8 w-auto mb-4"
                loading="lazy"
              />
              <p className="text-gray-400">
                Créateur de sites web professionnels sur mesure
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">contact@avtwebservices.fr</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Légal</h3>
              <p className="text-gray-400">
                © 2024 AvtWebServices. Tous droits réservés.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;