const People = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className="text-center py-10 px-5 max-w-4xl mx-auto">
      <h1 className="mt-12 font-['Roboto_Mono'] text-[#E1DAD3] text-4xl mb-10 flex items-center justify-center gap-0.5">
        meet our team
        <span className="cursor-blink text-[#FA2139]">_</span>
      </h1>
      </div>

     
        <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-5">
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[140px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Raman Khanal{" "}
            </p>
            <img
            src="raman_headshot.jpg"
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: Computer Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2"> 
                <a href="mailto:rk677@cornell.edu">
                  <img
                  src="/mail_icon2.jpg"
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/ramankhanal/" target="_blank" rel="noopener noreferrer">
                  <img
                  src="/link2_icon.avif"
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  /> 
                </a>
            </div>
            <p className="absolute -bottom-[15px] left-3/4 -translate-x-1/2 bg-[#000000] text-white w-[100px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              President{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Jakob Nacanaynay{" "}
            </p>
            <img
            src="jakob_headshot.png"
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-30 mt-4"> Major: ECE</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center"> 
                <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2"> 
                <a href="mailto:jn567@cornell.edu">
                  <img
                  src="/mail_icon2.jpg"
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/jakob-nacanaynay-a93706213" target="_blank" rel="noopener noreferrer">
                  <img
                  src="/link2_icon.avif"
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  /> 
                </a>
            </div>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[160px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Vice President{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[150px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Cam Mazzacane{" "}
            </p>
            <img
            src=""
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: </p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2"> 
                <a href="mailto:">
                  <img
                  src="/mail_icon2.jpg"
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                  src="/link2_icon.avif"
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  /> 
                </a> 
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[100px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Treasurer{" "}
            </p>
          </div>
        </div>


        <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-5">
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Clarissa McGhee{" "}
            </p>
            <img
            src="headshot.jpg"
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: Computer Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2"> 
                <a href="mailto:cm2259@cornell.edu">
                  <img
                  src="/mail_icon2.jpg"
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/clarissa-mcghee" target="_blank" rel="noopener noreferrer">
                  <img
                  src="/link2_icon.avif"
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  /> 
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[100px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Secretary{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Andrew Visconti{" "}
            </p>
            <img
            src="sideheadshot.png"
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3" 
            />
            <p className="pl-11 mt-4"> Major: Information Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2
            "> 
                <a href="mailto:acv49@cornell.edu">
                  <img
                  src="/mail_icon2.jpg"
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/andrewvisconti/" target="_blank" rel="noopener noreferrer">
                  <img
                  src="/link2_icon.avif"
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  /> 
                </a> 
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[130px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Recruitment{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[140px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Parth Mittal{" "}
            </p>
            <img
            src="parth_headshot.jpg"
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: Computer Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2"> 
                <a href="mailto:pm653@cornell.edu">
                  <img
                  src="/mail_icon2.jpg"
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/parth-mittal-o6/" target="_blank" rel="noopener noreferrer">
                  <img
                  src="/link2_icon.avif"
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  /> 
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[210px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              New Member Education{" "}
            </p>
          </div>
        </div>


        <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-5">
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[135px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Bill Nguyen{" "}
            </p>
            <img
            src="bill_headshot2.jpg"
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-10 mt-4"> Major: Chemical Engineering</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2"> 
                <a href="mailto:nn347@cornell.edu">
                  <img
                  src="/mail_icon2.jpg"
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/bill-nguyen-0b1878333/" target="_blank" rel="noopener noreferrer">
                  <img
                  src="/link2_icon.avif"
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  /> 
                </a> 
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[140px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Competitions{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[165px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Will Rosenthal{" "}
            </p>
            <img
            src=""
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: </p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2"> 
                <a href="mailto:">
                  <img
                  src="/mail_icon2.jpg"
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                  src="/link2_icon.avif"
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  /> 
                </a> 
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Public Relations{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[140px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Buster Coden{" "}
            </p>
            <img
            src=""
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: Computer Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2"> 
                <a href="mailto:bc678@cornell.edu">
                  <img
                  src="/mail_icon2.jpg"
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/buster-coden" target="_blank" rel="noopener noreferrer">
                  <img
                  src="/link2_icon.avif"
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  /> 
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[210px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Events & Operations{" "}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-5">
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[140px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Jack Britton{" "}
            </p>
            <img
            src=""
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-30 mt-4"> Major: ILR</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center"> 
                <a href="mailto:jxb4@cornell.edu">
                  <img
                  src="/mail_icon2.jpg"
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/jack-britton-a93282245" target="_blank" rel="noopener noreferrer">
                  <img
                  src="/link2_icon.avif"
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  /> 
                </a> 
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[210px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Events & Operations{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[200px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Alexander Schneider{" "}
            </p>
            <img
            src="alex_headshot.jpg"
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: Computer Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center"> 
                <a href="mailto:as4276@cornell.edu">
                  <img
                  src="/mail_icon2.jpg"
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/alexander-schneider-95376a2b2/" target="_blank" rel="noopener noreferrer">
                  <img
                  src="/link2_icon.avif"
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  /> 
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              External Affairs{" "}
            </p>
          </div>
        </div>

    </div>
  );
};

export default People;
