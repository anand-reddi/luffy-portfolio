import React from 'react';
import { Project, SideProject, ProjectsPageProps } from '../types';
import { SectionTitle } from './SectionTitle';
import { ProjectCard } from './ProjectCard';
import { SideProjectsSection } from './SideProjectsSection';
import { CallToAction } from './CallToAction';

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects, sideProjects, email, setCurrentPage }) => {

  return (
    <div className="space-y-16 md:space-y-24">
      <section id="my-works-section">
        <SectionTitle 
          title="My Projects" 
          subtitle="Discover my portfolio, where purposeful interfaces meet captivating design. My work strives to enhance experiences and inspire."
        />
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              onProjectSelect={(projectId) => setCurrentPage('project-detail', projectId)}
              className="animated-item anim-fadeInUp"
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            />
          ))}
        </div>
      </section>

      <SideProjectsSection 
        sideProjects={sideProjects} 
        title="Explore My Products"
        subtitle="Some of the digital products that I worked on as side projects, explore them now"
      />
      
      <CallToAction email={email} setCurrentPage={setCurrentPage} />
    </div>
  );
};
