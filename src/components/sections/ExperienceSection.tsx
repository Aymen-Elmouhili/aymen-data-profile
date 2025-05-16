
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  details: string[];
  technologies?: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Stage de fin d'études en Science des Données",
      company: "Atos (mission chez Michelin)",
      period: "Avril 2025 – Septembre 2025",
      location: "Clermont-Ferrand, France",
      details: [
        "Mise en place d'un algorithme d'optimisation ou d'intelligence artificielle (IA) en Python pour exploiter des mesures issues de machines industrielles.",
        "Développement de méthodes de data fitting pour modéliser les données collectées."
      ],
      technologies: ["Python", "NumPy", "SciPy", "Pandas", "Scikit-learn", "Optimisation", "Machine Learning", "GitLab"]
    },
    {
      title: "Stage en Science des Données",
      company: "EDF",
      period: "Avril 2024 – Août 2024",
      location: "Paris, France",
      details: [
        "Étude du microclimat et modélisation pour l'agrivoltaïsme.",
        "Analyse de données microclimatiques pour évaluer l'impact des panneaux solaires sur la croissance des cultures.",
        "Développement d'une interface graphique."
      ],
      technologies: ["Python", "Pandas", "Numpy", "Seaborn", "Scikit-learn", "TensorFlow", "Tkinter", "GitLab"]
    },
    {
      title: "Responsable communication",
      company: "Club IM@GE, ISIMA",
      period: "Mars 2023 – Mars 2024",
      location: "Clermont-Ferrand",
      details: [
        "Gestion du compte LinkedIn, interface entre client et développeurs.",
        "Communication fluide et coordination de projets étudiants."
      ]
    },
    {
      title: "Stage en Recherche Opérationnelle",
      company: "OTH Regensburg",
      period: "Juin 2022 – Sept. 2022",
      location: "Allemagne",
      details: [
        "Optimisation linéaire et non linéaire.",
        "Projet de machine learning pour l'analyse de données en Python."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <SectionTitle 
          title="Expérience Professionnelle" 
          subtitle="Mon parcours professionnel et mes réalisations"
        />
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-portfolio-secondary">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-primary">{exp.title}</h3>
                    <p className="text-lg font-medium text-gray-700">{exp.company}</p>
                  </div>
                  
                  <div className="mt-2 md:mt-0 md:text-right">
                    <div className="flex items-center md:justify-end text-gray-500 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center md:justify-end text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                
                {exp.technologies && (
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Technologies :</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-portfolio-light text-portfolio-primary px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
