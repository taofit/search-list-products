import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ProductsPage from "../components/products";
import styles from '../styles/Home.module.css';

// @ts-ignore
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Search</title>
        <meta name="description" content="prisjakt search products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Prisjakt!
        </h1>
          <ProductsPage />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
