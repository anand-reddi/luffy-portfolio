import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../constants';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const [animationState, setAnimationState] = useState('entering'); // entering -> static -> exiting
  const {
    introLetter1 = 'L',
    introLetter2 = 'U',
    introTagline = 'Pirate • Dream Chaser',
  } = PERSONAL_INFO;

  useEffect(() => {
    // This timer marks the end of the initial letter/line animations
    const enterTimer = setTimeout(() => {
      setAnimationState('static');
    }, 1500);

    // This timer starts the fade-out of the entire container
    const staticTimer = setTimeout(() => {
      setAnimationState('exiting');
    }, 2000);

    // This timer unmounts the component after the fade-out is complete
    const exitTimer = setTimeout(() => {
      onAnimationComplete();
    }, 2800);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(staticTimer);
      clearTimeout(exitTimer);
    };
  }, [onAnimationComplete]);

  const getContainerClasses = () => {
    switch (animationState) {
      case 'entering':
      case 'static':
        return 'opacity-100';
      case 'exiting':
        return 'opacity-0';
      default:
        return 'opacity-100';
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background dark:bg-dark-background transition-opacity duration-800 ease-in-out ${getContainerClasses()}`}
      aria-hidden="true"
    >
      {/* Background design (developer + creator vibe) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="intro-bg-grid absolute inset-0" />
        <div className="intro-blob intro-blob--left absolute -left-12 -top-12 w-[260px] h-[260px] sm:-left-24 sm:-top-24 sm:w-[420px] sm:h-[420px]" />
        <div className="intro-blob intro-blob--right absolute -right-14 -bottom-14 w-[300px] h-[300px] sm:-right-28 sm:-bottom-28 sm:w-[520px] sm:h-[520px]" />
        <div className="intro-diagonal-text absolute inset-0" />
      </div>

      <div className="relative flex items-center justify-center text-6xl md:text-8xl font-bold text-text-primary dark:text-dark-text-primary">
        <span
          className="intro-letter block"
          style={{ animationDelay: '0.1s' }}
        >
          {introLetter1}
        </span>
        <span
          className="intro-letter block"
          style={{ animationDelay: '0.2s' }}
        >
          {introLetter2}
        </span>
        <div className="intro-line absolute w-full h-0.5 bg-accent-green dark:bg-dark-accent-green bottom-0"></div>
      </div>

      <div className="intro-tagline absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.25em] uppercase text-text-secondary dark:text-dark-text-secondary px-4 text-center whitespace-nowrap">
        {introTagline}
      </div>
    </div>
  );
};