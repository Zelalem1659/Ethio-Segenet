import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
function Header() {
  return (
    <header className="site-bg site-text shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Ethio Segenet Logo" className="site-logo rounded-full border-2" style={{ borderColor: '#FFD700' }} />
          <h1 className="text-2xl font-extrabold tracking-wide gold-text">
            Ethio Segenet
          </h1>
        </div>

        <nav className="space-x-6 text-lg font-medium">
          <Link to="/" className="link-gold">Home</Link>
          <Link to="/videos" className="link-gold">Videos</Link>
          <Link to="/about" className="link-gold">About</Link>
          <Link to="/contact" className="link-gold">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
