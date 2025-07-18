
import React from 'react';
import { AboutPageProps } from '../types'; 
import { SectionTitle } from './SectionTitle';
import { SideProjectsSection } from './SideProjectsSection'; 
import { CallToAction } from './CallToAction';
import { GitHubContributionsGraph } from './GitHubContributionsGraph';
import { SkillBadge } from './SkillBadge'; // Import SkillBadge
import { LaptopIcon } from './icons'; // Import LaptopIcon for title

export const AboutPage: React.FC<AboutPageProps> = ({ personalInfo, sideProjects, email, setCurrentPage, theme, skills }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <section id="about-intro">
        <SectionTitle title="About" />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="lg:w-2/3 space-y-4 animated-item anim-fadeInUp anim-delay-100">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary dark:text-dark-text-primary tracking-tight">
              It's Me, {personalInfo.name.split(' ')[0]}
            </h1>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary">
              {personalInfo.aboutMeIntro}
            </p>
          </div>
          <div className="lg:w-1/3 w-full mt-6 lg:mt-0 animated-item anim-fadeInUp anim-delay-200">
            <img 
              src={personalInfo.aboutPageImageUrl} 
              alt={`Portrait of ${personalInfo.name}`}
              className="w-full max-w-sm mx-auto lg:mx-0 h-auto rounded-lg object-cover shadow-xl border-4 border-card dark:border-dark-card" 
            />
          </div>
        </div>
      </section>

      <section id="more-about-me" className="animated-item anim-fadeInUp anim-delay-300">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-6">More About Me</h2>
        <div className="space-y-4 text-text-secondary dark:text-dark-text-secondary text-base md:text-lg leading-relaxed">
          {personalInfo.aboutMeDetailed.map((paragraph, index) => (
            <p key={index} className="animated-item anim-fadeInUp" style={{ animationDelay: `${index * 100 + 400}ms` }}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="animated-item anim-fadeInUp anim-delay-500">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-6 flex items-center">
          <LaptopIcon className="w-7 h-7 mr-3 text-text-secondary dark:text-dark-text-secondary" />
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {skills.map((skill, index) => (
            <SkillBadge 
              key={skill.name} 
              skill={skill} 
              className="animated-item anim-fadeInUp"
              style={{ animationDelay: `${index * 50 + 600}ms` }}
            />
          ))}
        </div>
      </section>

      {/* GitHub Contributions Section */}
      {personalInfo.githubUsername && (
        <GitHubContributionsGraph username={personalInfo.githubUsername} theme={theme} />
      )}
      
      <SideProjectsSection 
        sideProjects={sideProjects} 
        title="My Side Projects" 
      /> 
      
      <CallToAction 
        email={email} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
};
