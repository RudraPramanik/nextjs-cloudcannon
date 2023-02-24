import Head from 'next/head'
import Link from 'next/link'

import { getPosts } from '@lib/posts';

import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/Archive.module.scss'

export default function Posts({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Posts - Space Jelly</title>
        <meta name="description" content="All posts on Space Jelly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className={styles.title}>
          Posts
        </h1>

        <ul className={styles.posts}>
          {posts.map(post => {
            return (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`}>
                  <a>
                    <h3 className={styles.postTitle}>{ post.title }</h3>
                    <p className={styles.postDate}>{ new Date(post.date).toDateString() }</p>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>

      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts
    }
  }
}