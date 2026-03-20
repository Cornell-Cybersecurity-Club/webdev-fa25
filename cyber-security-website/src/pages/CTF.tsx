const CTF = () => {
  return (
    // Full-width page breakout (keeps working even inside a max-w layout)
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen min-h-screen bg-black text-white font-['Roboto_Mono']">
      <div className="px-6 py-12 max-w-6xl mx-auto">
        {/* Dare to Hack Section */}
        <div className="bg-[#d64040] rounded-xl py-10 mb-16 mt-16 text-center">
          <h2 className="text-xl mb-4">Dare to Hack?</h2>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
            CTFs
          </button>
        </div>

        {/* Planned Events */}
        <h2 className="text-3xl mb-8 text-center">Planned Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="border border-gray-400 rounded-xl p-6">
            <h3 className="text-red-400 text-lg font-bold">CCDC</h3>

            <p className="text-sm text-gray-400 mb-4">6/7/25</p>


            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2"> 
              <p className="text-gray-300 mb-4 mt-5">The Collegiate Cyber Defense Competition (CCDC) 
              is a high-stakes blue teaming competition where teams defend simulated compromised 
              corporate networks against live hackers (red team). CCDC emphasizes defensive 
              practices and real world security practices. Teams also have to complete real-world 
              business and administrative tasks called injects while defending against the 
              constant red team attacks. It tests system administration and incident response 
              under real-world conditions.</p>
            </div>
          </div>

          <div className="border border-gray-400 rounded-xl p-6">
            <h3 className="text-red-400 text-lg font-bold">
              ISTS
            </h3>
            <p className="text-sm text-gray-400 mb-4">6/7/25</p>
            <p className="text-gray-300 mb-4">The Information Security Talent Search (ISTS) competition is a 
              purple teaming event hosted by RITSEC. At ISTS, teams not only defend infrastructure from an 
              active red team similar to a traditional blue teaming event, but it also allows teams to attack 
              other blue teams as well. ISTS also includes Capture the Flag (CTF) and King of the Hill (KotH) 
              challenges. This multi-layered format forces participants to demonstrate a holistic mastery of 
              cybersecurity, simultaneously managing enterprise-grade defense, strategic offense, and 
              technical writing under pressure.</p>
          </div>
        </div>

        {/* Archived Events */}
        <h2 className="text-3xl mb-8 text-center">Archived Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-400 rounded-xl p-6">
            <h3 className="text-red-400 text-lg font-bold">Name</h3>
            <p className="text-sm text-gray-400 mb-4">6/7/25</p>
            <p className="text-gray-300 mb-4">Description Here</p>
            <div className="w-24 h-24 bg-gray-300" />
          </div>

          <div className="border border-gray-400 rounded-xl p-6">
            <h3 className="text-red-400 text-lg font-bold">Name</h3>
            <p className="text-sm text-gray-400 mb-4">6/7/25</p>
            <p className="text-gray-300 mb-4">Description Here</p>
            <div className="w-24 h-24 bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTF;
