
import React from 'react';
import { SideProject } from '../types';
import { ArrowTopRightOnSquareIcon, PuzzlePieceIcon } from './icons';
import { PlayStoreMetrics } from './PlayStoreMetrics';
import { useNavigate } from 'react-router-dom';

interface SideProjectCardProps {
  sideProject: SideProject;
  className?: string;
  style?: React.CSSProperties;
}

export const SideProjectCard: React.FC<SideProjectCardProps> = ({ sideProject, className, style }) => {
  // const IconComponent = sideProject.iconComponent; // No longer needed directly for the main visual
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${sideProject.id}`);
  };

  return (
    <button
      type="button"
      onClick={handleCardClick}
      className={`block text-left w-full p-5 bg-card dark:bg-dark-card hover:bg-card-hover dark:hover:bg-dark-card-hover rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-border dark:border-dark-border ${className || ''}`}
      style={style}
      aria-label={`View details for ${sideProject.name}`}
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
        {sideProject.link ? (
          <a 
            href={sideProject.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center text-xs font-medium text-text-secondary dark:text-dark-text-secondary bg-button-secondary-bg dark:bg-dark-button-secondary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover hover:text-button-primary-text dark:hover:text-dark-button-primary-text px-2.5 py-1 rounded-lg transition-colors"
            aria-label={`Open ${sideProject.name} (${sideProject.linkText || 'Open'})`}
          >
            {sideProject.linkText || 'Open'}
            <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1.5" />
          </a>
        ) : (
          <span className="inline-flex items-center text-xs font-medium text-text-secondary dark:text-dark-text-secondary bg-button-secondary-bg dark:bg-dark-button-secondary-bg px-2.5 py-1 rounded-lg">
            {sideProject.tag}
          </span>
        )}
      </div>
       {/* Description can be added here if desired, currently it's not in the design for SideProjectCard but is in the type */}
      {sideProject.playStoreStats && (
        <PlayStoreMetrics
          downloads={sideProject.playStoreStats.downloads}
          rating={sideProject.playStoreStats.rating}
          variant="compact"
          className="mt-3"
        />
      )}
      {sideProject.description && (
        <p className="mt-3 text-sm text-text-secondary dark:text-dark-text-secondary">
          {sideProject.description}
        </p>
      )}
    </button>
  );
};
