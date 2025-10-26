import TextType from "../components/TextType";

const Home = () => {
  return (
    <div className="text-center py-10 px-5">
      <div>
        <TextType
          text={["Cyber Security Club"]}
          typingSpeed={150}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
      </div>
    </div>
  );
};

export default Home;
