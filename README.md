# 🔥 Fénix - Mobiliario Institucional

Sitio web corporativo para Fénix, empresa especializada en mobiliario institucional para licitaciones gubernamentales.

## 🚀 Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **React Router** - Navegación
- **CSS Modules** - Estilos
- **Font Awesome** - Iconografía

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── layout/         # Header, Footer, Navigation, Layout
│   ├── ui/             # Button, Card, etc.
│   └── features/       # Hero, ProductCard, CategoryCard
├── pages/              # Páginas de la aplicación
├── services/           # Servicios API (REST)
├── hooks/              # Custom hooks
├── contexts/           # Context API
├── types/              # TypeScript types & interfaces
├── utils/              # Utilidades y constantes
├── styles/             # Estilos globales y variables
└── assets/             # Imágenes y recursos estáticos
```

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Azul petróleo | `#0A3D62` | Principal |
| Gris grafito | `#2F3542` | Secundario |
| Gris humo | `#F1F2F6` | Fondo |
| Gris acero | `#CED6E0` | Neutral |
| Naranja quemado | `#E67E22` | Acento |
| Dorado arena | `#C49A6C` | Acento alternativo |

## 🛠️ Instalación

```bash
# Clonar repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd fenix-website

# Instalar dependencias
npm install

# Copiar archivo de entorno
copy .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

## 📜 Scripts Disponibles

```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Ejecutar ESLint
```

## 🌐 Variables de Entorno

Crear un archivo `.env` basado en `.env.example`:

```env
VITE_API_URL=http://localhost:3000/api
```

## 🔌 Integración con API REST

El proyecto está configurado para integrarse con servicios REST. Los servicios se encuentran en `src/services/`:

- `products.service.ts` - Gestión de productos
- `contact.service.ts` - Formularios de contacto
- `projects.service.ts` - Proyectos realizados

### Ejemplo de uso:

```typescript
import { productsService } from './services';

// Obtener todos los productos
const products = await productsService.getAll();

// Obtener productos por categoría
const mesas = await productsService.getByCategory('mesas');

// Obtener producto por ID
const product = await productsService.getById('123');
```

## 📄 Páginas Implementadas

- ✅ Home - Página principal con categorías y servicios
- ✅ Catálogo - Lista de productos con filtros
- ⏳ Sobre la Empresa - Pendiente
- ⏳ Servicios - Pendiente
- ⏳ Proyectos - Pendiente
- ⏳ Contacto - Pendiente
- ⏳ FAQ - Pendiente

## 🎯 Próximos Pasos

1. Completar páginas restantes
2. Implementar formularios de contacto
3. Integrar con API backend real
4. Agregar autenticación (si es necesario)
5. Optimizar imágenes y performance
6. Testing

## 📝 Licencia

© 2026 Fénix Mobiliario Institucional. Todos los derechos reservados.
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
