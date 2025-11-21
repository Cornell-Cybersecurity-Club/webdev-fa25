import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import FlashingChar from "./FlashingChar";

type TargetCursorProps = {
  targetSelector: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  parentSelector?: string;
  hoverDuration?: number;
  parallaxOn?: boolean;
};

/**
 * Minimal no-op TargetCursor placeholder to satisfy imports and types.
 * Replace with the real implementation in src/components/TargetCursor.tsx when available.
 */
const TargetCursor = (_props: TargetCursorProps) => {
  return null;
};

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
          
          <a>
            [education]
          </a>
        </div>
      </div>
      {/* snappy target cursor for navbar items */}
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={0.8}
        hideDefaultCursor={true}
        parentSelector=".navbar"
        hoverDuration={0.06}
        parallaxOn={false}
      />
    </nav>
  );
};

export default Navbar;