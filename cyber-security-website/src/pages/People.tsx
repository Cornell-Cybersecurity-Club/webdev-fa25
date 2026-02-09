const People = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className="text-center py-10 px-5 max-w-4xl mx-auto">
        <h1 className="font-['Roboto_Mono'] text-white mb-5">People</h1>
        <p className="font-['Roboto_Mono'] text-[#e1dad3] text-lg">
          Meet our eboard
        </p>
      </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-5">
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[150px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Raman Khanal{" "}
            </p>
            <img
            src=""
            alt="image here"
            className="w-[150px] h-[180px] ml-20 mr-20 mt-20"
            />
            <p className="pl-15"> Major: </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-5"> 
                <img
                src="/mail_icon.jpg"
                alt="mail"
                className="w-[110px] h-[140px]"
                />
                <img
                src="/link2_icon.avif"
                alt="link icon here"
                className="w-[50px] h-[50px]"
                /> 
            </div>
          </div>
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Jakob Nacanaynay{" "}
            </p>
            <img
            src=""
            alt="image here"
            className="w-[150px] h-[180px] ml-20 mr-20 mt-20"
            />
            <p className="pl-15"> Major: </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-5"> 
                <img
                src="/mail_icon.jpg"
                alt="mail"
                className="w-[110px] h-[140px]"
                />
                <img
                src="/link2_icon.avif"
                alt="link icon here"
                className="w-[50px] h-[50px]"
                /> 
            </div>
          </div>
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Clarissa McGhee{" "}
            </p>
            <img
            src=""
            alt="image here"
            className="w-[150px] h-[180px] ml-20 mr-20 mt-20"
            />
            <p className="pl-15"> Major: </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-5"> 
                <img
                src="/mail_icon.jpg"
                alt="mail"
                className="w-[110px] h-[140px]"
                />
                <img
                src="/link2_icon.avif"
                alt="link icon here"
                className="w-[50px] h-[50px]"
                /> 
            </div>
          </div>
        </div>

    </div>
  );
};

export default People;
