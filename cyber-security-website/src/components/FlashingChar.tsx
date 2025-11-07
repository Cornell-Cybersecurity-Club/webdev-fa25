import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./FlashingChar.css";

interface FlashingCharProps {
  character?: string;
  className?: string;
  blinkDuration?: number;
  color?: string;
  startDelay?: number;
}

const FlashingChar = ({
  character = "|",
  className = "",
  blinkDuration = 0.5,
  color = "#FA2139",
  startDelay = 0,
}: FlashingCharProps) => {
  const charRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!charRef.current) return;

    // Set initial state
    gsap.set(charRef.current, { opacity: 1, color });

    // Apply start delay if specified
    const timeline = gsap.timeline({ delay: startDelay });

    // Create the blinking animation
    timeline.to(charRef.current, {
      opacity: 0,
      duration: blinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, [blinkDuration, color, startDelay]);

  return (
    <span
      ref={charRef}
      className={`flashing-char ${className}`}
      style={{ color }}
    >
      {character}
    </span>
  );
};

export default FlashingChar;

