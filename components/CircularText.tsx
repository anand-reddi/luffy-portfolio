import React, { useId } from 'react';

interface CircularTextProps {
  text: string;
  className?: string;
}

const SVG_VIEWBOX_SIZE = 200; // Defines the internal coordinate system size
const TEXT_PATH_RADIUS = SVG_VIEWBOX_SIZE / 2 - 12; // Radius of the text path, 12px padding from edge for text

export const CircularText: React.FC<CircularTextProps> = ({ text, className }) => {
  const componentId = useId();
  const pathId = `textCirclePath-${componentId}`;

  // Path definition for a circle starting at the top-center and going clockwise
  // M ${centerX}, ${centerY - radius} : Move to top point of circle
  // A ${radius},${radius} 0 1,1 ${centerX - 0.01},${centerY - radius} : Arc back to almost start (ensures full circle for textPath)
  // Z : Close path (optional but good practice)
  const pathData = `
    M ${SVG_VIEWBOX_SIZE / 2}, ${SVG_VIEWBOX_SIZE / 2 - TEXT_PATH_RADIUS}
    A ${TEXT_PATH_RADIUS},${TEXT_PATH_RADIUS} 0 1,1 ${SVG_VIEWBOX_SIZE / 2 - 0.01},${SVG_VIEWBOX_SIZE / 2 - TEXT_PATH_RADIUS}
    Z
  `;

  return (
    <svg 
      viewBox={`0 0 ${SVG_VIEWBOX_SIZE} ${SVG_VIEWBOX_SIZE}`}
      width="100%" 
      height="100%" 
      className={className}
      aria-hidden="true" // Decorative element
    >
      <defs>
        <path id={pathId} d={pathData} />
      </defs>
      <text 
        className="fill-current text-text-secondary dark:text-dark-text-secondary text-xs uppercase tracking-wider font-medium"
        dy="0" /* Adjust vertical alignment if needed, 0 is baseline on path */
      >
        <textPath xlinkHref={`#${pathId}`} startOffset="0%">
          {text}
        </textPath>
      </text>
    </svg>
  );
};
