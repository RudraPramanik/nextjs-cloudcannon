import Head from 'next/head'
import Link from 'next/link'

import { getPosts } from '@lib/posts';

import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/Home.module.scss'

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Space Jelly</title>
        <meta name="description" content="Cosmic web dev tutorials that will shock you with joy!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className={styles.title}>
          Space Jelly
        </h1>

        <p className={styles.subtitle}>
          Cosmic web dev tutorials that will shock you with joy!
        </p>

        <h2 className={styles.heading}>Latest Posts</h2>

        <ul className={styles.posts}>
          {posts.map(post => {
            return (
              <li key={post.slug}>
                <a href={`/posts/${post.slug}`}>
                  <h3 className={styles.postTitle}>{ post.title }</h3>
                  <p className={styles.postDate}>{ new Date(post.date).toDateString() }</p>
                  <div className={styles.postExcerpt} dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </a>
              </li>
            )
          })}
        </ul>

        <p className={styles.allPosts}>
          <Link href="/posts">
            <a>View All Posts</a>
          </Link>
        </p>
      </Container>

      <Container className={styles.signupContainer}>
        <div className={styles.signup}>
          <div className={styles.signupBody}>
            <h2>Sign up for our newsletter!</h2>
            <p>Get the latest tutorials straight to your inbox.</p>
          </div>
          <div className={styles.signupCta}>
            <p>
              <Link href="/newsletter">
                <a>Learn More</a>
              </Link>
            </p>
          </div>
        </div>
      </Container>

    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts: posts.slice(0,5)
    }
  }
}