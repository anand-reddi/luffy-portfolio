
import React, { useState, useEffect, useRef } from 'react';
import { GithubIcon } from './icons'; 

interface GitHubContributionsGraphProps {
  username: string;
  theme: 'light' | 'dark'; // theme prop is currently not directly used by the ghchart.rshah.org image
}

export const GitHubContributionsGraph: React.FC<GitHubContributionsGraphProps> = ({ username, theme }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageError, setImageError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const timeoutIdRef = useRef<number | null>(null); // Changed NodeJS.Timeout to number
  const imageSettledRef = useRef(false); // True if image load/error/timeout has occurred

  useEffect(() => {
    // Clear previous timeout if it exists
    if (timeoutIdRef.current !== null) { // Check if not null before clearing
      clearTimeout(timeoutIdRef.current);
    }
    imageSettledRef.current = false; // Reset settlement status for the new attempt

    if (!username) {
      setImageError("GitHub username is not provided.");
      setIsImageLoading(false);
      setImageUrl(null);
      imageSettledRef.current = true; // No load attempt, so it's "settled"
      return;
    }

    // Initiate loading process for a new/valid username
    setIsImageLoading(true);
    setImageError(null);
    setImageUrl(`https://ghchart.rshah.org/${username}`); // This will make the hidden <img> render with this src

    // Set a timeout for the image load
    timeoutIdRef.current = window.setTimeout(() => { // Use window.setTimeout for clarity in browser context
      if (!imageSettledRef.current) { // Check if image hasn't loaded or errored yet
        setImageError("Failed to load contribution graph. The request timed out or the service is unresponsive.");
        setIsImageLoading(false);
        imageSettledRef.current = true; // Mark as settled due to timeout
      }
    }, 7000); // 7 seconds

    return () => { // Cleanup on component unmount or before an update to `username`
      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [username]);

  const handleImageLoadSuccess = () => {
    if (!imageSettledRef.current) {
      setIsImageLoading(false);
      setImageError(null);
      imageSettledRef.current = true;
      if (timeoutIdRef.current !== null) clearTimeout(timeoutIdRef.current);
    }
  };

  const handleImageLoadError = () => {
    if (!imageSettledRef.current) {
      // Differentiate error slightly if it's not a timeout
      setImageError("Failed to load contribution graph. The user might not exist, the service is unavailable, or there was a network issue.");
      setIsImageLoading(false);
      imageSettledRef.current = true;
      if (timeoutIdRef.current !== null) clearTimeout(timeoutIdRef.current);
    }
  };

  const githubProfileUrl = `https://github.com/${username}`;

  return (
    <section id="github-contributions" className="animated-item anim-fadeInUp">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
          <span className="inline-block w-1.5 h-1.5 bg-text-secondary dark:bg-dark-text-secondary rounded-full mr-2.5 align-middle"></span>
          GitHub Contributions
        </h2>
        {username && ( // Only show profile link if username is valid
           <a 
            href={githubProfileUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-medium text-accent-green hover:text-accent-green/80 transition-colors inline-flex items-center group"
            aria-label={`View ${username}'s GitHub profile`}
          >
            <GithubIcon className="w-4 h-4 mr-1.5" />
            View Profile
          </a>
        )}
      </div>

      {/* Hidden image tag to trigger load and capture events. Rendered if imageUrl is set. */}
      {imageUrl && (
        <img
          key={imageUrl} // Ensures img is replaced if src changes, helping with event re-attachment
          src={imageUrl}
          alt="" // Decorative, as it's not meant to be seen directly
          style={{ display: 'none' }}
          onLoad={handleImageLoadSuccess}
          onError={handleImageLoadError}
        />
      )}

      {/* Display loading message */}
      {isImageLoading && username && (
        <div className="text-center py-10 text-text-secondary dark:text-dark-text-secondary">
          Loading GitHub contributions graph...
        </div>
      )}

      {/* Display error message (this covers "no username", actual load errors, and timeout) */}
      {imageError && !isImageLoading && (
        <div className="text-center py-10 text-accent-red dark:text-dark-accent-red">
          Error: {imageError}
        </div>
      )}

      {/* Display the actual graph image on success */}
      {!isImageLoading && !imageError && imageUrl && username && (
        <div className="p-4 bg-card dark:bg-dark-card rounded-lg shadow-md border border-border dark:border-dark-border overflow-hidden">
          <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" aria-label={`${username}'s contribution graph, links to GitHub profile`}>
            <img
              // No key needed here if the parent div re-renders fully, or key can be imageUrl too
              src={imageUrl} // Use the same URL that was successfully loaded by the hidden image
              alt={`${username}'s GitHub contribution graph`}
              className="w-full h-auto"
            />
          </a>
          {/* 
          <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-2 text-center">
            Contribution graph powered by <a href="https://ghchart.rshah.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-green">ghchart.rshah.org</a>. Shows contributions from the last year.
          </p> 
          */}
        </div>
      )}
    </section>
  );
};
