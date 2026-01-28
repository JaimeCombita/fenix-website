import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui';
import './About.css';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Sobre Fénix</h1>
          <p className="about-subtitle">
            Líderes en mobiliario institucional con más de 15 años de experiencia
          </p>
        </div>
      </section>

      <section className="section history-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-image">
              <div className="image-placeholder">
                <i className="fas fa-building fa-5x"></i>
              </div>
            </div>
            <div className="content-text">
              <h2>Nuestra Historia</h2>
              <p>
                Fundada en 2010, Fénix nació con la visión de transformar espacios 
                institucionales a través de mobiliario de alta calidad y diseño funcional. 
                Desde nuestros inicios, nos hemos especializado en atender las necesidades 
                específicas del sector público y privado en Colombia.
              </p>
              <p>
                A lo largo de estos años, hemos participado exitosamente en más de 200 
                licitaciones públicas, suministrando mobiliario para entidades educativas, 
                gubernamentales y empresas de diferentes sectores.
              </p>
              <p>
                Hoy somos reconocidos como uno de los proveedores más confiables del país, 
                con presencia en más de 15 departamentos y un equipo comprometido con la 
                excelencia en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Misión</h3>
              <p>
                Proveer soluciones de mobiliario institucional de alta calidad que 
                mejoren la productividad y el bienestar en espacios educativos, 
                laborales y gubernamentales, cumpliendo con los más altos estándares 
                de fabricación y servicio.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Visión</h3>
              <p>
                Ser reconocidos como la empresa líder en mobiliario institucional 
                en Colombia para 2030, expandiendo nuestra presencia a nivel nacional 
                e internacional, siendo referentes en innovación, calidad y 
                sostenibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <p className="section-subtitle">Los principios que guían nuestro trabajo diario</p>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Calidad</h4>
              <p>Compromiso con la excelencia en cada producto y servicio</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Confianza</h4>
              <p>Relaciones transparentes y duraderas con nuestros clientes</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h4>Sostenibilidad</h4>
              <p>Procesos responsables con el medio ambiente</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4>Innovación</h4>
              <p>Constante evolución en diseño y tecnología</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Trabajo en equipo</h4>
              <p>Colaboración y compromiso en cada proyecto</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h4>Excelencia</h4>
              <p>Superación continua en todos nuestros procesos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <h2 className="section-title">Fénix en Números</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">Licitaciones Ganadas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-label">Departamentos</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section certifications-section">
        <div className="container">
          <h2 className="section-title">Certificaciones y Reconocimientos</h2>
          <p className="section-subtitle">Garantía de calidad respaldada por estándares nacionales e internacionales</p>
          
          <div className="certifications-grid">
            <div className="cert-card">
              <i className="fas fa-certificate fa-3x"></i>
              <h4>ISO 9001:2015</h4>
              <p>Gestión de Calidad</p>
            </div>
            <div className="cert-card">
              <i className="fas fa-leaf fa-3x"></i>
              <h4>ISO 14001</h4>
              <p>Gestión Ambiental</p>
            </div>
            <div className="cert-card">
              <i className="fas fa-hard-hat fa-3x"></i>
              <h4>ISO 45001</h4>
              <p>Seguridad y Salud</p>
            </div>
            <div className="cert-card">
              <i className="fas fa-check-circle fa-3x"></i>
              <h4>ICONTEC</h4>
              <p>Calidad Nacional</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para trabajar con nosotros?</h2>
            <p>Descubre cómo podemos ayudarte con tus proyectos de mobiliario institucional</p>
            <div className="cta-buttons">
              <Link to="/contacto">
                <Button variant="primary" size="lg">
                  Contáctanos
                </Button>
              </Link>
              <Link to="/catalogo">
                <Button variant="outline" size="lg">
                  Ver Catálogo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
