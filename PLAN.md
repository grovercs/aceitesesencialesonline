# Plan: Convertir Aceites Esenciales Online en una web de autoridad con blog y comentarios

## Objetivo

Transformar el sitio actual (blog de afiliación básico) en una **web de autoridad del nicho** que genere confianza, mejore el SEO a largo plazo y monetice de forma natural, sin parecer un catálogo de productos.

## 1. Filosofía de contenido: 70/20/10

Para que el sitio no parezca solo una máquina de afiliados, proponemos esta proporción de contenido:

- **70% contenido informativo y educativo**: guías, usos, seguridad, mitos, ciencia, recetas, aromaterapia.
- **20% contenido de comparativa y recomendación**: "mejores productos", análisis honestos con criterios transparentes.
- **10% contenido transaccional directo**: reseñas puntuales, ofertas destacadas.

Esto mejora la confianza del lector, reduce el riesgo de penalización por "thin affiliate" y aumenta la captación de tráfico orgánico.

## 2. Arquitectura de contenido: Topic Clusters

Proponemos organizar el contenido en **tres pilares temáticos** (topic clusters), cada uno con un contenido pilar y múltiples artículos de apoyo.

### Pilar 1: Introducción y seguridad en aromaterapia
- **Pilar:** `/guia-completa-aceites-esenciales/`
- Apoyo:
  - `/como-elegir-aceites-esenciales-puros/`
  - `/precauciones-aceites-esenciales-ninos-embarazo/`
  - `/como-diluir-aceites-esenciales/`
  - `/diferencias-aceite-esencial-aceite-fragancia/`
  - `/glosario-aceites-esenciales/`

### Pilar 2: Aceites esenciales por necesidad
- **Pilar:** `/aceites-esenciales-para-dormir-relajacion-estres/`
- Apoyo:
  - `/mejores-aceites-para-dormir/` (ya existe, se reubica)
  - `/aceites-esenciales-para-la-ansiedad/`
  - `/aceites-esenciales-para-dolor-de-cabeza/`
  - `/aceites-esenciales-para-la-concentracion/`
  - `/aceites-esenciales-para-el-estres-laboral/`

### Pilar 3: Usos prácticos en casa
- **Pilar:** `/como-usar-aceites-esenciales-en-casa/`
- Apoyo:
  - `/mejores-difusores-de-aceites-esenciales/`
  - `/aceites-esenciales-en-el-bano/`
  - `/recetas-de-aceites-esenciales-para-masajes/`
  - `/limpieza-natural-con-aceites-esenciales/`
  - `/aceites-esenciales-para-el-hogar/`

## 3. Sistema de comentarios (sin base de datos tradicional)

### Opción recomendada: Giscus

**Por qué:**
- Gratuito.
- Sin publicidad de terceros (a diferencia de Disqus).
- Los comentarios se almacenan en **GitHub Discussions**, no en nuestra base de datos.
- Ligero: solo carga un script cuando el usuario llega a la zona de comentarios.
- Soporta reacciones, temas oscuro/claro, categorización.
- Ideal para sitios estáticos alojados en GitHub + Netlify.

**Requisito:** crear un repositorio público en GitHub y activar GitHub Discussions.

### Alternativas descartadas
- **Disqus:** fácil pero pesado, con publicidad en plan gratuito y tracking agresivo. Penaliza Core Web Vitals.
- **Cusdis:** requiere hosting propio (aunque ligero), añade complejidad.
- **Utterances:** basado en GitHub Issues, menos adecuado para conversaciones largas que Giscus.
- **Webmentions:** requiere infraestructura indie web, no es práctico para un nicho de afiliación.

## 4. Nuevas páginas y secciones necesarias

### Páginas de autoridad y confianza
- `/sobre-nosotros/` (ya existe, se amplía con fotos/equipo/metodología)
- `/como-evaluamos-productos/` → explica criterios de selección, transparencia de afiliados
- `/metodologia-de-investigacion/` → cómo se revisan estudios y fuentes
- `/politica-editorial/` → independencia editorial, cómo se eligen productos

### Páginas legales (ya existen, se refuerzan)
- `/aviso-legal/`
- `/politica-privacidad/`
- Añadir `/politica-de-cookies/` si se añade analytics o comentarios.

### Página de archivo
- `/blog/` con paginación.
- `/categorias/[category]/` (ya existe).
- Añadir `/etiquetas/[tag].astro` para SEO long-tail.
- Añadir `/archivo/` con listado cronológico.

### Newsletter (sin base de datos propia)
- Formulario estático con Netlify Forms o integración con Buttondown / Mailerlite.
- Sección en home y al final de cada artículo.

## 5. Reorganización del home

La home debe transmitir autoridad, no venta. Propuesta de secciones:

1. **Hero informativo:** título + subtítulo + CTA a la guía completa.
2. **Nuestros 3 pilares de contenido:** tarjetas visuales hacia los contenidos pilares.
3. **Últimos artículos del blog:** 6 artículos recientes.
4. **Guías más populares:** artículos pilares destacados.
5. **Suscripción al boletín:** captar emails.
6. **¿Por qué confiar en nosotros?:** sección corta con metodología.
7. **Footer** con disclaimer de afiliado y enlaces legales.

## 6. Componentes nuevos a crear

- `Comments.astro` → integración con Giscus.
- `NewsletterForm.astro` → formulario de suscripción con Netlify Forms.
- `HeroSection.astro` → hero de home.
- `ContentPillarCard.astro` → tarjetas de pilares temáticos.
- `PopularGuides.astro` → guías destacadas.
- `TrustSection.astro` → "¿por qué confiar?".
- `TagCloud.astro` → nube de etiquetas para `/etiquetas/`.

## 7. Cambios en el schema de contenido

Añadir campos opcionales al frontmatter para mejorar la organización:

- `featured: boolean` → marcar artículos destacados en home.
- `pillar: string` → asociar artículo a un pilar temático.
- `readingTime: number` → tiempo estimado de lectura (calculado automáticamente).
- `status: 'draft' | 'published'` → control de borradores.

## 8. SEO técnico adicional

- Implementar paginación del blog con metas `rel="prev"` / `rel="next"`.
- Añadir página de etiquetas dinámica (`/etiquetas/[tag].astro`).
- Optimizar imágenes: migrar de SVG a WebP/JPG con `@astrojs/image` o servicio propio.
- Añadir `lastmod` al sitemap cuando se actualicen posts.
- Implementar breadcrumbs visibles y schema markup adicional.

## 9. Fases de implementación propuestas

### Fase 1: Estructura base
- Reorganizar home con secciones de autoridad.
- Crear páginas de confianza: metodología, política editorial, cómo evaluamos.
- Actualizar schema de contenido con `featured` y `pillar`.

### Fase 2: Taxonomía y navegación
- Crear `/etiquetas/[tag].astro`.
- Implementar paginación en `/blog/`.
- Crear página `/archivo/`.

### Fase 3: Comentarios y engagement
- Configurar Giscus (crear repo + discussions + theme).
- Añadir componente `Comments.astro` a los posts.
- Añadir formulario de newsletter con Netlify Forms.

### Fase 4: Contenido de autoridad
- Crear 3 artículos pilar extensos.
- Crear 6-9 artículos de apoyo por pilar.
- Revisar proporción 70/20/10.

## 10. Métricas de éxito

- Tiempo de carga < 2.5 s en móvil.
- Cada post pilar > 2000 palabras.
- Ratio informativo/transaccional = 7:1 o mejor.
- Comentarios activos en posts principales tras 3 meses.

## Conclusión

La mejor opción es apostar por **contenido de autoridad + Giscus para comentarios + reorganización del home**. Esto diferenciará el sitio de una típica web de afiliados y sentará las bases para un crecimiento orgánico sostenible.
