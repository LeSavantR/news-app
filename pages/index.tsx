import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import { PageLayout } from '@c/PageLayout'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export interface Article {
  source: {
    id?: string
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}
export interface HomeInterface {
  articles: Article[]
  totalResults: number
}

const Home: React.FC<HomeInterface> = ({ articles, totalResults }) => {
  return (
    <PageLayout title='News-App: Home'>
      <div className={styles.container}>
        {articles.length === 0 && <p>Sin Articulos Disponibles</p>}
        <div>
          Total Resultados: {totalResults}
        </div>
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index}>
            <Image src={article.urlToImage} alt={article.author} width={450} height={300} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link href={article.url}>Ver Sitio</Link>
          </div>
        ))}
      </div>
    </PageLayout>
  )
};

export default Home;

// export async function getStaticProps() {
//   const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=785ef77cee094ec1bee34d48700fa1ae')
//   const { articles } = await response.json()
//   return {
//     props: {
//       articles
//     }
//   }
// };

export async function getServerSideProps() {
  const response = await fetch('https://newsapi.org/v2/everything?domains=techcrunch.com&pagesize=10&apiKey=785ef77cee094ec1bee34d48700fa1ae')
  const { articles, totalResults } = await response.json()
  return {
    props: {
      articles,
      totalResults
    }
  }
};
