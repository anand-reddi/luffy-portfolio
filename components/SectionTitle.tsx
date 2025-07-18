import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, viewAllLink, viewAllText = "View All", className = "" }) => {
  return (
    <div className={`animated-item anim-fadeInUp mb-8 md:mb-12 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary tracking-tight flex items-center">
           <span className="inline-block w-1.5 h-1.5 bg-text-secondary dark:bg-dark-text-secondary rounded-full mr-2.5 align-middle"></span>
          {title}
        </h2>
        {viewAllLink && (
          <a href={viewAllLink} className="text-sm font-medium text-accent-green hover:text-accent-green/80 transition-colors">
            {viewAllText} &rarr;
          </a>
        )}
      </div>
      {subtitle && <p className="mt-2 text-md text-text-secondary dark:text-dark-text-secondary">{subtitle}</p>}
    </div>
  );
};