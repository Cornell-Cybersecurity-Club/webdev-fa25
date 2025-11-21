import Footer from "../components/Footer";

const Join = () => {
  return (
    <div className="flex flex-col items-center text-center relative pt-20">
      <h1 className="mt- 50 font-['Roboto_Mono'] text-[#CBC6C6] text-5xl mb-10">
        become a cybear?
      </h1>
      <div className="relative mt-30 w-[600px] h-[300px]">
        <div
          className="absolute left-1/2 top-1/2 w-[100px] h-[100px] rounded-full bg-[#A18F8F] border-[5px] border-[#A00000] origin-bottom"
          style={{
            transform: "rotate(250deg) translateY(-520px) translateX(-10px)",
          }}
        ></div>

        <div
          className="absolute left-1/2 top-1/2 w-[100px] h-[100px] rounded-full bg-[#736A6A] border-[5px] border-[#A00000] origin-bottom"
          style={{
            transform: "rotate(10deg) translateY(-240px) translateX(-50px)",
          }}
        ></div>

        <div
          className="absolute left-1/2 top-1/2 w-[100px] h-[100px] rounded-full bg-[#736A6Agit] border-[5px] border-[#A00000] origin-bottom"
          style={{
            transform:
              "rotate(100deg) translateY(-460px) translateX(20px) translateX(50px)",
          }}
        ></div>

        <div
          className="absolute left-1/2 top-1/2 w-[100px] h-[100px] rounded-full bg-[#D9D9D9] border-[5px] border-[#A00000] origin-bottom"
          style={{
            transform: "rotate(60deg) translateY(-300px) translateX(-20px)",
          }}
        ></div>

        <div
          className="absolute left-1/2 top-1/2 w-[100px] h-[100px] rounded-full bg-[#736A6A] border-[5px] border-[#A00000] origin-bottom"
          style={{ transform: "rotate(300deg) translateY(-340px)" }}
        ></div>
      </div>
      <div className="mt--5 w-[600px] h-[300px] bg-[#494141] rounded-t-full border-[30px] border-b-0 border-[#A00000] overflow-hidden"></div>
      <Footer />
    </div>
  );
};

export default Join;
