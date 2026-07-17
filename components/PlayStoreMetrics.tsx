import React from 'react';
import { StarIcon, DownloadIcon } from './icons';

interface PlayStoreMetricsProps {
  downloads: string;
  rating: string;
  variant?: 'compact' | 'featured';
  className?: string;
}

export const PlayStoreMetrics: React.FC<PlayStoreMetricsProps> = ({
  downloads,
  rating,
  variant = 'compact',
  className = '',
}) => {
  if (variant === 'featured') {
    return (
      <div
        className={`flex flex-wrap justify-center gap-4 ${className}`}
        role="group"
        aria-label={`Play Store: ${downloads} downloads, ${rating} star rating`}
      >
        <div className="min-w-[140px] px-6 py-4 rounded-xl bg-accent-green/10 dark:bg-accent-green/15 border border-accent-green/30 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-accent-green mb-1">
            <DownloadIcon className="w-5 h-5" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-wide">Downloads</span>
          </div>
          <p className="text-3xl font-bold text-text-primary dark:text-dark-text-primary text-center">
            {downloads}
          </p>
          <p className="text-xs text-text-secondary dark:text-dark-text-secondary text-center mt-0.5">
            on Google Play
          </p>
        </div>
        <div className="min-w-[140px] px-6 py-4 rounded-xl bg-accent-green/10 dark:bg-accent-green/15 border border-accent-green/30 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-accent-green mb-1">
            <StarIcon className="w-5 h-5 fill-current" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-wide">Rating</span>
          </div>
          <p className="text-3xl font-bold text-text-primary dark:text-dark-text-primary text-center">
            {rating}
            <span className="text-lg text-accent-green ml-0.5">★</span>
          </p>
          <p className="text-xs text-text-secondary dark:text-dark-text-secondary text-center mt-0.5">
            Average rating
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-wrap gap-2 ${className}`}
      role="group"
      aria-label={`Play Store: ${downloads} downloads, ${rating} star rating`}
    >
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-accent-green/15 text-accent-green border border-accent-green/30">
        <DownloadIcon className="w-3.5 h-3.5 shrink-0" aria-hidden />
        {downloads} Downloads
      </span>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-accent-green/15 text-accent-green border border-accent-green/30">
        <StarIcon className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden />
        {rating} Rating
      </span>
    </div>
  );
};
