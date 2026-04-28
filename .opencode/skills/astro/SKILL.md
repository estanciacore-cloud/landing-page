# Astro Skill

## Descripción
Skill para trabajar con el framework Astro. Ayuda a crear componentes y páginas de Astro, configurar adaptadores SSR, configurar colecciones de contenido, desplegar sitios estáticos y gestionar la estructura del proyecto y comandos CLI.

## Cuándo usar este skill
- Cuando el usuario necesita trabajar con Astro
- Cuando se mencionan archivos .astro
- Consultas sobre generación de sitios estáticos (SSG)
- Arquitectura de islas (islands architecture)
- Colecciones de contenido (content collections)
- Despliegue de proyectos Astro

## Comandos útiles

### Desarrollo
```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye el sitio para producción
npm run preview      # Previsualiza la construcción local
```

### Estructura del proyecto
```
/
├── src/
│   ├── components/  # Componentes .astro y .jsx/.tsx
│   ├── layouts/     # Plantillas de diseño
│   ├── pages/       # Páginas (enrutamiento basado en archivos)
│   ├── styles/      # Archivos CSS/SCSS
│   └── content/     # Colecciones de contenido (opcional)
├── public/          # Activos estáticos
├── astro.config.mjs # Configuración de Astro
└── package.json
```

## Patrones comunes

### Crear un componente Astro
```astro
---
// Frontmatter (script del servidor)
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<div class="component">
  <h1>{title}</h1>
  <slot />
</div>

<style>
  .component {
    padding: 1rem;
  }
</style>
```

### Configuración de Astro (astro.config.mjs)
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static', // o 'server' para SSR
});
```

### Colecciones de contenido
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
```

## Notas importantes
- Astro usa una arquitectura de islas: solo el JavaScript necesario se envía al cliente
- El código en el frontmatter (---) se ejecuta en el servidor
- Los estilos son scorpeados por defecto en los componentes .astro
- Soporta componentes de React, Vue, Svelte, etc. mediante integraciones
