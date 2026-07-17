import React from 'react';
import { SocialLink } from '../types';
import { AnimatedKrishnaText } from './AnimatedKrishnaText';

interface FooterProps {
  socialLinks: SocialLink[];
  developerName: string;
  developerUrl: string;
  animatedNameEnglish?: string;
  animatedNameJapanese?: string;
}

export const Footer: React.FC<FooterProps> = ({
  socialLinks,
  developerName,
  developerUrl,
  animatedNameEnglish,
  animatedNameJapanese,
}) => {
  return (
    <footer className="w-full bg-card dark:bg-dark-card border-t border-border dark:border-dark-border mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <span className="inline-block w-1.5 h-1.5 bg-text-secondary dark:bg-dark-text-secondary rounded-full mr-2"></span>
            <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
              Follow Me
            </h3>
          </div>
          <div className="flex items-center space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-button-primary-bg text-button-primary-text dark:bg-dark-button-primary-bg dark:text-dark-button-primary-text hover:opacity-80 transition-opacity"
                aria-label={`Follow on ${link.name}`}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-1">
            Developed by{' '}
            <a
              href={developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
              aria-label={`Visit ${developerName} on Instagram`}
            >
              <AnimatedKrishnaText
                text={developerName}
                krishnaEnglish={animatedNameEnglish}
                krishnaJapanese={animatedNameJapanese}
              />
            </a>
            , UI design by{' '}
            <a
              href="https://dribbble.com/shots/22110108-Subtle-Folio-Portfolio-Framer-Template"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
            >
              Nur Praditya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
