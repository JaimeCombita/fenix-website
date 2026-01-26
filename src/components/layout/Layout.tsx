import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import './Layout.css';

export const Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    // Interceptar el botón del menú del Header
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      const handleClick = () => setMenuOpen(true);
      menuToggle.addEventListener('click', handleClick);
      return () => menuToggle.removeEventListener('click', handleClick);
    }
  }, []);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app-layout">
      <Header />
      <Navigation isOpen={menuOpen} onClose={handleCloseMenu} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
