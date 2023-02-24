import { promises as fs } from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

import { sortByKey } from './util';

const POSTS_DIR = 'src/_posts';

export async function getPosts() {
  const filenames = await fs.readdir(path.join(process.cwd(), POSTS_DIR));

  const posts = await Promise.all(filenames.map(async filename => {
    const filePath = path.join(POSTS_DIR, filename)
    const slug = filename.replace('.md', '');

    const content = await fs.readFile(filePath, 'utf8');
    const matter = grayMatter(content);

    return {
      slug,
      content: matter.content,
      ...matter.data
    }
  }));

  const sorted = sortByKey(posts, 'date').reverse();

  return sorted.map(post => {
    return {
      ...post,
      date: `${post.date}`,
      categories: post.categories.split(',').map(c => c.trim())
    }
  });
}