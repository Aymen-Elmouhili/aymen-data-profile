
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionTitle from '@/components/SectionTitle';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-portfolio-light">
      <div className="container mx-auto">
        <SectionTitle 
          title="Contact" 
          subtitle="Entrez en contact avec moi pour discuter de vos projets"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary">Me contacter</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <Input type="text" id="name" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input type="email" id="email" placeholder="Votre email" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <Input type="text" id="subject" placeholder="Sujet de votre message" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Votre message" rows={5} />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-primary hover:bg-portfolio-secondary"
                >
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary">Coordonnées</h3>
                
                <ul className="space-y-4">
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
                    <Linkedin className="mr-3 h-5 w-5 text-portfolio-secondary" />
                    <a href="https://www.linkedin.com/in/aymen-elmouhili/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-primary">
                      in/aymen-elmouhili
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Github className="mr-3 h-5 w-5 text-portfolio-secondary" />
                    <a href="https://github.com/Aymen-Elmouhili" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-primary">
                      Aymen-Elmouhili
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">Disponibilité</h3>
                <p className="text-gray-700 mb-2">
                  Je suis actuellement ouvert à de nouvelles opportunités dans le domaine de la science des données 
                  et la modélisation mathématique.
                </p>
                <p className="text-gray-700">
                  N'hésitez pas à me contacter pour discuter de vos projets ou opportunités professionnelles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
