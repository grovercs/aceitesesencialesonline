import type { CollectionEntry } from 'astro:content';

/**
 * Calcula el tiempo estimado de lectura a partir del cuerpo del artículo.
 * Velocidad media: 200 palabras por minuto.
 */
export function getReadingTime(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Slugifica una categoría o etiqueta para usarla en URLs.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

/**
 * Devuelve todas las etiquetas únicas de una colección de posts.
 */
export function getAllTags(posts: CollectionEntry<'blog'>[]): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.data.tags.forEach((tag) => tags.add(tag));
  });
  return [...tags].sort((a, b) => a.localeCompare(b));
}

/**
 * Devuelve todos los pilares temáticos únicos de una colección de posts.
 */
export function getAllPillars(posts: CollectionEntry<'blog'>[]): string[] {
  const pillars = new Set<string>();
  posts.forEach((post) => {
    if (post.data.pillar) pillars.add(post.data.pillar);
  });
  return [...pillars].sort((a, b) => a.localeCompare(b));
}

/**
 * Filtra posts publicados y opcionalmente excluye borradores.
 */
export function getPublishedPosts(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return posts.filter((post) => post.data.status !== 'draft');
}
