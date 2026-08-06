# Aceites Esenciales Online

Sitio web de autoridad sobre aceites esenciales, construido con **Astro**, **Tailwind CSS**, **Markdown/MDX** y desplegado en **Netlify**. Diseñado para generar confianza, atraer tráfico orgánico y monetizar mediante afiliación de forma transparente.

## Stack tecnológico

- [Astro](https://astro.build) — framework web estático y JAMstack.
- [Tailwind CSS](https://tailwindcss.com) — utilidades de estilado.
- [MDX](https://mdxjs.com) — artículos con componentes interactivos.
- [Content Collections](https://docs.astro.build/en/guides/content-collections/) — gestión de contenido en Markdown sin base de datos.
- [Giscus](https://giscus.app) — comentarios basados en GitHub Discussions.
- [Netlify Forms](https://docs.netlify.com/forms/overview/) — suscripción a newsletter sin backend.
- [Netlify](https://netlify.com) — hosting y despliegue continuo.

## Estructura clave

| Ruta | Propósito |
|------|-----------|
| `src/content/blog/` | Artículos en MDX |
| `src/content.config.ts` | Esquema Zod de los artículos |
| `src/components/AmazonCard.astro` | Tarjeta de producto de afiliado |
| `src/components/Comments.astro` | Comentarios con Giscus |
| `src/components/NewsletterForm.astro` | Formulario de suscripción |
| `src/components/HeroSection.astro` | Hero de la home |
| `src/components/TrustSection.astro` | Sección de confianza |
| `src/layouts/BaseLayout.astro` | Layout con SEO técnico base |
| `src/layouts/PostLayout.astro` | Layout para artículos individuales |
| `src/pages/blog/[...slug].astro` | Ruta dinámica de artículos |
| `src/pages/categorias/[category].astro` | Páginas de archivo por categoría |
| `src/pages/etiquetas/[tag].astro` | Páginas de archivo por etiqueta |
| `src/pages/archivo/index.astro` | Archivo cronológico |
| `src/pages/rss.xml.js` | Feed RSS |
| `src/consts.ts` | Constantes del sitio y config Giscus |
| `public/robots.txt` | Instrucciones para rastreadores |

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Previsualizar build local
```

## Cómo crear un nuevo artículo

1. Crea un archivo `.mdx` en `src/content/blog/` con un slug descriptivo.
2. Rellena el frontmatter:

```yaml
---
title: "Título SEO del artículo"          # máximo 70 caracteres
description: "Meta description"           # máximo 160 caracteres
pubDate: 2026-08-10
updatedDate: 2026-08-15                  # opcional
category: "Bienestar"
tags: ["aceite", "belleza"]
author: "Tu nombre"
featured: false                            # true para destacar en home
pillar: "bienestar"                        # opcional: introduccion, bienestar, hogar
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

## Filosofía de contenido

Para que el sitio sea percibido como una autoridad y no como un catálogo de afiliados, se recomienda mantener una proporción aproximada de:

- **70% contenido informativo/educativo**
- **20% comparativas y recomendaciones**
- **10% contenido transaccional directo**

## Configurar comentarios con Giscus

1. Crea un repositorio público en GitHub (puede ser el mismo que usas para el sitio).
2. Activa **GitHub Discussions** en la configuración del repositorio.
3. Instala la aplicación [Giscus](https://github.com/apps/giscus) en ese repositorio.
4. Genera tu configuración en [giscus.app](https://giscus.app) y copia `repo`, `repoId`, `category` y `categoryId`.
5. Actualiza los valores en `src/consts.ts` en la sección `GISCUS`.

## Configurar newsletter con Netlify Forms

El formulario ya está integrado. Solo necesitas:

1. Desplegar el sitio en Netlify.
2. Netlify detectará automáticamente el formulario con `data-netlify="true"`.
3. Las suscripciones aparecerán en el panel de Netlify → Forms.
4. Opcional: configura una notificación por email o una integración con Mailerlite / Buttondown.

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

## Checklist antes de lanzar

- [ ] Sustituir imágenes SVG placeholder por imágenes reales (JPG/PNG, ≥1200 px de ancho).
- [ ] Actualizar enlaces de Amazon con tu propio ID de afiliado.
- [ ] Configurar el dominio personalizado en Netlify.
- [ ] Configurar Giscus con tu repositorio de GitHub.
- [ ] Verificar que Netlify Forms detecte el formulario de newsletter.
- [ ] Añadir el sitio a Google Search Console y enviar el sitemap.
- [ ] Crear cuentas en redes sociales y actualizar `src/consts.ts`.
- [ ] Revisar textos legales con un asesor si es necesario.
- [ ] Crear artículos adicionales siguiendo la arquitectura de topic clusters.
