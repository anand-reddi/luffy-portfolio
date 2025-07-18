
import React from 'react';
import { SideProject, SideProjectsSectionProps } from '../types'; // Updated import
import { SideProjectCard } from './SideProjectCard';
import { SectionTitle } from './SectionTitle';
import { ArrowRightIcon } from './icons'; // Import ArrowRightIcon

export const SideProjectsSection: React.FC<SideProjectsSectionProps> = ({ 
  sideProjects, 
  title, 
  subtitle,
  onViewAllClick,
  viewAllText = "View All Products" // Default text for the button
}) => {
  // Determine the title to display. If 'title' prop is undefined, use default.
  // If 'title' prop is an empty string, it means no title should be shown.
  const effectiveTitle = title === undefined ? "Side Projects" : title;

  return (
    <section>
      {/* Conditionally render SectionTitle only if effectiveTitle is a non-empty string */}
      {effectiveTitle && (
        <SectionTitle title={effectiveTitle} subtitle={subtitle} className="anim-delay-100" />
      )}
      <div className={`space-y-4 ${!effectiveTitle ? 'mt-0' : ''}`}> {/* Remove top margin if title is hidden */}
        {sideProjects.map((project, index) => (
          <SideProjectCard 
            key={project.id} 
            sideProject={project} 
            className="animated-item anim-fadeInUp"
            // Adjust animation delay: start sooner if there's no title
            style={{ animationDelay: `${index * 100 + (effectiveTitle ? 300 : 0)}ms` }} 
          />
        ))}
      </div>

      {/* View All Button */}
      {onViewAllClick && (
        <div 
          className="animated-item anim-fadeInUp mt-8 md:mt-12 text-center" 
          style={{ animationDelay: `${sideProjects.length * 100 + (effectiveTitle ? 300 : 100)}ms` }}
        >
          <button
            onClick={onViewAllClick}
            className="text-sm font-medium text-accent-green hover:text-accent-green/80 transition-colors inline-flex items-center group"
            aria-label={viewAllText}
          >
            {viewAllText}
            <ArrowRightIcon className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200 ease-in-out" />
          </button>
        </div>
      )}
    </section>
  );
};