import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';
import { SectionTitle } from './SectionTitle';
import { CallToAction } from './CallToAction';
import { ArrowLeftIcon, ArrowRightIcon, ArrowTopRightOnSquareIcon } from './icons';

export const ProjectDetailsPage: React.FC<{
  setCurrentPage: (pageId: string, projectId?: string) => void;
  email: string;
}> = ({ setCurrentPage, email }) => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = PROJECTS.find(p => p.id === projectId);
  const otherProjects = PROJECTS.filter(p => p.id !== projectId);

  if (!project) {
    return (
      <div className="text-center py-10 animated-item anim-fadeInUp">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="text-text-secondary dark:text-dark-text-secondary mb-6">The project you are looking for does not exist or has been moved.</p>
        <button
          onClick={() => setCurrentPage('projects')}
          className="px-4 py-2 bg-button-primary-bg text-button-primary-text rounded-lg hover:bg-button-primary-hover"
        >
          View All Projects
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Back Button */}
      <div className="animated-item anim-fadeInUp">
        <button
          onClick={() => setCurrentPage('projects')}
          className="inline-flex items-center text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>
      </div>

      {/* Project Header */}
      <div className="text-center animated-item anim-fadeInUp anim-delay-100">
        <div className="flex justify-center mb-6">
          {project.logoImageUrl ? (
            <img
              src={project.logoImageUrl}
              alt={`${project.name} logo`}
              className="w-16 h-16 rounded-full object-cover border-4 border-card dark:border-dark-card shadow-lg bg-white"
            />
          ) : (
            <div className={`p-3 rounded-full ${project.iconBgColor || 'bg-gray-600'}`}>
              {project.iconComponent && <project.iconComponent className="w-8 h-8 text-white" />}
            </div>
          )}
        </div>
        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
        {project.tagline && (
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto">
            {project.tagline}
          </p>
        )}
        
        {/* Project Meta Info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary dark:text-dark-text-secondary mb-8">
          {project.client && (
            <div>
              <span className="font-medium">Client:</span> {project.client}
            </div>
          )}
          {project.company && (
            <div>
              <span className="font-medium">Company:</span> {project.company}
            </div>
          )}
          {project.projectType && (
            <div>
              <span className="font-medium">Type:</span> {project.projectType}
            </div>
          )}
          {project.year && (
            <div>
              <span className="font-medium">Year:</span> {project.year}
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-card dark:bg-dark-card text-text-secondary dark:text-dark-text-secondary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live Link */}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-green/80 transition-colors group"
          >
            View Live Project
            <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        )}
      </div>

      {/* Project Images */}
      {project.images && project.images.length > 0 && (
        <div className="space-y-6 animated-item anim-fadeInUp anim-delay-200">
          <h2 className="text-2xl font-bold text-center">Project Screenshots</h2>
          <div className="grid gap-6">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project Overview */}
      {project.overview && (
        <div className="space-y-4 animated-item anim-fadeInUp anim-delay-300">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {project.overview}
          </p>
        </div>
      )}

      {/* Problem Statement */}
      {project.problemStatement && (
        <div className="space-y-4 animated-item anim-fadeInUp anim-delay-400">
          <h2 className="text-2xl font-bold">
            {project.problemStatement.title || 'The Challenge'}
          </h2>
          <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {project.problemStatement.description}
          </p>
        </div>
      )}

      {/* Solution Statement */}
      {project.solutionStatement && (
        <div className="space-y-4 animated-item anim-fadeInUp anim-delay-500">
          <h2 className="text-2xl font-bold">
            {project.solutionStatement.title || 'The Solution'}
          </h2>
          <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {project.solutionStatement.description}
          </p>
        </div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="space-y-8 animated-item anim-fadeInUp anim-delay-600">
          <SectionTitle title="Other Projects" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onProjectSelect={(projectId) => setCurrentPage('project-detail', projectId)}
              />
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => setCurrentPage('projects')}
              className="text-sm font-medium text-accent-green hover:text-accent-green/80 transition-colors inline-flex items-center group"
              aria-label="View all projects"
            >
              View All Projects
              <ArrowRightIcon className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200 ease-in-out" />
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="animated-item anim-fadeInUp anim-delay-700">
        <CallToAction email={email} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};
