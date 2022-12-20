import React from 'react'

import Link from 'next/link'
import { Inter } from '@next/font/google'

import { PageLayout } from '@c/PageLayout'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <PageLayout title='News-App: Home'>
      <div className={styles.container}>
        <h1 className={inter.className}>Aprendiendo NextJS desde 0</h1>
        <Link className={inter.className} href='/about'>Ir al About</Link>
      </div>
    </PageLayout>
  )
};

export default Home;
