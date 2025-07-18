
import React from 'react';
import { Project } from '../types';
import { ArrowRightIcon, CodeBracketSquareIcon } from './icons'; // Import default icon

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
  onProjectSelect: (projectId: string) => void; // For navigating to detail page
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className, style, onProjectSelect }) => {
  // const IconComponent = project.iconComponent; // No longer needed directly for the main visual if cardImageUrl or default is used

  const handleCardClick = () => {
    onProjectSelect(project.id);
  };
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onProjectSelect(project.id);
    }
  };


  return (
    <button
      onClick={handleCardClick}
      onKeyPress={handleKeyPress}
      className={`block group text-left w-full ${className || ''}`}
      aria-label={`View details for ${project.name}`}
      style={style}
    >
      <div className="p-5 bg-card dark:bg-dark-card hover:bg-card-hover dark:hover:bg-dark-card-hover rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-border dark:border-dark-border h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {project.cardImageUrl ? (
                <img 
                  src={project.cardImageUrl} 
                  alt={`${project.name} preview`} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-card dark:border-dark-card" // Added a subtle border
                />
              ) : (
                <div className={`w-14 h-14 flex items-center justify-center rounded-full ${project.iconBgColor || 'bg-button-secondary-bg dark:bg-dark-button-secondary-bg'}`}>
                  <CodeBracketSquareIcon className="w-7 h-7 text-text-primary dark:text-dark-text-primary" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">{project.name}</h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">{project.description}</p>
              </div>
            </div>
            <ArrowRightIcon className="w-5 h-5 text-text-secondary dark:text-dark-text-secondary group-hover:text-text-primary dark:group-hover:text-dark-text-primary transition-colors flex-shrink-0" />
          </div>
          {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-2 py-0.5 text-xs bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-secondary dark:text-dark-text-secondary rounded-full">{tech}</span>
            ))}
          </div>
          )}
        </div>
      </div>
    </button>
  );
};
