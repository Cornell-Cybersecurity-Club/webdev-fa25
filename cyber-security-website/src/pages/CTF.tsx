import Footer from "../components/Footer";

const CTF = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className="text-center py-10 px-5 max-w-4xl mx-auto">
        <h1 className="font-['Roboto_Mono'] text-white mb-5">CTF</h1>
        <p className="font-['Roboto_Mono'] text-[#e1dad3] text-lg">
          Capture The Flag challenges
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CTF;
