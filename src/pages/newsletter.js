import Head from 'next/head';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Form from '@components/Form';
import Button from '@components/Button';

import styles from '@styles/Newsletter.module.scss';

export default function Newsletter() {
  function handleOnFormSubmit() {
    alert('Thanks for subscribing!');
  }
  return (
    <Layout>
      <Head>
        <title>Newsletter - Space Jelly</title>
        <meta name="description" content="Sign up for my newsletter!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className={styles.title}>
          Newsletter
        </h1>

        <h2>Sign up for the latest updates!</h2>

        <Form onSubmit={handleOnFormSubmit}>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </p>
          <p>
            <Button>Subscribe</Button>
          </p>
        </Form>

      </Container>
    </Layout>
  )
}