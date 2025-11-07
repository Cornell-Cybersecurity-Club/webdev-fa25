const About = () => {
  return (


    <div className="w-full min-h-screen bg-[#0A0A0A] text-[#E1DAD3] flex flex-col items-center pt-20">

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
        <h2 className="text-3xl tracking-wide mb-8">Featured Events</h2>

        <div className="w-11/12 md:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Card 1 */}
            <div className="border border-[#E1DAD3] rounded-xl p-6 min-h-[200px]">
            <h3 className="text-[#FA2136] mb-3 font-semibold tracking-wide">ISTS</h3>
            <p className="text-[#E1DAD3] text-sm">Description Here</p>
          </div>

          {/* Card 2 */}
          <div className="border border-[#E1DAD3] rounded-xl p-6 min-h-[200px]">
            <h3 className="text-[#FA2136] mb-3 font-semibold tracking-wide">
              NYC Collegiate Security Meetup
            </h3>
            <p className="text-[#E1DAD3] text-sm">Description Here</p>
          </div>

        </div>
      </section>
    </div>
    );
    }

export default About;