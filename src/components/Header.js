import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import MegaMenu from './MegaMenu';

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target) || (buttonRef.current && buttonRef.current.contains(e.target))) return;
      setOpenDropdown(false);
    }

    function onKey(e) {
      if (e.key === 'Escape') setOpenDropdown(false);
    }

    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClickOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // detect small screens and handle mobile menu toggle
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    function onChange(e) {
      if (!e.matches) {
        setMobileMenuOpen(false);
      }
    }
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  return (
  <header className="site-header site-text shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* === Logo + Title === */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Ethio 360 Logo"
            className="rounded-full border-2"
            style={{ borderColor: "#FFD700", width: "60px", height: "60px" }}
          />
          <h1 className="text-2xl font-extrabold tracking-wide gold-text">
            Ethio 360
          </h1>
        </div>

        {/* === Navigation Bar (horizontal order: Home, Contact, About, News with mega menu) === */}
        <nav className="flex items-center space-x-8 text-lg font-medium relative">
          <Link to="/" className="link-gold hover:text-yellow-400">
            Home
          </Link>
          <Link to="/contact" className="link-gold hover:text-yellow-400">
            Contact
          </Link>
          <Link to="/about" className="link-gold hover:text-yellow-400">
            About
          </Link>

          <div className="relative">
            <button
              ref={buttonRef}
              className="link-gold hover:text-yellow-400 focus:outline-none"
              onClick={() => {
                if (window.matchMedia('(max-width: 768px)').matches) {
                  setMobileMenuOpen(true);
                } else {
                  setOpenDropdown((s) => !s);
                }
              }}
              aria-haspopup="true"
              aria-expanded={openDropdown || mobileMenuOpen}
              aria-controls="mega-menu"
            >
              News
            </button>

            {openDropdown && !mobileMenuOpen && (
              <div ref={menuRef} className="absolute right-0 mt-2 w-[760px] z-50" id="mega-menu" role="menu">
                <MegaMenu />
              </div>
            )}

            {mobileMenuOpen && (
              <MegaMenu mobile={true} onClose={() => setMobileMenuOpen(false)} />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
