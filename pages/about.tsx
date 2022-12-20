import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { PageLayout } from '@c/PageLayout'

export default function About () {
  return (
    <PageLayout title='News-App: About'>
      <div className={styles.container}>
        <h1>About!</h1>
        <Link href='/'>Ir al Home</Link>
      </div>
    </PageLayout>
  )
}