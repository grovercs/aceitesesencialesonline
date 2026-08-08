import fs from 'fs';
import path from 'path';

const sourceDir = path.resolve('..', 'aceitesesencialesonline', 'src', 'content', 'blog');
const targetDir = path.resolve('src', 'data', 'post');

const featuredImageMap = {
  '../../assets/images/aceites-difusor.svg':
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1024&q=80',
  '../../assets/images/bienestar-emocional.svg':
    'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1024&q=80',
  '../../assets/images/difusores.svg':
    'https://images.unsplash.com/photo-1616627988031-f912e383a2f0?auto=format&fit=crop&w=1024&q=80',
  '../../assets/images/diluir.svg':
    'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1024&q=80',
  '../../assets/images/elegir-puros.svg':
    'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1024&q=80',
  '../../assets/images/guia-completa.svg':
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1024&q=80',
  '../../assets/images/lavanda-dormir.svg':
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1024&q=80',
  '../../assets/images/seguridad.svg':
    'https://images.unsplash.com/photo-1587854692152-cbe365dbb68d?auto=format&fit=crop&w=1024&q=80',
  '../../assets/images/usos-hogar.svg':
    'https://images.unsplash.com/photo-1556228720-195a756c25f2?auto=format&fit=crop&w=1024&q=80',
};

const productImageMap = {
  '/images/products/aceite-lavanda.svg':
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
  '/images/products/kit-aceites.svg':
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80',
  '/images/products/aceite-puro.svg':
    'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=400&q=80',
  '/images/products/set-hogar.svg':
    'https://images.unsplash.com/photo-1556228720-195a756c25f2?auto=format&fit=crop&w=400&q=80',
  '/images/products/difusor.svg':
    'https://images.unsplash.com/photo-1616627988031-f912e383a2f0?auto=format&fit=crop&w=400&q=80',
  '/images/product-placeholder.svg':
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80',
};

function parseFrontmatter(text) {
  const match = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return null;
  const lines = match[1].split('\n');
  const data = {};
  let currentList = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line.trim()) continue;

    if (line.startsWith('- ')) {
      const value = line.slice(2).trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '');
      if (currentList) {
        currentList.push(value);
      }
      continue;
    }

    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((v) => v.trim().replace(/^"|"$/g, '').replace(/^'|'$/g, ''))
        .filter(Boolean);
      data[key] = value;
      currentList = null;
    } else if (value === '') {
      data[key] = [];
      currentList = data[key];
    } else {
      data[key] = value.replace(/^"|"$/g, '').replace(/^'|'$/g, '');
      currentList = null;
    }
  }

  return { data, body: match[2] };
}

function formatDate(value) {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
}

function buildFrontmatter(data) {
  const publishDate = formatDate(data.pubDate || data.publishDate);
  const updateDate = formatDate(data.updatedDate || data.updateDate);
  const image = featuredImageMap[data.image] || data.image;
  const isDraft = String(data.status).toLowerCase() === 'draft' || data.draft === true;

  const metadataLines = [];
  if (data.canonical && data.canonical.startsWith('http')) {
    metadataLines.push('  canonical: ' + data.canonical);
  }
  if (data.noindex === true || data.noindex === 'true') {
    metadataLines.push('  robots:');
    metadataLines.push('    index: false');
    metadataLines.push('    follow: true');
  }

  let metadataBlock = '';
  if (metadataLines.length) {
    metadataBlock = 'metadata:\n' + metadataLines.join('\n') + '\n';
  }

  const lines = ['---'];
  if (publishDate) lines.push(`publishDate: ${publishDate}`);
  if (updateDate) lines.push(`updateDate: ${updateDate}`);
  lines.push(`draft: ${isDraft ? 'true' : 'false'}`);
  lines.push(`title: "${data.title.replace(/"/g, '\\"')}"`);
  if (data.description) lines.push(`excerpt: "${data.description.replace(/"/g, '\\"')}"`);
  if (image) lines.push(`image: ${image}`);
  if (data.category) lines.push(`category: ${data.category}`);
  if (data.tags && data.tags.length) {
    lines.push('tags:');
    for (const tag of data.tags) lines.push(`  - ${tag}`);
  }
  if (data.author) lines.push(`author: ${data.author}`);
  if (metadataBlock) lines.push(metadataBlock.trimEnd());
  lines.push('---');

  return lines.join('\n') + '\n';
}

function transformBody(body) {
  let result = body;
  result = result.replace(
    /import AmazonCard from ['"]\.\.\/\.\.\/components\/AmazonCard\.astro['"];/g,
    "import AmazonCard from '~/components/affiliate/AmazonCard.astro';"
  );

  for (const [oldSrc, newSrc] of Object.entries(productImageMap)) {
    result = result.replaceAll(`image="${oldSrc}"`, `image="${newSrc}"`);
  }

  return result;
}

function main() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    const raw = fs.readFileSync(sourcePath, 'utf8');
    const parsed = parseFrontmatter(raw);

    if (!parsed) {
      console.warn(`No se pudo parsear frontmatter: ${file}`);
      continue;
    }

    const newFrontmatter = buildFrontmatter(parsed.data);
    const newBody = transformBody(parsed.body);
    fs.writeFileSync(targetPath, newFrontmatter + newBody);
    console.log(`Migrado: ${file}`);
  }
}

main();
