"use client";
import TextType from "../components/TextType";
import MatrixRain from "../components/Matrix";
import LearnMoreButton from "../components/LearnMoreButton";
import Footer from "@/components/Footer";

const Home = () => {
  const title = "Cornell Cybersecurity Club";
  const titleTypingSpeed = 97;
  const buttonDelay = title.length * titleTypingSpeed + 80;

  return (
    <div >
      <MatrixRain fontSize={24} speed={0.3} fpsCap={60} />

      <section className="relative flex flex-col text-center px-6 mt-20 cg- max-w-6xl mx-auto">
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

        <div className="flex flex-col md:flex-row items-center gap-6 pt-[400px] text-center">
          <img
            src="src/img/fa-25-teamphoto.jpeg"
            alt="FA25 Cybersecurity Team Photo"
            className="mx-auto w-3/5 max-w-[800px] rounded-2xl pb-15"
          />

          <h3 className="mt-6 text-lg pb-15 md:text-left md:ml-6">
            Master cybersecurity skills and compete in CTFs with Cornell’s
            premier security & hacking club.
          </h3>
        </div>
        <div className="w-screen m-auto -translate-x-23">
          <Footer darkBackground />
        </div>
      </section>
    </div>
  );
};

export default Home;
