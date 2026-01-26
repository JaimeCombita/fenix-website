import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Solicitar Cotización',
  ctaLink = '/contacto',
  backgroundImage
}) => {
  return (
    <section 
      className="hero" 
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h2 className="hero-title">{title}</h2>
        <p className="hero-subtitle">{subtitle}</p>
        <Link to={ctaLink}>
          <Button variant="primary" size="lg">
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
};
