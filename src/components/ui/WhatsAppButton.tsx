import React from 'react';
import { COMPANY_INFO } from '../../utils/constants';
import './WhatsAppButton.css';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open(COMPANY_INFO.social.whatsapp, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      className="whatsapp-float-button" 
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      title="Chatea con nosotros"
    >
      <i className="fab fa-whatsapp"></i>
    </button>
  );
};
