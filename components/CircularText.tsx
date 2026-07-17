import React, { useId } from 'react';

interface CircularTextProps {
  text: string;
  className?: string;
  letterSpacing?: string;
}

const SVG_VIEWBOX_SIZE = 200; // Defines the internal coordinate system size
const TEXT_PATH_RADIUS = SVG_VIEWBOX_SIZE / 2 - 12; // Radius of the text path, 12px padding from edge for text

export const CircularText: React.FC<CircularTextProps> = ({
  text,
  className,
  letterSpacing = '0.9em',
}) => {
  const componentId = useId();
  const pathId = `textCirclePath-${componentId}`;

  // Path definition for a circle starting at the top-center and going clockwise
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
      aria-hidden="true"
    >
      <defs>
        <path id={pathId} d={pathData} />
      </defs>
      <text 
        className="fill-current text-text-secondary dark:text-dark-text-secondary text-xs uppercase font-medium"
        dy="0"
        style={{ letterSpacing }}
      >
        <textPath xlinkHref={`#${pathId}`} startOffset="0%">
          {text}
        </textPath>
      </text>
    </svg>
  );
};
