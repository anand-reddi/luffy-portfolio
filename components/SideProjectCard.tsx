
import React from 'react';
import { SideProject } from '../types';
import { ArrowTopRightOnSquareIcon, PuzzlePieceIcon } from './icons'; // Import default icon

interface SideProjectCardProps {
  sideProject: SideProject;
  className?: string;
  style?: React.CSSProperties;
}

export const SideProjectCard: React.FC<SideProjectCardProps> = ({ sideProject, className, style }) => {
  // const IconComponent = sideProject.iconComponent; // No longer needed directly for the main visual

  return (
    <div 
      className={`p-5 bg-card dark:bg-dark-card hover:bg-card-hover dark:hover:bg-dark-card-hover rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-border dark:border-dark-border ${className || ''}`}
      style={style}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          {sideProject.cardImageUrl ? (
            <img 
              src={sideProject.cardImageUrl} 
              alt={`${sideProject.name} preview`}
              className="w-10 h-10 rounded-full object-cover border-2 border-card dark:border-dark-card" // Added a subtle border
            />
          ) : (
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${sideProject.iconBgColor || 'bg-button-secondary-bg dark:bg-dark-button-secondary-bg'}`}>
              <PuzzlePieceIcon className="w-5 h-5 text-text-primary dark:text-dark-text-primary" />
            </div>
          )}
          <h3 className="text-md font-semibold text-text-primary dark:text-dark-text-primary">{sideProject.name}</h3>
        </div>
        <a 
          href={sideProject.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-medium text-text-secondary dark:text-dark-text-secondary bg-button-secondary-bg dark:bg-dark-button-secondary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover hover:text-button-primary-text dark:hover:text-dark-button-primary-text px-2.5 py-1 rounded-lg transition-colors"
          aria-label={`View ${sideProject.name} (${sideProject.linkText})`}
        >
          {sideProject.linkText}
          <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1.5" />
        </a>
      </div>
       {/* Description can be added here if desired, currently it's not in the design for SideProjectCard but is in the type */}
       {sideProject.description && (
        <p className="mt-3 text-sm text-text-secondary dark:text-dark-text-secondary">
          {sideProject.description}
        </p>
      )}
    </div>
  );
};
