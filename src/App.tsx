import { useState } from 'react';
import { Home, Users, Mail, Upload, ArrowRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { Members } from './components/Members';
import { Contact } from './components/Contact';
import { Quotes } from './components/Quotes';
import { UploadSection } from './components/UploadSection';
import { Testimonials } from './components/Testimonials';
import { EventGallery } from './components/EventGallery';

import logo from 'figma:asset/514f601a29fa9411251be7a713ebd5ec648fcf5b.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Youth Council Logo" className="h-16 w-auto" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === 'home' ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                <Home size={20} />
                <span>Accueil</span>
              </button>
              <button
                onClick={() => scrollToSection('members')}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === 'members' ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                <Users size={20} />
                <span>Membres</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === 'contact' ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                <Mail size={20} />
                <span>Contact</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-pink-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <Hero />
      </section>

      {/* About Section */}
      <About />

      {/* Activities Section */}
      <Activities />

      {/* Upload Section */}
      <UploadSection />

      {/* Members Section */}
      <section id="members">
        <Members />
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      <Quotes />

      {/* Event Gallery Section */}
      <EventGallery />

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-pink-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-gray-300">© 2025 Youth Council. Tous droits réservés.</p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://facebook.com/youthcouncil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/youthcouncil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com/youthcouncil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sky-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://youtube.com/youthcouncil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
