
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white mb-2">Aymen El Mouhili</h2>
            <p className="text-gray-300">Ingénieur en Science des Données & Modélisation</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300">
              &copy; {currentYear} Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
