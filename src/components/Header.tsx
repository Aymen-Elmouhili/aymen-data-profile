
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, toggleMobileMenu }) => {
  const sections = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'education', label: 'Formation' },
    { id: 'experience', label: 'Expérience' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50 py-4">
      <div className="container flex justify-between items-center">
        <h1 className="text-xl font-bold text-portfolio-primary">Aymen El Mouhili</h1>
        
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMobileMenu}>
          <Menu className="h-6 w-6" />
        </Button>
        
        <nav className="hidden lg:flex items-center space-x-1">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "ghost"}
              onClick={() => scrollToSection(section.id)}
              className={`text-sm ${
                activeSection === section.id 
                  ? 'bg-portfolio-primary text-white' 
                  : 'text-gray-600 hover:text-portfolio-primary hover:bg-portfolio-light'
              }`}
            >
              {section.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
