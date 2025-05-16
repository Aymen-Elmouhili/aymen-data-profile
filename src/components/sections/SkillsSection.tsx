
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import SectionTitle from '@/components/SectionTitle';
import { Code, Star, Globe } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level?: number;
  }[];
}

interface SoftSkill {
  name: string;
  description: string;
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Langages de Programmation",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "R", level: 75 },
        { name: "C/C++", level: 70 },
        { name: "Java", level: 65 },
        { name: "HTML/CSS", level: 60 },
        { name: "Matlab", level: 80 },
        { name: "Scheme", level: 50 },
      ]
    },
    {
      title: "Data Science & ML",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Matplotlib/Seaborn", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Tkinter", level: 70 },
      ]
    },
    {
      title: "Outils & Technologies",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Git/GitLab", level: 85 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "VS Code", level: 80 },
      ]
    },
    {
      title: "Langues",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "Français", level: 100 },
        { name: "Anglais", level: 90 },
        { name: "Arabe (natif)", level: 100 },
      ]
    }
  ];

  const softSkills: SoftSkill[] = [
    { 
      name: "Résolution de problèmes", 
      description: "Capacité à analyser des problèmes complexes et à concevoir des solutions efficaces."
    },
    { 
      name: "Communication", 
      description: "Aptitude à communiquer clairement des concepts techniques à des publics variés."
    },
    { 
      name: "Travail d'équipe", 
      description: "Collaboration efficace en environnement pluridisciplinaire."
    },
    { 
      name: "Adaptabilité", 
      description: "Flexibilité face aux changements et apprentissage rapide de nouvelles technologies."
    },
    { 
      name: "Gestion de projet", 
      description: "Organisation efficace des tâches et respect des délais."
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-portfolio-light">
      <div className="container mx-auto">
        <SectionTitle 
          title="Compétences" 
          subtitle="Mes compétences techniques et personnelles"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary flex items-center">
              <Code className="mr-2 h-6 w-6" />
              Compétences Techniques
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, catIndex) => (
                <Card key={catIndex}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {category.icon}
                      <h4 className="text-lg font-semibold ml-2 text-portfolio-primary">{category.title}</h4>
                    </div>
                    <div className="space-y-3">
                      {category.skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                            {skill.level && <span className="text-xs text-gray-500">{skill.level}%</span>}
                          </div>
                          {skill.level && <Progress value={skill.level} className="h-2" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary flex items-center">
              <Star className="mr-2 h-6 w-6" />
              Soft Skills
            </h3>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-portfolio-primary mb-1">{skill.name}</h4>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Tags/badges for technical skills summary */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg text-portfolio-primary mb-4">Compétences clés</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Data Science", "Machine Learning", "Modélisation", "SQL", "NumPy", "Pandas", "TensorFlow", "Git"].map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-white hover:bg-portfolio-light">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
