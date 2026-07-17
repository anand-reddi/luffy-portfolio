import React, { useEffect, useMemo, useState } from "react";

type AnimatedNameProps = {
  english: string;
  japanese: string;
  intervalMs?: number;
  className?: string;
};

export const AnimatedName: React.FC<AnimatedNameProps> = ({
  english,
  japanese,
  intervalMs = 1800,
  className,
}) => {
  const options = useMemo(() => [english, japanese], [english, japanese]);
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("out"), intervalMs);
    const t2 = window.setTimeout(() => {
      setIdx((prev) => (prev + 1) % options.length);
      setPhase("in");
    }, intervalMs + 220);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [idx, intervalMs, options.length]);

  return (
    <span className={`inline-flex align-baseline ${className || ""}`}>
      <span
        className={`inline-block will-change-transform transition-all duration-200 ease-out ${
          phase === "in"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1"
        }`}
      >
        {options[idx]}
      </span>
    </span>
  );
};

