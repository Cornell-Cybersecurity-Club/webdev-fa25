import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import FlashingChar from "./FlashingChar";

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

  const renderLabel = (label: string) => {
    return (
      <>
        <span className="bracket">[</span>
        {label.split("").map((ch, i) => (
          <span
            key={i}
            className="char"
            style={{ ["--i" as any]: i } as React.CSSProperties}
          >
            <span className="char-inner char-front">{ch}</span>
            <span className="char-inner char-back">{ch}</span>
          </span>
        ))}
        <span className="bracket">]</span>
      </>
    );
  };

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
              className={`nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              [{item.label}]
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
