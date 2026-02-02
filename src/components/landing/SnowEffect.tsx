import { useMemo } from "react";
import { Snowflake } from "lucide-react";

interface SnowEffectProps {
  count?: number;
  minDuration?: number;
  maxDuration?: number;
  minSize?: number;
  maxSize?: number;
}

export const SnowEffect = ({
  count = 20,
  minDuration = 12,
  maxDuration = 27,
  minSize = 10,
  maxSize = 24
}: SnowEffectProps) => {
  const snowflakes = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${minDuration + Math.random() * (maxDuration - minDuration)}s`,
      delay: `${Math.random() * 8}s`,
      size: minSize + Math.random() * (maxSize - minSize)
    })),
    [count, minDuration, maxDuration, minSize, maxSize]
  );

  return (
    <>
      {snowflakes.map(flake => (
        <Snowflake
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            animationDelay: flake.delay
          }}
          size={flake.size}
          aria-hidden="true"
        />
      ))}
    </>
  );
};
