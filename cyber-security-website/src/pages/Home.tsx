"use client";
import { useRef, useEffect, useState } from "react";
import TextType from "../components/TextType";
import MatrixRain from "../components/Matrix";
import LearnMoreButton from "../components/LearnMoreButton";

const Home = () => {
  const title = "Cornell Cybersecurity Club";
  const titleTypingSpeed = 97;
  const buttonDelay = title.length * titleTypingSpeed + 80;
  // const sectionRef = useRef<HTMLElement>(null);
  // const [maxHeight, setMaxHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const updateMaxHeight = () => {
  //     if (sectionRef.current) {
  //       const sectionHeight = sectionRef.current.offsetHeight;
  //       setMaxHeight(window.innerHeight + sectionHeight);
  //     }
  //   };

  //   // Initial measurement
  //   updateMaxHeight();

  //   // Update on window resize
  //   window.addEventListener("resize", updateMaxHeight);

  //   // Use ResizeObserver to watch for section size changes
  //   const resizeObserver = new ResizeObserver(() => {
  //     updateMaxHeight();
  //   });

  //   if (sectionRef.current) {
  //     resizeObserver.observe(sectionRef.current);
  //   }

  //   return () => {
  //     window.removeEventListener("resize", updateMaxHeight);
  //     resizeObserver.disconnect();
  //   };
  // }, []);

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden z-0 pointer-events-none">
        <MatrixRain fontSize={24} speed={0.3} fpsCap={60} />
      </div>

      <section
        // ref={sectionRef}
        className="relative flex flex-col text-center mt-20 mx-auto z-10"
      >
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

        <div className="flex flex-col md:flex-row items-center gap-6 pt-[400px] text-center max-w-6xl mx-auto">
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
      </section>
    </div>
  );
};

export default Home;
