const About = () => {
  return (
    <div className="text-center py-10 px-5">
      <h1 className="font-['Roboto_Mono'] text-white mb-5">About</h1>
      <p className="font-['Roboto_Mono'] text-[#e1dad3] text-lg">
        Learn more about the club. Summary 
      </p>

      <div>
        <div className="flex gap-5 justify-center mt-5">
          <div className="w-[500px] h-[200px] border-2 border-white p-[10px]">
            <p> NME </p>
          </div>
          <div className="w-[500px] h-[200px] border-2 border-white p-[10px]">
            <p> IME </p>
          </div>
        </div>
        <div className="w-[500px] h-[200px] border-2 border-white p-[10px] ml-80 mt-10">
          <p> Competition </p>
        </div>
        <div className="w-[500px] h-[200px] border-2 border-white p-[10px] ml-80 mt-10">
          <p> What is a CTF? </p>
        </div>
        <div className="flex gap-5 justify-center mt-5">
          <div className="w-[500px] h-[200px] border-2 border-white p-[10px]">
            <p> CTF Team </p>
          </div>
          <div className="w-[500px] h-[200px] border-2 border-white p-[10px]">
            <p> CCDC Team </p>
          </div>
        </div>
      </div>



    </div>

  );
};

export default About;