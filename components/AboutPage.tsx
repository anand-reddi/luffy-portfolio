import React, { useCallback, useState } from 'react';
import { AboutPageProps } from '../types'; 
import { SectionTitle } from './SectionTitle';
import { SideProjectsSection } from './SideProjectsSection'; 
import { CallToAction } from './CallToAction';
import { GitHubContributionsGraph } from './GitHubContributionsGraph';
import { SkillBadge } from './SkillBadge';
import { LaptopIcon } from './icons';
import { AnimatedName } from './AnimatedName';

export const AboutPage: React.FC<AboutPageProps> = ({ personalInfo, sideProjects, email, setCurrentPage, theme, skills }) => {
  const [isGlitchBurstActive, setIsGlitchBurstActive] = useState(false);

  const triggerGlitchBurst = useCallback(() => {
    setIsGlitchBurstActive(true);
    window.setTimeout(() => setIsGlitchBurstActive(false), 420);
  }, []);

  const updateGlitchSpot = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty("--mx", `${x}px`);
      e.currentTarget.style.setProperty("--my", `${y}px`);
    },
    []
  );

  const resetGlitchSpot = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.removeProperty("--mx");
    e.currentTarget.style.removeProperty("--my");
  }, []);

  const animatedEnglish =
    personalInfo.animatedNameEnglish || personalInfo.name.split(' ').slice(-1)[0];
  const animatedJapanese = personalInfo.animatedNameJapanese || animatedEnglish;

  return (
    <div className="space-y-16 md:space-y-24">
      <section id="about-intro">
        <SectionTitle title="About" />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="lg:w-2/3 space-y-4 animated-item anim-fadeInUp anim-delay-100">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary dark:text-dark-text-primary tracking-tight">
              It's Me,{" "}
              <AnimatedName
                english={animatedEnglish}
                japanese={animatedJapanese}
                className="ml-1"
              />
            </h1>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary">
              {personalInfo.aboutMeIntro}
            </p>
          </div>
          <div className="lg:w-1/3 w-full mt-6 lg:mt-0 animated-item anim-fadeInUp anim-delay-200">
            <button
              type="button"
              onClick={triggerGlitchBurst}
              onMouseMove={updateGlitchSpot}
              onMouseLeave={resetGlitchSpot}
              className={[
                "about-profile-glitch-wrap w-full max-w-sm mx-auto lg:mx-0 rounded-lg shadow-xl border-4 border-card dark:border-dark-card",
                "focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700",
                isGlitchBurstActive ? "is-glitching" : "",
              ].join(" ")}
              aria-label="Trigger profile image effect"
            >
              <img
                src={personalInfo.aboutPageImageUrl}
                alt={`Portrait of ${personalInfo.name}`}
                className="about-profile-glitch-base w-full h-auto rounded-lg object-cover"
              />
              <img
                src={personalInfo.aboutPageImageUrl}
                alt=""
                aria-hidden="true"
                className="about-profile-glitch-bw w-full h-auto rounded-lg object-cover"
              />
              <img
                src={personalInfo.aboutPageImageUrl}
                alt=""
                aria-hidden="true"
                className="about-profile-glitch-layer about-profile-glitch-layer--a w-full h-auto rounded-lg object-cover"
              />
              <img
                src={personalInfo.aboutPageImageUrl}
                alt=""
                aria-hidden="true"
                className="about-profile-glitch-layer about-profile-glitch-layer--b w-full h-auto rounded-lg object-cover"
              />
            </button>
          </div>
        </div>
      </section>

      <section id="more-about-me" className="animated-item anim-fadeInUp anim-delay-300">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-6">More About Me</h2>
        <div className="space-y-4 text-text-secondary dark:text-dark-text-secondary text-base md:text-lg leading-relaxed">
          {personalInfo.aboutMeDetailed.map((paragraph, index) => (
            <p
              key={index}
              className="animated-item anim-fadeInUp"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

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

      {personalInfo.githubUsername && (
        <GitHubContributionsGraph username={personalInfo.githubUsername} theme={theme} />
      )}
      
      <SideProjectsSection 
        sideProjects={sideProjects} 
        title="My Products" 
      /> 
      
      <CallToAction 
        email={email} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
};
