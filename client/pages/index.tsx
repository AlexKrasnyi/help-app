import type { NextPage } from 'next'
import Head from 'next/head'
import Heading from '../components/Heading'
import Layout_Global from '../components/Layout_Global'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Help App</title>
      </Head>
      <Layout_Global> 
        <main className={styles.main}>
          <Heading text={"Hello World"} />
        </main>
      </Layout_Global>
     </div>
  )
}

export default Home
