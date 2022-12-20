import { Inter } from '@next/font/google'
import Link from 'next/link'
import { PageLayout } from '@c/PageLayout'
import styles from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageLayout title='News-App: Home'>
      <div className={styles.container}>
        <h1 className={inter.className}>Aprendiendo NextJS desde 0</h1>
        <Link href='/about'>Ir al About</Link>
      </div>
    </PageLayout>
  )
}
