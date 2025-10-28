"use client";
import TextType from "../components/TextType";
import MatrixRain from "../components/Matrix";
import LearnMoreButton from "../components/LearnMoreButton";

const Home = () => {

  const title = "Cornell Cybersecurity Club";
  const titleTypingSpeed = 95;
  const buttonDelay = title.length * titleTypingSpeed + 0;

  return (
    <>
      <MatrixRain fontSize={24} speed={0.3} fpsCap={60} />

      <section className="relative z-10 min-h-screen flex flex-col text-center px-6 mt-30">
        <div className="flex flex-col items-center">
          <TextType
            text={[title]}
            typingSpeed={titleTypingSpeed}
            pauseDuration={0}
            loop={false}
            showCursor={true}
            cursorCharacter="_"
            className="hero-title font-['Roboto_Mono'] text-white mb-2 mt-32"
          />

          <LearnMoreButton delay={buttonDelay} />
        </div>
      </section>

    </>
  );
};

export default Home;