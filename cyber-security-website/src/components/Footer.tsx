import { Link } from "react-router-dom";
import bearSticker from "../assets/bear_sticker.png";
import redDiscordLogo from "../assets/red_discord_logo.png";
import redGramLogo from "../assets/red_gram_logo.png";
import linkLogo from "../assets/link_logo.png";

type FooterProps = {
  /** When true, adds a solid black background behind the footer (used on Home only). */
  darkBackground?: boolean;
};

const Footer = ({ darkBackground = false }: FooterProps) => {
  return (
    <footer
      className={`w-full pb-10 z-1000 ${darkBackground ? "bg-black" : ""}`}
    >
      <hr className="border-t border-[#FF3B3B] my-4" />
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-5 justify-center mt-10">
        <img
          src={bearSticker}
          alt="image here"
          className="w-[150px] h-[150px] ml-20 mr-20"
        />
        <div className="w-full max-w-[500px] h-[200px] p-[10px]">
          <p className="text-[#FF3B3B] text-lg"> Connect </p>
          <p className="text-white">
            Stay connected with the latest Cornell Cybersecurity Club news and
            events
          </p>
          <div className="flex gap-10 mt-4">
            <img
              src={redDiscordLogo}
              alt="Discord"
              className="w-[40px] h-[40px]"
            />
            <img
              src={redGramLogo}
              alt="Instagram"
              className="w-[40px] h-[40px]]"
            />
            <img
              src={linkLogo}
              alt="LinkedIn"
              className="w-[40px] h-[40px]"
            />
          </div>
        </div>
        <div className="w-full max-w-[500px] h-[200px] p-[10px] md:ml-10">
          <p className="text-[#FF3B3B] text-lg"> Join </p>
          <Link to="/join">
            <p className="text-white underline"> New member intake</p>
          </Link>
        </div>
        <div className="w-full max-w-[500px] h-[200px] p-[10px]">
          <p className="text-[#FF3B3B] text-lg"> Contact </p>
          <Link to="/people">
            <p className="text-white underline"> Contact Us</p>
          </Link>
        </div>
      </div>
      <div className="text-center">
        <p className="text-white text-center">© 2025. All rights reserved.</p>
        <p className="text-white text-center">
          This organization is a registered student organization of Cornell
          University.
        </p>
        <a
          href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center underline"
        >
          Equal Education and Employment
        </a>
      </div>
    </footer>
  );
};

export default Footer;
