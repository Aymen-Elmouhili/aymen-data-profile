
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { BookOpen, CalendarIcon } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string[];
}

const EducationSection: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Ingénieur en Informatique et Modélisation",
      institution: "ISIMA - Université Clermont Auvergne",
      period: "2022 – 2025",
      location: "Aubière, France",
      details: [
        "Modélisation mathématique",
        "Science des données",
        "Machine Learning",
        "Calcul parallèle",
        "Développement informatique",
        "Business Intelligence"
      ]
    },
    {
      degree: "Classes Préparatoires MPSI/MP",
      institution: "Lycée (CPGE)",
      period: "2020 – 2022",
      location: "Maroc",
    },
    {
      degree: "Baccalauréat Scientifique",
      institution: "Option Mathématiques B",
      period: "2020",
      location: "Maroc",
    }
  ];

  const certifications = [
    {
      title: "Machine Learning",
      issuer: "Coursera",
      details: "Formation de Andrew Ng : régression, SVM, réseaux de neurones, évaluation de modèles."
    },
    {
      title: "Data Analysis with Python",
      issuer: "FreeCodeCamp",
      details: "Analyse de données avec Pandas, NumPy, Matplotlib."
    },
    {
      title: "Scientific Computing with Python",
      issuer: "FreeCodeCamp",
      details: "Calcul scientifique et structures de données Python."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-portfolio-light">
      <div className="container mx-auto">
        <SectionTitle 
          title="Formation" 
          subtitle="Mon parcours académique et mes certifications"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary flex items-center">
              <BookOpen className="mr-2 h-6 w-6" />
              Parcours académique
            </h3>
            
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-portfolio-primary">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-portfolio-primary">{item.degree}</h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {item.period}
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium">{item.institution}</p>
                    <p className="text-gray-500 mb-3">{item.location}</p>
                    
                    {item.details && item.details.length > 0 && (
                      <ul className="list-disc list-inside text-gray-700 ml-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="text-sm">{detail}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary flex items-center">
              <BookOpen className="mr-2 h-6 w-6" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-portfolio-accent">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-lg text-portfolio-primary">{cert.title}</h4>
                    <p className="text-sm font-medium text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-700 mt-2">{cert.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
