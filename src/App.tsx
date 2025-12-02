import { useState } from 'react';
import { Home, Users, Mail, Upload, ArrowRight, Moon, Sun } from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { Members } from './components/Members';
import { Contact } from './components/Contact';
import { UploadSection } from './components/UploadSection';
import { Testimonials } from './components/Testimonials';
import { EventGallery } from './components/EventGallery';
import logo from 'figma:asset/514f601a29fa9411251be7a713ebd5ec648fcf5b.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50 transition-colors">
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
                  activeSection === 'home' ? 'text-pink-600' : 'text-gray-700 dark:text-gray-300 hover:text-pink-600'
                }`}
              >
                <Home size={20} />
                <span>Accueil</span>
              </button>
              <button
                onClick={() => scrollToSection('members')}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === 'members' ? 'text-pink-600' : 'text-gray-700 dark:text-gray-300 hover:text-pink-600'
                }`}
              >
                <Users size={20} />
                <span>Membres</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === 'contact' ? 'text-pink-600' : 'text-gray-700 dark:text-gray-300 hover:text-pink-600'
                }`}
              >
                <Mail size={20} />
                <span>Contact</span>
              </button>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </button>
              <button className="text-gray-700 dark:text-gray-300 hover:text-pink-600">
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

      {/* Event Gallery Section */}
      <EventGallery />

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-pink-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src={logo} alt="Youth Council" className="h-12 mx-auto mb-4 opacity-80" />
          <p className="text-gray-300">© 2025 Youth Council. Tous droits réservés.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}