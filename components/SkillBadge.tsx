
import React from 'react';
import { Skill } from '../types'; // Ensure Skill type is imported

interface SkillBadgeProps {
  skill: Skill;
  className?: string;
  style?: React.CSSProperties;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, className, style }) => {
  const IconComponent = skill.icon;

  return (
    <div
      className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm transition-transform hover:scale-105 ${skill.backgroundColor} ${skill.textColor} ${className || ''}`}
      style={style}
      role="listitem" // Indicate it's an item in a list of skills
    >
      {IconComponent && <IconComponent className="w-4 h-4 flex-shrink-0" aria-hidden="true" />}
      <span>{skill.name}</span>
    </div>
  );
};
