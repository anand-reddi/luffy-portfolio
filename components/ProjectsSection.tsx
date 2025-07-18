import React from 'react';
import { Project, ProjectsSectionProps } from '../types';
import { ProjectCard } from './ProjectCard';
import { ArrowRightIcon } from './icons'; // Import ArrowRightIcon

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  projects, 
  onViewAllClick, 
  setCurrentPage,
  title = "Projects", // Default title
  maxItems // Optional maxItems to display
}) => {
  const projectsToDisplay = maxItems ? projects.slice(0, maxItems) : projects;

  return (
    <section id="home-projects-section">
      {/* Section Title - View All button removed from here */}
      <div className="animated-item anim-fadeInUp mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary tracking-tight flex items-center">
           <span className="inline-block w-1.5 h-1.5 bg-text-secondary dark:bg-dark-text-secondary rounded-full mr-2.5 align-middle"></span>
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {projectsToDisplay.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onProjectSelect={(projectId) => setCurrentPage('project-detail', projectId)}
            className="animated-item anim-fadeInUp"
            style={{ animationDelay: `${index * 100 + 200}ms` }}
          />
        ))}
      </div>
      {/* View All Button - Moved below the projects list */}
      {onViewAllClick && (
        <div 
          className="animated-item anim-fadeInUp mt-8 md:mt-12 text-center" 
          style={{ animationDelay: `${projectsToDisplay.length * 100 + 300}ms` }}
        >
          <button
            onClick={onViewAllClick}
            className="text-sm font-medium text-accent-green hover:text-accent-green/80 transition-colors inline-flex items-center group"
            aria-label="View all projects"
          >
            View All Projects
            <ArrowRightIcon className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200 ease-in-out" />
          </button>
        </div>
      )}
    </section>
  );
};