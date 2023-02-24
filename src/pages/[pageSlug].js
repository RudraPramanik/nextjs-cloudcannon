import Head from 'next/head';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

import { getPages } from '@lib/pages';

import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/Page.module.scss'

export default function Page({ page }) {
  return (
    <Layout>
      <Head>
        <title>{ page.title } - Space Jelly</title>
        <meta name="description" content={page.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className={styles.title}>{ page.title }</h1>

        <div dangerouslySetInnerHTML={{
          __html: page.html
        }} />
      </Container>

    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const pages = await getPages();
  const page = pages.find(({ slug }) => slug === params.pageSlug);

  const content = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(page.content)

  return {
    props: {
      page: {
        ...page,
        html: content.value
      }
    }
  }
}

export async function getStaticPaths() {
  const pages = await getPages();

  const paths = pages.map(page => {
    return {
      params: {
        pageSlug: page.slug
      }
    }
  });

  return {
    paths,
    fallback: false
  }
}