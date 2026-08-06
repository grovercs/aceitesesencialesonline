import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const items = sortedPosts.map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    description: post.data.description,
    link: `/blog/${post.id}/`,
  }));

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items,
    customData: `<language>${SITE.lang}</language>
      <image>
        <url>${new URL(SITE.defaultImage, context.site).toString()}</url>
        <title>${SITE.title}</title>
        <link>${context.site}</link>
      </image>`,
  });
}
