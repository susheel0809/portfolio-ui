import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // if you installed lucide-react

export default function NavBar() {
  return (
    <nav className="navbar shadow-sm">
      <div className="navbar-inner">
        {/* Logo / Brand */}
        <Link to="/" className="navbar-logo">
          MyPortfolio
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links hidden md:flex">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/projects" className="hover:text-black">Projects</Link>
          <Link to="/contact" className="hover:text-black">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="nav-toggle md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
