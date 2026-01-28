import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../utils/constants';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>{COMPANY_INFO.name}</h3>
            <p className="footer-tagline">{COMPANY_INFO.tagline}</p>
            <p className="footer-description">
              Soluciones de calidad para el sector público y privado
            </p>
            <div className="footer-social">
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={COMPANY_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/sobre-empresa">Sobre Nosotros</Link></li>
              <li><Link to="/catalogo">Catálogo</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/proyectos">Proyectos</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Soporte</h4>
            <ul className="footer-links">
              <li><Link to="/politicas#garantias">Garantías</Link></li>
              <li><Link to="/politicas#terminos">Términos y Condiciones</Link></li>
              <li><Link to="/politicas#privacidad">Privacidad</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-phone"></i>
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>{COMPANY_INFO.schedule}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 {COMPANY_INFO.fullName}. NIT: {COMPANY_INFO.nit}. 
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
