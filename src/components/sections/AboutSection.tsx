
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { User, Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <SectionTitle 
          title="À Propos" 
          subtitle="Découvrez qui je suis et ce que je fais"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-portfolio-primary">Profil</h3>
                <p className="text-gray-700 mb-4">
                  Je suis un ingénieur en science des données et modélisation, passionné par l'extraction de connaissances à partir des données et la création de modèles prédictifs 
                  qui résolvent des problèmes concrets.
                </p>
                <p className="text-gray-700 mb-4">
                  Mon parcours académique en classes préparatoires mathématiques et mon diplôme d'ingénieur de l'ISIMA m'ont permis de développer 
                  de solides compétences en modélisation mathématique, science des données, machine learning et développement informatique.
                </p>
                <p className="text-gray-700">
                  Grâce à plusieurs expériences professionnelles, notamment chez Atos (mission Michelin) et EDF, 
                  j'ai pu mettre en pratique ces compétences sur des projets industriels concrets, allant de l'optimisation à l'analyse 
                  de données microclimatiques.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-portfolio-primary">Coordonnées</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <User className="mr-3 h-5 w-5 text-portfolio-secondary" />
                    <span className="text-gray-700">Aymen El Mouhili</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-portfolio-secondary" />
                    <a href="mailto:aymenelmouhili@gmail.com" className="text-gray-700 hover:text-portfolio-primary">
                      aymenelmouhili@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-portfolio-secondary" />
                    <span className="text-gray-700">0751475168</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-portfolio-secondary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">133 Boulevard LaFayette, 63000 Clermont-Ferrand, France</span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="mr-3 h-5 w-5 text-portfolio-secondary" />
                    <a href="https://github.com/Aymen-Elmouhili" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-primary">
                      Aymen-Elmouhili
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Linkedin className="mr-3 h-5 w-5 text-portfolio-secondary" />
                    <a href="https://www.linkedin.com/in/aymen-elmouhili/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-primary">
                      in/aymen-elmouhili
                    </a>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-portfolio-primary">Centres d'intérêt</h3>
                <div className="flex flex-wrap gap-2">
                  {["Football", "Basketball", "Natation", "Jeux de société", "Monde associatif"].map((interest) => (
                    <span 
                      key={interest} 
                      className="bg-portfolio-light text-portfolio-primary px-3 py-1 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
