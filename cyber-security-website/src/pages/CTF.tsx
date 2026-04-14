import cybearFlyer from "../assets/cybear_day.png";

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
            <h3 className="text-red-400 text-lg font-bold">CyBear Day</h3>

            <p className="text-sm text-gray-400 mb-4">14 April 2026</p>


            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2"> 
              <p className="text-gray-300 mb-4 mt-5">Get excited for a day of fun hacking at Cornell Cyber's first annual CyBear day! Compete in Jeopardy style or RvB competitions and win prizes! Food is provided.</p>
              <a href="https://cglink.me/2ee/r2301185" className="text-red-500">Register Here</a>
              <img src={cybearFlyer} alt="CyBear Day Flyer" className="object-cover" />
            </div>
          </div>
        </div>

        {/* Archived Events */}
        {/*
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
        */}
      </div>
    </div>
  );
};

export default CTF;
