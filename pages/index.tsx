import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({ data }) => {
    console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Search</title>
        <meta name="description" content="prisjakt search products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
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

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const url = `https://search-pj-campaigns-index-oyaq7ruf3du2owxiiiuhyqcgcm.eu-west-1.es.amazonaws.com/campaign-se-4-deals/_search`;
    const body = {
        "query": {
            "match" : {
                "product.name" : "apple"
            }
        }
    };
    const res = await fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body)
    });
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
export default Home
