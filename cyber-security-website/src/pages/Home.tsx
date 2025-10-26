import TextType from "../components/TextType";

const Home = () => {
  return (
    <div className="page flex justify-center mt-7">
      <TextType
        text={["Cornell Cybersecurity Club"]}
        typingSpeed={150}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"
      />
    </div>
  );
};

export default Home;
