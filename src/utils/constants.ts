import type { CategoryInfo } from '../types';

export const COMPANY_INFO = {
  name: 'Fénix',
  fullName: 'Fénix Mobiliario Institucional',
  tagline: 'Mobiliario Institucional',
  nit: '900.123.456-7',
  email: 'contacto@fenix.com.co',
  phone: '+57 (1) 234 5678',
  whatsapp: '+57 300 123 4567',
  address: 'Bogotá, Colombia',
  schedule: 'Lun-Vie: 8:00 AM - 6:00 PM',
  social: {
    facebook: 'https://facebook.com/fenix',
    instagram: 'https://instagram.com/fenix',
    linkedin: 'https://linkedin.com/company/fenix',
    whatsapp: 'https://wa.me/573001234567'
  }
} as const;

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'mesas',
    name: 'Mesas',
    description: 'Para oficina, conferencias y trabajo',
    icon: 'table'
  },
  {
    id: 'sillas',
    name: 'Sillas',
    description: 'Ergonómicas y duraderas',
    icon: 'chair'
  },
  {
    id: 'archivadores',
    name: 'Archivadores',
    description: 'Almacenamiento eficiente',
    icon: 'archive'
  },
  {
    id: 'mobiliario-escolar',
    name: 'Mobiliario Escolar',
    description: 'Para instituciones educativas',
    icon: 'graduation-cap'
  },
  {
    id: 'mobiliario-oficina',
    name: 'Mobiliario Oficina',
    description: 'Espacios de trabajo modernos',
    icon: 'desktop'
  },
  {
    id: 'accesorios',
    name: 'Accesorios Institucionales',
    description: 'Complementos institucionales',
    icon: 'puzzle-piece'
  }
];

export const NAV_LINKS = [
  { path: '/', label: 'Inicio', icon: 'home' },
  { path: '/sobre-empresa', label: 'Sobre la Empresa', icon: 'building' },
  { 
    path: '/catalogo', 
    label: 'Catálogo', 
    icon: 'th',
    children: CATEGORIES.map(cat => ({
      path: `/catalogo#${cat.id}`,
      label: cat.name
    }))
  },
  { path: '/servicios', label: 'Servicios', icon: 'tools' },
  { path: '/proyectos', label: 'Proyectos', icon: 'briefcase' },
  { path: '/faq', label: 'Preguntas Frecuentes', icon: 'question-circle' },
  { path: '/descargables', label: 'Descargables', icon: 'download' },
  { path: '/contacto', label: 'Contáctenos', icon: 'envelope' }
] as const;

export const SERVICES = [
  {
    id: 'personalizacion',
    title: 'Personalización de Mobiliario',
    description: 'Adaptamos el mobiliario a los colores y logos de tu institución',
    icon: 'paint-brush',
    features: [
      'Colores corporativos',
      'Logos institucionales',
      'Acabados personalizados',
      'Diseños exclusivos'
    ]
  },
  {
    id: 'fabricacion',
    title: 'Fabricación a Medida',
    description: 'Diseños exclusivos según tus especificaciones',
    icon: 'ruler-combined',
    features: [
      'Medidas personalizadas',
      'Materiales de calidad',
      'Diseño único',
      'Producción nacional'
    ]
  },
  {
    id: 'marcacion',
    title: 'Marcación Institucional',
    description: 'Identidad corporativa en cada pieza',
    icon: 'stamp',
    features: [
      'Grabado láser',
      'Serigrafía',
      'Placas metálicas',
      'Acabados premium'
    ]
  },
  {
    id: 'asesoria',
    title: 'Asesoría para Licitaciones',
    description: 'Te acompañamos en el proceso de compra pública',
    icon: 'handshake',
    features: [
      'Documentación técnica',
      'Cumplimiento normativo',
      'Cotizaciones detalladas',
      'Soporte posventa'
    ]
  }
] as const;

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  products: '/products',
  categories: '/categories',
  projects: '/projects',
  services: '/services',
  contact: '/contact',
  quote: '/quote',
  faq: '/faq',
  users: '/users'
} as const;
