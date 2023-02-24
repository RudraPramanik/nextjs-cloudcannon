import { promises as fs } from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

import { sortByKey } from './util';

const PAGES_DIR = 'src/_pages';

export async function getPages() {
  const filenames = await fs.readdir(path.join(process.cwd(), PAGES_DIR));

  const pages = await Promise.all(filenames.map(async filename => {
    const filePath = path.join(PAGES_DIR, filename)
    const slug = filename.replace('.md', '');

    const content = await fs.readFile(filePath, 'utf8');
    const matter = grayMatter(content);

    return {
      slug,
      content: matter.content,
      ...matter.data
    }
  }));

  return pages;
}