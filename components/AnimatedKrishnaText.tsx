import React, { useMemo } from "react";
import { AnimatedName } from "./AnimatedName";

type AnimatedKrishnaTextProps = {
  text: string;
  className?: string;
  krishnaEnglish?: string;
  krishnaJapanese?: string;
  animateKrishnaName?: boolean;
};

export const AnimatedKrishnaText: React.FC<AnimatedKrishnaTextProps> = ({
  text,
  className,
  krishnaEnglish = "Krishna",
  krishnaJapanese = "クリシュナ",
  animateKrishnaName = true,
}) => {
  if (!animateKrishnaName) {
    return <span className={className}>{text}</span>;
  }

  const parts = useMemo(() => text.split(krishnaEnglish), [text, krishnaEnglish]);

  if (parts.length === 1) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {parts.map((part, idx) => (
        <React.Fragment key={idx}>
          {part}
          {idx < parts.length - 1 && (
            <AnimatedName english={krishnaEnglish} japanese={krishnaJapanese} />
          )}
        </React.Fragment>
      ))}
    </span>
  );
};

