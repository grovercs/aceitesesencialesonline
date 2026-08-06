import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70, 'El título SEO no debería superar los 70 caracteres'),
      description: z.string().max(160, 'La meta description debería tener menos de 160 caracteres'),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Equipo Aceites Esenciales Online'),
      category: z.string().min(1, 'La categoría es obligatoria'),
      tags: z.array(z.string()).default([]),
      image: image(),
      alt: z.string().min(1, 'El texto alternativo de la imagen es obligatorio'),
      affiliateDisclaimer: z.boolean().default(true),
      canonical: z.string().optional(),
      noindex: z.boolean().default(false),
      featured: z.boolean().default(false),
      pillar: z.string().optional(),
      status: z.enum(['draft', 'published']).default('published'),
    }),
});

export const collections = { blog };
