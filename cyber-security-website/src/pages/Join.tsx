import Footer from "../components/Footer";

const Join = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col items-center text-center relative pt-20">
      <h1 className="mt- 50 font-['Roboto_Mono'] text-[#CBC6C6] text-5xl mb-10">
        become a cybear?
      </h1>
      
      {/* Main container for bear, circles, lines, and semi-circle */}
      <div className="relative w-[600px] h-[600px] flex items-end justify-center">
        {/* Bear image - positioned so only head (chin up) peeks out, behind semicircle */}
        <img
          src="/cybear.jpeg"
          alt="Cybear mascot"
          className="absolute left-1/2 bottom-[95px] -translate-x-1/2 z-10 w-[400px] h-auto object-contain"
        />
        
        {/* Circles - using absolute positioning with calculated coordinates */}
        {/* Center point: (300px, 0) relative to container */}
        {/* Each circle at radius 550px from center */}
        {/* Starting at -70deg (20deg above horizontal) to avoid touching bottom */}
        {/* Ending at 70deg, spanning 140deg total with even 23.33deg spacing */}
        
        {[
          { angle: -70, date: '08/28', bg: '#A18F8F' },
          { angle: -46.67, date: '10/26', bg: '#8B7E7E' },
          { angle: -23.33, date: '10/30', bg: '#736A6A' },
          { angle: 0, date: '09/15', bg: '#B8B8B8' },
          { angle: 23.33, date: '11/05', bg: '#6B5F5F' },
          { angle: 46.67, date: '12/15', bg: '#857777' },
          { angle: 70, date: '01/20', bg: '#7A6E6E' },
        ].map(({ angle, date, bg }) => {
          const rad = (angle * Math.PI) / 180;
          const radius = 550;
          const circleSize = 120;
          const halfCircle = circleSize / 2;
          
          // Calculate position from center (300, 0)
          const left = 300 + radius * Math.sin(rad) - halfCircle;
          const bottom = radius * Math.cos(rad) - halfCircle;
          
          return (
            <div
              key={angle}
              className="absolute w-[120px] h-[120px] rounded-full border-[5px] border-[#A00000] flex items-center justify-center z-10"
              style={{
                left: `${left}px`,
                bottom: `${bottom}px`,
                backgroundColor: bg,
              }}
            >
              {date && (
                <span className="font-['Roboto_Mono'] text-white text-base">
                  {date}
                </span>
              )}
            </div>
          );
        })}

        {/* Semi-circle status display - positioned on top */}
        <div className="relative w-[600px] h-[300px] bg-[#494141] rounded-t-full border-[30px] border-b-0 border-[#A00000] overflow-hidden z-20 flex flex-col items-center justify-center">
          <p className="font-['Roboto_Mono'] text-[#CBC6C6] text-xl mb-2">applications...</p>
          <p className="font-['Roboto_Mono'] text-[#CBC6C6] text-xl">
            status: <span className="text-[#00FF00]">open</span>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Join;
