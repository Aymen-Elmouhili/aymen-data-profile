
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Aymen El Mouhili</h2>
            <p className="text-gray-300 mb-4">Ingénieur en Science des Données & Modélisation</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Aymen-Elmouhili" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-portfolio-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/aymen-elmouhili" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-portfolio-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:aymenelmouhili@gmail.com" 
                className="text-gray-300 hover:text-portfolio-accent transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2" />
                <span>0751475168</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2" />
                <span>aymenelmouhili@gmail.com</span>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span>133 Boulevard LaFayette, 63000 Clermont-Ferrand</span>
              </li>
            </ul>
          </div>
          
          <div className="text-right md:col-span-2 lg:col-span-1">
            <p className="text-gray-300">
              &copy; {currentYear} Tous droits réservés.
            </p>
            <p className="text-gray-400 mt-2">
              Portfolio créé avec React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
