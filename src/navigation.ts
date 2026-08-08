import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Guías',
      href: getPermalink('guias', 'category'),
      links: [
        {
          text: 'Todas las guías',
          href: getPermalink('guias', 'category'),
        },
        {
          text: 'Guía para principiantes',
          href: getPermalink('blog/guia-principiantes-aceites-esenciales', 'post'),
        },
        {
          text: 'Cómo elegir aceites puros',
          href: getPermalink('blog/como-elegir-aceites-esenciales-puros', 'post'),
        },
        {
          text: 'Cómo diluir aceites',
          href: getPermalink('blog/como-diluir-aceites-esenciales', 'post'),
        },
        {
          text: 'Seguridad y precauciones',
          href: getPermalink('blog/precauciones-aceites-esenciales-seguridad', 'post'),
        },
      ],
    },
    {
      text: 'Bienestar',
      href: getPermalink('bienestar', 'category'),
      links: [
        {
          text: 'Todo en Bienestar',
          href: getPermalink('bienestar', 'category'),
        },
        {
          text: 'Aceites para dormir',
          href: getPermalink('blog/mejores-aceites-para-dormir', 'post'),
        },
        {
          text: 'Relajación y estrés',
          href: getPermalink('blog/aceites-esenciales-para-dormir-relajacion-estres', 'post'),
        },
      ],
    },
    {
      text: 'Hogar',
      href: getPermalink('hogar', 'category'),
      links: [
        {
          text: 'Todo en Hogar',
          href: getPermalink('hogar', 'category'),
        },
        {
          text: 'Mejores difusores',
          href: getPermalink('blog/mejores-difusores-aceites-esenciales', 'post'),
        },
        {
          text: 'Usos en casa',
          href: getPermalink('blog/como-usar-aceites-esenciales-en-casa', 'post'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Sobre nosotros',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Newsletter', href: getPermalink('/#newsletter') }],
};

export const footerData = {
  links: [
    {
      title: 'Contenido',
      links: [
        { text: 'Guía para principiantes', href: getPermalink('blog/guia-principiantes-aceites-esenciales', 'post') },
        { text: 'Mejores difusores', href: getPermalink('blog/mejores-difusores-aceites-esenciales', 'post') },
        { text: 'Aceites para dormir', href: getPermalink('blog/mejores-aceites-para-dormir', 'post') },
        { text: 'Usos en el hogar', href: getPermalink('blog/como-usar-aceites-esenciales-en-casa', 'post') },
      ],
    },
    {
      title: 'Descubre',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Categorías', href: getPermalink('category') },
        { text: 'Newsletter', href: getPermalink('/#newsletter') },
        { text: 'Cómo evaluamos', href: getPermalink('/como-evaluamos-productos') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Sobre nosotros', href: getPermalink('/about') },
        { text: 'Política de privacidad', href: getPermalink('/privacy') },
        { text: 'Política de cookies', href: getPermalink('/cookies') },
        { text: 'Aviso legal', href: getPermalink('/terms') },
        { text: 'Política de afiliación', href: getPermalink('/politica-de-afiliacion') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
    { text: 'Política de cookies', href: getPermalink('/cookies') },
    { text: 'Aviso legal', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Pinterest', icon: 'tabler:brand-pinterest', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} Aceites Esenciales Online · Contenido independiente. Algunos enlaces son de afiliado.
  `,
};
