const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#0A0A0A] text-[#E1DAD3] flex flex-col items-center pt-20">

      {/* Red box with the requested content */}
      <section className="w-full flex justify-center py-8 mb-8">
        <div className="bg-[#FA2136] rounded-xl px-10 py-12 text-center max-w-2xl w-full">
          <h2 className="text-4xl text-[#0A0A0A] font-['Roboto_Mono'] text-left">What is the Cybersecurity Club?</h2>
        </div>
      </section>

      {/* About Us section from remote */}
      <div className="flex gap-5 justify-center items-center mt-5">
          <div className="relative w-[700px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#0A0A0A] text-[#FF3B3B] w-[100px] text-lg font-['Roboto_Mono']"> About Us </p>
            <p className="mt-8"> We are Cornell University's only student organization for cybersecurity, offering an exhaustive cybersecurity curriculum for both beginners and experienced individuals. Topics range from binary exploitation to cryptography, reverse engineering, and more.</p>
          </div>
          <img src="" alt="Picture here" className="w-[200px] h-[80px] ml-30"/>
        </div>

      <h2 className="text-3xl tracking-wide mb-8 mt-5 font-['Roboto_Mono']">What We Do</h2>
      <div className="flex flex-col items-center mt-5"> 
          <div className="flex items-center justify-center gap-5 mt-2"> 
            <img src="" alt="Picture here" className="w-[80px] h-[80px] mr-30"/>
            <div className="w-[500px] h-[180px] border-2 p-[10px] bg-[#E1DAD3] rounded-lg flex flex-col items-center">
              <div className="flex justify-center items-center w-[120px] h-[30px] border-2 border-black mt-2 bg-[#FF0000]/50">
                <p className="text-center text-black"> Education </p>
              </div>
            <div>
              <p className="text-center text-black mt-6"> We host weekly technical workshops for our members to learn new skills and put their knowledge to the test.</p>
            </div>
            </div> 
            <img src="" alt="Picture here" className="w-[80px] h-[80px] ml-30"/>
          </div>
        </div>

      <div>
        <div className="flex gap-5 justify-center items-center mt-5">
          <div className="relative w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#0A0A0A] text-[#FF3B3B] w-[40px] text-lg font-['Roboto_Mono']"> NME </p>
            <p> Description Here</p>
          </div>
          <div className="relative w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#0A0A0A] text-[#FF3B3B] w-[40px] text-lg font-['Roboto_Mono']"> IME </p>
            <p> Description Here</p>
          </div>
        </div>


        <div className="flex flex-col items-center mt-5"> 
          <div className="flex items-center justify-center gap-5 mt-2"> 
            <img src="" alt="Picture here" className="w-[80px] h-[80px] mr-30"/>
            <div className="w-[500px] h-[200px] border-2 p-[10px] bg-[#E1DAD3] rounded-lg flex flex-col items-center">
              <div className="flex justify-center items-center w-[120px] h-[30px] border-2 border-black mt-2 bg-[#FF0000]/50">
                <p className="text-center text-black"> Competition </p>
              </div>
            <div>
              <p className="text-center text-black mt-6"> One of our greatest purposes is to compete in global hacking competitions known as CTFs. Members compete in practice competitions and real events.</p>
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


        <div className="flex gap-5 justify-center mt-10">
          <div className="relative w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#0A0A0A] text-[#FF3B3B] w-[100px] text-lg font-['Roboto_Mono']"> CTF Team </p>
            <p> Description Here</p>
          </div>
          <div className="relative w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#0A0A0A] text-[#FF3B3B] w-[110px] text-lg font-['Roboto_Mono']"> CCDC Team </p>
            <p> Description Here</p>
          </div>
        </div>
      </div>



      <div className="w-full min-h-screen text-[#E1DAD3] flex flex-col items-center">

        {/* --- JOIN SECTION --- */}
        <section className="w-full flex justify-center py-20">
          <div className="bg-[#FA2136] rounded-xl px-10 py-12 text-center max-w-2xl w-full">
            <h2 className="text-xl text-[#0A0A0A] tracking-wide mb-6">READY TO JOIN?</h2>
            <button className="bg-[#D9D9D9] text-[#FA2136] px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Join Us
            </button>
          </div>
        </section>

        {/* --- GALLERY PLACEHOLDER SECTION --- */}
        <section className="w-11/12 md:w-4/5 lg:w-3/5 h-64 bg-[#D9D9D9] text-[#0A0A0A] rounded-md flex items-center justify-center mb-8">
          <p className="tracking-wide text-sm">Gallery of pictures??</p>
        </section>

        {/* --- FEATURED EVENTS --- */}
        <section className="w-full flex flex-col items-center pb-10">
          <h2 className="text-3xl tracking-wide mb-8 font-['Roboto_Mono']">Featured Events</h2>

          <div className="w-11/12 md:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Card 1 */}
              <div className=" relative border border-[#E1DAD3] rounded-xl p-6 min-h-[200px]">
              <h3 className="absolute -top-[15px] bg-[#0A0A0A] text-[#FA2136] mb-3 font-semibold tracking-wide w-[50px] font-['Roboto_Mono']">ISTS</h3>
              <p className="text-[#E1DAD3] text-sm">Description Here</p>
            </div>

            {/* Card 2 */}
            <div className="relative border border-[#E1DAD3] rounded-xl p-6 min-h-[200px]">
              <h3 className="absolute -top-[15px] bg-[#0A0A0A] text-[#FA2136] mb-3 font-semibold tracking-wide w-[320px] font-['Roboto_Mono']">
                NYC Collegiate Security Meetup
              </h3>
              <p className="text-[#E1DAD3] text-sm">Description Here</p>
            </div>

          </div>
        </section>
        <h2 className="text-3xl tracking-wide mb-8 font-['Roboto_Mono']">Core Values</h2>

      </div>

    </div>

  );
};

export default About;