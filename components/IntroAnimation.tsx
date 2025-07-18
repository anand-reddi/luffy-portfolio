import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const [animationState, setAnimationState] = useState('entering'); // entering -> static -> exiting

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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-background via-background to-card dark:from-dark-background dark:via-dark-background dark:to-dark-card transition-opacity duration-800 ease-in-out ${getContainerClasses()}`}
      aria-hidden="true"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-green/10 dark:bg-dark-accent-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent-green/5 dark:bg-dark-accent-green/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent-green/8 dark:bg-dark-accent-green/8 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        {/* Main title */}
        <div className="relative flex items-center justify-center text-7xl md:text-9xl font-black text-text-primary dark:text-dark-text-primary mb-8">
          <span
            className="intro-letter block transform hover:scale-110 transition-transform duration-300"
            style={{ animationDelay: '0.1s' }}
          >
            L
          </span>
          <span
            className="intro-letter block transform hover:scale-110 transition-transform duration-300"
            style={{ animationDelay: '0.2s' }}
          >
            u
          </span>
          <span
            className="intro-letter block transform hover:scale-110 transition-transform duration-300"
            style={{ animationDelay: '0.3s' }}
          >
            f
          </span>
          <span
            className="intro-letter block transform hover:scale-110 transition-transform duration-300"
            style={{ animationDelay: '0.4s' }}
          >
            f
          </span>
          <span
            className="intro-letter block transform hover:scale-110 transition-transform duration-300"
            style={{ animationDelay: '0.5s' }}
          >
            y
          </span>
        </div>

        {/* Animated underline */}
        <div className="relative w-full max-w-md">
          <div className="intro-line absolute w-full h-1 bg-gradient-to-r from-transparent via-accent-green dark:via-dark-accent-green to-transparent bottom-0 rounded-full shadow-lg"></div>
        </div>

        {/* Subtitle */}
        <div className="mt-8 text-center">
          <p className="text-lg md:text-xl text-text-secondary dark:text-dark-text-secondary font-medium opacity-0 animate-fadeIn" style={{ animationDelay: '1s' }}>
            Future King of the Pirates
          </p>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-8 -left-8 w-4 h-4 bg-accent-green/30 dark:bg-dark-accent-green/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-8 -right-8 w-3 h-3 bg-accent-green/40 dark:bg-dark-accent-green/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 -left-12 w-2 h-2 bg-accent-green/50 dark:bg-dark-accent-green/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 -right-12 w-2 h-2 bg-accent-green/50 dark:bg-dark-accent-green/50 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};