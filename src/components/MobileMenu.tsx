
import React from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeSection, setActiveSection }) => {
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
      onClose();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[250px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle className="text-portfolio-primary">Menu</SheetTitle>
        </SheetHeader>
        <div className="py-4 flex flex-col gap-1">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "ghost"}
              onClick={() => scrollToSection(section.id)}
              className={`justify-start ${
                activeSection === section.id 
                  ? 'bg-portfolio-primary text-white' 
                  : 'text-gray-600 hover:text-portfolio-primary hover:bg-portfolio-light'
              }`}
            >
              {section.label}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
