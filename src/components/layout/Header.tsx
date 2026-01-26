import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../utils/constants';
import './Header.css';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo" onClick={closeMenu}>
              <h1>{COMPANY_INFO.name}</h1>
              <p className="tagline">{COMPANY_INFO.tagline}</p>
            </Link>
            <button 
              className="menu-toggle" 
              onClick={toggleMenu}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
};
