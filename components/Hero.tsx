import React from 'react';
// import React, { useState, useCallback } from 'react';
import { PlusIcon, /* DocumentDuplicateIcon, */ CheckBadgeIcon, InstagramIcon } from './icons';
import { HeroProps } from '../types'; // Import HeroProps
import { CircularText } from './CircularText'; // Import CircularText
import { AnimatedKrishnaText } from './AnimatedKrishnaText';
import { VisitorStats } from './VisitorStats';
import { useVisitorCount } from '../hooks/useVisitorCount';
import { LiveTime } from './LiveTime';
import { OnlineStatus } from './OnlineStatus';

export const Hero: React.FC<HeroProps> = ({
  name,
  title,
  bio,
  imageUrl,
  instagramUrl,
  circularText,
  circularTextLetterSpacing,
  animatedNameEnglish,
  animatedNameJapanese,
  setCurrentPage,
}) => {
  // const [emailCopied, setEmailCopied] = useState(false);
  const { visitorCount, loading, error } = useVisitorCount();

  // const copyEmail = useCallback(() => {
  //   navigator.clipboard.writeText(email).then(() => {
  //     setEmailCopied(true);
  //     setTimeout(() => setEmailCopied(false), 2000);
  //   }).catch(err => console.error("Failed to copy email: ", err));
  // }, [email]);

  const circularTextContent =
    circularText?.trim() || `${name.toUpperCase()} • `.repeat(2);

  return (
    <section id="hero" className="py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="md:w-2/3 space-y-4">
          <div className="animated-item anim-fadeInUp flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary tracking-wide flex items-center">
              <OnlineStatus />
              {title}
            </span>
            {/* <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-green/20 text-accent-green">
              <CheckBadgeIcon className="w-3 h-3 mr-1 text-accent-green" />
              Available for Work
            </span> */}
          </div>
          <h1 className="animated-item anim-fadeInUp anim-delay-100 text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary dark:text-dark-text-primary tracking-tight">
            I'm{" "}
            <AnimatedKrishnaText
              text={name}
              className="ml-1"
              krishnaEnglish={animatedNameEnglish}
              krishnaJapanese={animatedNameJapanese}
            />
          </h1>
          <p className="animated-item anim-fadeInUp anim-delay-200 text-lg text-text-secondary dark:text-dark-text-secondary max-w-xl">
            {bio}
          </p>
          <div className="animated-item anim-fadeInUp anim-delay-300 flex flex-wrap gap-4">
            <VisitorStats count={visitorCount} loading={loading} error={error} />
            <LiveTime />
          </div>
          <div className="animated-item anim-fadeInUp anim-delay-400 flex flex-wrap gap-3 pt-4">
            <button
              onClick={() => setCurrentPage('hire')} // Navigate to HireMePage
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover rounded-lg transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              Hire Me
            </button>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-button-secondary-text dark:text-dark-button-secondary-text bg-button-secondary-bg dark:bg-dark-button-secondary-bg hover:bg-button-secondary-hover dark:hover:bg-dark-button-secondary-hover rounded-lg transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-label="Visit Instagram"
            >
              <InstagramIcon className="w-4 h-4 mr-2" />
              Instagram
            </a>
            {/* <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-button-secondary-text dark:text-dark-button-secondary-text bg-button-secondary-bg dark:bg-dark-button-secondary-bg hover:bg-button-secondary-hover dark:hover:bg-dark-button-secondary-hover rounded-lg transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-live="polite"
            >
              <DocumentDuplicateIcon className="w-4 h-4 mr-2" />
              {emailCopied ? 'Email Copied!' : 'Copy Email'}
            </button> */}
          </div>
        </div>
        <div className="animated-item anim-fadeInUp anim-delay-200 md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          {/* Container for image and circular text. Sizes:
              Image: w-40 (160px) / md:w-48 (192px)
              Text Circle Container: w-[200px] / md:w-[240px] (Image size + 40px approx for text ring)
           */}
          <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px]">
            <CircularText
              text={circularTextContent}
              letterSpacing={circularTextLetterSpacing}
              className="absolute inset-0 w-full h-full animate-spin-slow"
            />
            <img 
              src={imageUrl} 
              alt={name} 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-card dark:border-dark-card shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};