
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/SectionTitle';
import { Projector, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  year: string;
  type: 'academic' | 'personal' | 'professional';
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Prédiction de maladies cardiaques",
      description: "Modèle Machine Learning pour prédire les risques à partir de données médicales.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Data Analysis"],
      year: "2023",
      type: "academic",
      githubUrl: "https://github.com/AymenElMouhili/heart-disease-prediction"
    },
    {
      title: "Clustering & Classification de la Qualité de l'air au travail",
      description: "Analyse de données environnementales avec K-Means, DBSCAN et clustering hiérarchique.",
      technologies: ["Python", "Scikit-learn", "K-Means", "DBSCAN", "Hierarchical Clustering"],
      year: "2023",
      type: "academic",
      githubUrl: "https://github.com/AymenElMouhili/air-quality-clustering"
    },
    {
      title: "Web App analyse géo",
      description: "Application web pour visualiser température, humidité, vent.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      year: "2024",
      type: "academic",
      githubUrl: "https://github.com/AymenElMouhili/geo-analysis-webapp",
      demoUrl: "https://geo-analysis-demo.netlify.app"
    },
    {
      title: "Matrices et graphes",
      description: "Projet académique de gestion d'opérations sur matrices et graphes.",
      technologies: ["C++", "Algorithmes de graphes", "Structures de données"],
      year: "2024",
      type: "academic",
      githubUrl: "https://github.com/AymenElMouhili/matrix-graph-operations"
    },
    {
      title: "Analyse de données démographiques et de santé",
      description: "Projet d'analyse de données démographiques et de santé avec visualisation avancée.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
      year: "2024",
      type: "personal",
      githubUrl: "https://github.com/AymenElMouhili/demographic-health-analysis"
    }
  ];

  // Group projects by type
  const groupedProjects = {
    academic: projects.filter(p => p.type === 'academic'),
    personal: projects.filter(p => p.type === 'personal'),
    professional: projects.filter(p => p.type === 'professional')
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <SectionTitle 
          title="Projets" 
          subtitle="Une sélection de mes projets académiques et personnels"
        />
        
        <div className="space-y-12">
          {/* Academic Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary flex items-center">
              <Projector className="mr-2 h-6 w-6" />
              Projets Académiques
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedProjects.academic.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-portfolio-primary">{project.title}</h4>
                      <Badge variant="outline" className="bg-portfolio-light text-portfolio-primary">
                        {project.year}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 mt-3">
                      {project.githubUrl && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center gap-1 text-xs"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="h-3.5 w-3.5" /> Code source
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center gap-1 text-xs"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Démo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Personal Projects */}
          {groupedProjects.personal.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary flex items-center">
                <Projector className="mr-2 h-6 w-6" />
                Projets Personnels
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedProjects.personal.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-portfolio-primary">{project.title}</h4>
                        <Badge variant="outline" className="bg-portfolio-light text-portfolio-primary">
                          {project.year}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2 mt-3">
                        {project.githubUrl && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-1 text-xs"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="h-3.5 w-3.5" /> Code source
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button 
                            variant="outline"
                            size="sm" 
                            className="flex items-center gap-1 text-xs"
                            onClick={() => window.open(project.demoUrl, '_blank')}
                          >
                            <ExternalLink className="h-3.5 w-3.5" /> Démo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {/* Professional Projects */}
          {groupedProjects.professional.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary flex items-center">
                <Projector className="mr-2 h-6 w-6" />
                Projets Professionnels
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedProjects.professional.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-portfolio-primary">{project.title}</h4>
                        <Badge variant="outline" className="bg-portfolio-light text-portfolio-primary">
                          {project.year}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2 mt-3">
                        {project.githubUrl && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-1 text-xs"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="h-3.5 w-3.5" /> Code source
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-1 text-xs"
                            onClick={() => window.open(project.demoUrl, '_blank')}
                          >
                            <ExternalLink className="h-3.5 w-3.5" /> Démo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
