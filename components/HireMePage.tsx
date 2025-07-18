
import React, { useState } from 'react';
import { HireMePageProps } from '../types';
import { CheckBadgeIcon, ArrowLeftIcon } from './icons'; // Import ArrowLeftIcon
import { WEB3FORMS_ACCESS_KEY } from '../constants';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string; 
}

export const HireMePage: React.FC<HireMePageProps> = ({ personalInfo, setCurrentPage }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
        setErrors({...errors, [e.target.name]: undefined});
    }
     // Clear general form error when user starts typing again
    if (status === 'error' && errors.form) {
        setErrors(prev => ({ ...prev, form: undefined }));
    }
    if(status !== 'idle') setStatus('idle'); // Reset status on change after an attempt
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('error'); 
      return;
    }
    
    // Check if the access key is the placeholder value
    // if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
    //   setStatus('error');
    //   setErrors({ form: 'Form not configured. Please add your Web3Forms Access Key in constants.ts.' });
    //   return;
    // }
    
    setStatus('loading');
    setErrors({});

    // Create FormData object to mimic a standard form submission
    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);
    formPayload.append("access_key", WEB3FORMS_ACCESS_KEY);
    formPayload.append("subject", `New Project Inquiry from ${formData.name}`);
    formPayload.append("from_name", personalInfo.name);
    formPayload.append("replyto", formData.email);
    formPayload.append("botcheck", ""); // Honeypot for spam protection as per Web3Forms docs


    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          // 'Content-Type' header is not needed; browser sets it automatically with boundary for FormData
          Accept: 'application/json',
        },
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        console.error('Submission error from API:', result);
        setStatus('error');
        // Web3Forms returns a "message" property on error.
        // It might also return the spam error message here.
        setErrors({ form: result.message || 'An unexpected error occurred. Please try again.' });
      }
    } catch (error) {
      console.error('Network or client-side error:', error);
      setStatus('error');
      setErrors({ form: 'An unexpected network error occurred. Please check your connection and try again.' });
    }
  };

  const inputBaseClasses = "w-full px-4 py-3 rounded-lg border text-text-primary dark:text-dark-text-primary placeholder-text-placeholder dark:placeholder-dark-text-placeholder transition-colors duration-200 ease-in-out";
  const inputNormalStateClasses = "bg-input-bg dark:bg-dark-input-bg border-input-border dark:border-dark-input-border";
  const inputFocusStateClasses = "focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green focus:ring-opacity-50 dark:focus:border-accent-green";
  const inputErrorStateClasses = "border-accent-red dark:border-dark-accent-red";


  return (
    <div className="space-y-8"> 
      <button
        onClick={() => setCurrentPage('home')}
        className="animated-item anim-fadeInUp inline-flex items-center text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors group mb-6"
        aria-label="Back to Home"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      <div className="animated-item anim-fadeInUp bg-card dark:bg-dark-card p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-border dark:border-dark-border space-y-10">
        <section id="hire-me-form-section">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary tracking-wide flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-text-secondary dark:bg-dark-text-secondary rounded-full mr-2 align-middle"></span>
              Hire Me
            </h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-green/20 text-accent-green">
              <CheckBadgeIcon className="w-3 h-3 mr-1 text-accent-green" />
              Available for Work
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
            {personalInfo.hireMePageTitle}
          </h1>
          <p className="text-md text-text-secondary dark:text-dark-text-secondary mb-8">
            {personalInfo.hireMePageSubtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={`${inputBaseClasses} ${errors.name ? inputErrorStateClasses : inputNormalStateClasses} ${inputFocusStateClasses}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="text-xs text-accent-red mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`${inputBaseClasses} ${errors.email ? inputErrorStateClasses : inputNormalStateClasses} ${inputFocusStateClasses}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="text-xs text-accent-red mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className={`${inputBaseClasses} ${errors.message ? inputErrorStateClasses : inputNormalStateClasses} ${inputFocusStateClasses}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              ></textarea>
              {errors.message && <p id="message-error" className="text-xs text-accent-red mt-1">{errors.message}</p>}
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 rounded-lg font-medium text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors duration-200 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            {status === 'success' && <p className="text-sm text-accent-green mt-4">Thank you! Your message has been sent successfully.</p>}
            {status === 'error' && errors.form && <p className="text-sm text-accent-red mt-4">{errors.form}</p>}
             {status === 'error' && !errors.form && (Object.keys(errors).length > 0 && errors.constructor === Object && Object.values(errors).some(err => err !== undefined && typeof err === 'string')) && <p className="text-sm text-accent-red mt-4">Please correct the errors above.</p>}
          </form>
        </section>
      </div>
    </div>
  );
};
