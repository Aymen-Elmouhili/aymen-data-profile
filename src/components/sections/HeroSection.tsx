
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface HeroSectionProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveSection }) => {
  const scrollToAbout = () => {
    setActiveSection('about');
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white to-portfolio-light"
    >
      <div className="animate-stagger flex flex-col items-center">
        <Avatar className="w-40 h-40 mb-6 border-4 border-portfolio-primary shadow-xl">
          <AvatarImage src="/lovable-uploads/05faebb1-13d6-46fd-b84d-dff8a13065bf.png" alt="Aymen El Mouhili" />
          <AvatarFallback className="text-2xl bg-portfolio-light text-portfolio-primary">AEM</AvatarFallback>
        </Avatar>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-primary">
          Aymen El Mouhili
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8">
          Ingénieur en Science des Données & Modélisation
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-600">
          Spécialiste en analyse de données, modélisation mathématique et intelligence artificielle. 
          J'utilise Python et ses bibliothèques pour transformer les données en solutions concrètes.
        </p>
        <Button 
          onClick={scrollToAbout}
          size="lg" 
          className="bg-portfolio-primary hover:bg-portfolio-secondary text-white"
        >
          En savoir plus <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
