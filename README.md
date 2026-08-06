# Aceites Esenciales Online

Sitio web de afiliación sobre aceites esenciales, construido con **Astro**, **Tailwind CSS**, **Markdown/MDX** y desplegado en **Netlify**.

## Stack tecnológico

- [Astro](https://astro.build) — framework web estático y JAMstack.
- [Tailwind CSS](https://tailwindcss.com) — utilidades de estilado.
- [MDX](https://mdxjs.com) — artículos con componentes interactivos.
- [Content Collections](https://docs.astro.build/en/guides/content-collections/) — gestión de contenido en Markdown sin base de datos.
- [Netlify](https://netlify.com) — hosting y despliegue continuo.

## Estructura clave

| Ruta | Propósito |
|------|-----------|
| `src/content/blog/` | Artículos en MDX |
| `src/content.config.ts` | Esquema Zod de los artículos |
| `src/components/AmazonCard.astro` | Tarjeta de producto de afiliado |
| `src/layouts/BaseLayout.astro` | Layout con SEO técnico base |
| `src/layouts/PostLayout.astro` | Layout para artículos individuales |
| `src/pages/blog/[...slug].astro` | Ruta dinámica de artículos |
| `src/pages/categorias/[category].astro` | Páginas de archivo por categoría |
| `src/pages/rss.xml.js` | Feed RSS |
| `public/robots.txt` | Instrucciones para rastreadores |

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Previsualizar build local
```

## Cómo crear un nuevo artículo

1. Crea un archivo `.mdx` en `src/content/blog/` con un slug descriptivo, por ejemplo `mejores-aceites-anticeluliticos.mdx`.
2. Rellena el frontmatter:

```yaml
---
title: "Título SEO del artículo"
description: "Meta description de menos de 160 caracteres."
pubDate: 2026-08-10
category: "Bienestar"
tags: ["aceite", "belleza"]
author: "Tu nombre"
image: "../../assets/images/tu-imagen.svg"
alt: "Descripción de la imagen"
---
```

3. Escribe el contenido en Markdown.
4. Usa el componente `AmazonCard` donde quieras insertar un producto de afiliado:

```mdx
import AmazonCard from '../../components/AmazonCard.astro';

<AmazonCard
  title="Nombre del producto"
  description="Breve descripción atractiva."
  image="/images/tu-producto.jpg"
  link="https://www.amazon.es/dp/XXXXXX?tag=tuaffiliate-21"
  buttonText="Ver precio en Amazon"
/>
```

## Despliegue en Netlify

1. Sube el repositorio a GitHub:

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU_USUARIO/aceitesesencialesonline.git
git push -u origin main
```

2. En Netlify: **Add new site → Import an existing project → GitHub**.
3. Selecciona el repositorio.
4. Configura el build:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Haz clic en **Deploy site**.

## Checklist SEO antes de lanzar

- [ ] Sustituir imágenes SVG placeholder por imágenes reales (JPG/PNG, ≥1200 px de ancho).
- [ ] Actualizar enlaces de Amazon con tu propio ID de afiliado.
- [ ] Configurar el dominio personalizado en Netlify.
- [ ] Añadir el sitio a Google Search Console y enviar el sitemap.
- [ ] Crear cuentas en redes sociales y actualizar `src/consts.ts`.
- [ ] Revisar textos legales con un asesor si es necesario.
