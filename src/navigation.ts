import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Guías',
      links: [
        {
          text: 'Guía para principiantes',
          href: getPermalink('guia-principiantes-aceites-esenciales', 'post'),
        },
        {
          text: 'Cómo elegir aceites puros',
          href: getPermalink('como-elegir-aceites-esenciales-puros', 'post'),
        },
        {
          text: 'Cómo diluir aceites',
          href: getPermalink('como-diluir-aceites-esenciales', 'post'),
        },
        {
          text: 'Seguridad y precauciones',
          href: getPermalink('precauciones-aceites-esenciales-seguridad', 'post'),
        },
      ],
    },
    {
      text: 'Bienestar',
      links: [
        {
          text: 'Aceites para dormir',
          href: getPermalink('mejores-aceites-para-dormir', 'post'),
        },
        {
          text: 'Relajación y estrés',
          href: getPermalink('aceites-esenciales-para-dormir-relajacion-estres', 'post'),
        },
      ],
    },
    {
      text: 'Hogar',
      links: [
        {
          text: 'Mejores difusores',
          href: getPermalink('mejores-difusores-aceites-esenciales', 'post'),
        },
        {
          text: 'Usos en casa',
          href: getPermalink('como-usar-aceites-esenciales-en-casa', 'post'),
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
        { text: 'Guía para principiantes', href: getPermalink('guia-principiantes-aceites-esenciales', 'post') },
        { text: 'Mejores difusores', href: getPermalink('mejores-difusores-aceites-esenciales', 'post') },
        { text: 'Aceites para dormir', href: getPermalink('mejores-aceites-para-dormir', 'post') },
        { text: 'Usos en el hogar', href: getPermalink('como-usar-aceites-esenciales-en-casa', 'post') },
      ],
    },
    {
      title: 'Descubre',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Categorías', href: getPermalink('/category/tutorials') },
        { text: 'Newsletter', href: getPermalink('/#newsletter') },
        { text: 'Cómo evaluamos', href: getPermalink('/como-evaluamos-productos') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Sobre nosotros', href: getPermalink('/about') },
        { text: 'Política de privacidad', href: getPermalink('/privacy') },
        { text: 'Aviso legal', href: getPermalink('/terms') },
        { text: 'Política de afiliación', href: getPermalink('/politica-de-afiliacion') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
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
