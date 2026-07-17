import React from 'react';
import { FiUsers } from 'react-icons/fi';

interface VisitorStatsProps {
  count: number | null;
  loading: boolean;
  error: string | null;
}

export const VisitorStats: React.FC<VisitorStatsProps> = ({ count, loading, error }) => {
  if (error) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-xs text-text-secondary dark:text-dark-text-secondary">
        <FiUsers className="w-4 h-4 text-accent-green" />
        <span>Loading users...</span>
      </div>
    );
  }

  if (!count) {
    return null;
  }

  const formatCount = (num: number): string => {
    return num.toLocaleString('en-IN');
  };

  return (
    <div className="flex items-center gap-2 text-xs text-text-secondary dark:text-dark-text-secondary">
      <FiUsers className="w-4 h-4 text-accent-green" />
      <span>
        <span className="font-semibold text-text-primary dark:text-dark-text-primary">
          {formatCount(count)}
        </span>
        {' '}visitors
      </span>
    </div>
  );
};
