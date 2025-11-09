const About = () => {
  return (
    <div className="text-center py-10 px-5">
      <h1 className="font-['Roboto_Mono'] text-white mb-5">About</h1>
      <p className="font-['Roboto_Mono'] text-[#e1dad3] text-lg">
        Learn more about the club. Summary 
      </p>

      <div>
        <div className="flex gap-5 justify-center items-center mt-5">
          <div className="relative w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#101110] text-[#FF3B3B] w-[40px] text-lg"> NME </p>
            <p> Description Here</p>
          </div>
          <div className="relative w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#101110] text-[#FF3B3B] w-[40px] text-lg"> IME </p>
            <p> Description Here</p>
          </div>
        </div>


        <div className="flex flex-col items-center mt-5"> 
          <div className="flex items-center justify-center gap-5 mt-2"> 
            <img src="" alt="Picture here" className="w-[80px] h-[80px] mr-30"/>
            <div className="w-[500px] h-[240px] border-2 p-[10px] bg-[#E1DAD3] rounded-lg flex flex-col items-center">
              <div className="flex justify-center items-center w-[120px] h-[30px] border-2 border-black mt-2 bg-[#FF0000]/50">
                <p className="text-center text-black"> Competition </p>
              </div>
            <div>
              <p className="text-center text-black mt-10"> One of our greatest purposes is to compete in global hacking competitions known as CTFs. Members compete in practice competitions and real events.</p>
            </div>
            </div> 
            <img src="" alt="Picture here" className="w-[80px] h-[80px] ml-30"/>
          </div>

          <div className="flex items-center justify-center gap-5 mt-2"> 
            <img src="" alt="Picture here" className="w-[80px] h-[80px] mr-30"/>
            <div className="w-[500px] h-[240px] border-2 p-[10px] bg-[#E1DAD3] rounded-lg flex flex-col items-center mt-5">
              <div className="flex justify-center items-center w-[150px] h-[30px] border-2 border-black mt-2 bg-[#FF0000]/50">
                <p className="text-center text-black"> What is a CTF? </p>
              </div>
              <div>
                <p className="text-center text-black mt-4"> "In cybersecurity, Capture the Flag (CTF) competitions are exercises in which participants, either individually or as part of a team, are challenged to find and exploit vulnerabilities in a system to capture a 'flag' or piece of information" (Filipkowski, 2024, p. 3).</p>
              </div>
              </div> 
            <img src="" alt="Picture here" className="w-[80px] h-[80px] ml-30"/>
            </div>
        </div>


        <div className="flex gap-5 justify-center mt-5">
          <div className="relative w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#101110] text-[#FF3B3B] w-[100px] text-lg"> CTF Team </p>
            <p> Description Here</p>
          </div>
          <div className="relative w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#101110] text-[#FF3B3B] w-[110px] text-lg"> CCDC Team </p>
            <p> Description Here</p>
          </div>
        </div>
      </div>



    </div>

  );
};

export default About;