import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LoginForm from '../components/home/loginForm';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Next app!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LoginForm></LoginForm>
      </main>
    </div>
  )
}
