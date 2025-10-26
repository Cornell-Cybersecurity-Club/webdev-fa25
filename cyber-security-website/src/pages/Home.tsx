import TextType from "../components/TextType";

const Home = () => {
  return (
    <div className="page">
      <TextType
        text={["Cyber Security Club"]}
        typingSpeed={150}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"
      />
    </div>
  );
};

export default Home;
