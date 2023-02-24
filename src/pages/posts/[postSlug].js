import Head from 'next/head';
import Link from 'next/link';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

import { getPosts } from '@lib/posts';

import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/Post.module.scss'

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{ post.title } - Space Jelly</title>
        <meta name="description" content={`Learn more about ${post.title} on Space Jelly`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <header className={styles.header}>
          <h1 className={styles.title}>{ post.title }</h1>

          <p className={styles.postDate}>{ new Date(post.date).toDateString() }</p>

          <ul className={styles.postCategories}>
            {post.categories.map(category => {
              return (
                <li key={category}>{ category }</li>
              )
            })}
          </ul>
        </header>

        <div dangerouslySetInnerHTML={{
          __html: post.html
        }} />

        <footer className={styles.footer}>
          <p>
            <Link href="/newsletter"><a>Sign up for our newsletter</a></Link> to get the latest posts straight to your inbox!
          </p>
        </footer>
      </Container>

    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const post = posts.find(({ slug }) => slug === params.postSlug);

  const content = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(post.content)

  return {
    props: {
      post: {
        ...post,
        html: content.value
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map(post => {
    return {
      params: {
        postSlug: post.slug
      }
    }
  });

  return {
    paths,
    fallback: false
  }
}