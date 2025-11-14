"use client";
import TextType from "../components/TextType";
import MatrixRain from "../components/Matrix";
import LearnMoreButton from "../components/LearnMoreButton";

const Home = () => {
  const title = "Cornell Cybersecurity Club";
  const titleTypingSpeed = 97;
  const buttonDelay = title.length * titleTypingSpeed + 80;

  return (
    <>
      <MatrixRain fontSize={24} speed={0.3} fpsCap={60} />

      <section className="relative z-10 max-h-screen flex flex-col text-center px-6 mt-20">
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

        {/* <div>
          <img src="" alt="Team picture here" />
          <h3>Master cybersecurity skills and compete in CTFs with Cornell’s premier security & hacking club.</h3> 
        </div> */}

      </section>

    </>
  );
};

export default Home;
