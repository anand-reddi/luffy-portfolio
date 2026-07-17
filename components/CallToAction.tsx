import React from 'react';
// import React, { useState, useCallback } from 'react';
import { PlusIcon /* , DocumentDuplicateIcon */ } from './icons';
import { CallToActionProps } from '../types'; // Import CallToActionProps

export const CallToAction: React.FC<CallToActionProps> = ({ email, setCurrentPage }) => {
  // const [emailCopied, setEmailCopied] = useState(false);

  // const copyEmail = useCallback(() => {
  //   navigator.clipboard.writeText(email).then(() => {
  //     setEmailCopied(true);
  //     setTimeout(() => setEmailCopied(false), 2000);
  //   }).catch(err => console.error("Failed to copy email: ", err));
  // }, [email]);

  return (
    <section className="animated-item anim-fadeInUp anim-delay-400 py-12 md:py-16 text-center bg-card dark:bg-dark-card rounded-xl shadow-xl border border-border dark:border-dark-border">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
          Let's work together.
        </h2>
        <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-8">
          Creating innovative web solutions and impactful digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setCurrentPage('hire')} // Navigate to HireMePage
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover rounded-lg transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Hire Me
          </button>
          {/* <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-button-secondary-text dark:text-dark-button-secondary-text bg-button-secondary-bg dark:bg-dark-button-secondary-bg hover:bg-button-secondary-hover dark:hover:bg-dark-button-secondary-hover rounded-lg transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-live="polite"
          >
            <DocumentDuplicateIcon className="w-5 h-5 mr-2" />
            {emailCopied ? 'Email Copied!' : 'Copy Email'}
          </button> */}
        </div>
      </div>
    </section>
  );
};