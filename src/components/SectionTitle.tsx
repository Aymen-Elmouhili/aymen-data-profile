
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
    <div className={`mb-10 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl font-bold text-portfolio-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      )}
      <div 
        className={`mt-2 h-1 w-20 bg-portfolio-accent rounded ${
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        }`} 
      />
    </div>
  );
};

export default SectionTitle;
