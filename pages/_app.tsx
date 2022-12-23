import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { createContext } from 'react'

const ThemeContext = createContext('dark')

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext.Provider value='dark'>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}
