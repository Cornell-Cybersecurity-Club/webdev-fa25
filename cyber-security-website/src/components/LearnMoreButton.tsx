"use client";
import { Link } from "react-router-dom";
import TextType from "./TextType";

interface LearnMoreButtonProps {
  delay?: number;
}

const LearnMoreButton = ({ delay = 0 }: LearnMoreButtonProps) => {
  return (
    <TextType
      as={Link}
      to="/join"
      text={["Join us →"]}
      typingSpeed={90}
      initialDelay={delay}
      pauseDuration={0}
      loop={false}
      showCursor={false}
      className="cta-typed text-[#FA2139] underline underline-offset-2 hover:opacity-90 transition font-['Roboto_Mono']"
      aria-label="Learn about us"
    />
  );
};

export default LearnMoreButton;
