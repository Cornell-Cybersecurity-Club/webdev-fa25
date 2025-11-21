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
    { path: "/events", label: "events" },
    { path: "/sponsorship", label: "sponsorship" },
  ];

  return (
    <nav className="navbar">
      <div className="flex justify-between w-full">
        <p>
          cornellcyber{location.pathname}
          <FlashingChar character="_" />
        </p>
        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              [{item.label}]
            </Link>
          ))}
          
            href="https://github.com/your-org-name"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          <a>
            [education]
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;