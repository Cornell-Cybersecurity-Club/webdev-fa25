import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "home" },
    { path: "/join", label: "join" },
    { path: "/people", label: "people" },
    { path: "/contact", label: "contact" },
    { path: "/ctf", label: "CTF" },
  ];

  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default Navbar;
