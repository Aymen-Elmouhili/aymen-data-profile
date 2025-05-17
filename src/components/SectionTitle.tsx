
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div 
        className={`mt-4 h-1.5 w-24 bg-portfolio-accent rounded ${
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        }`} 
      />
    </div>
  );
};

export default SectionTitle;
