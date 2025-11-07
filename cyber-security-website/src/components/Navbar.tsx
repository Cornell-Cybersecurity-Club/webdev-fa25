import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import FlashingChar from "./FlashingChar";
import TargetCursor from "./TargetCursor";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/join", label: "join" },
    { path: "/people", label: "people" },
    { path: "/contact", label: "contact" },
    { path: "/ctf", label: "CTF" },
  ];

  // We intentionally render labels inline below (keeps markup simpler for cursor targets)

  return (
    <nav className="navbar">
      <div className="flex justify-between w-full">
        <p>
          cornellcyber{location.pathname}
          <FlashingChar character="_"></FlashingChar>
        </p>

        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link cursor-target ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              [{item.label}]
            </Link>
          ))}
        </div>
      </div>
      {/* snappy target cursor for navbar items */}
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={0.8}
        hideDefaultCursor={true}
        hoverDuration={0.06}
        parallaxOn={false}
      />
    </nav>
  );
};

export default Navbar;
