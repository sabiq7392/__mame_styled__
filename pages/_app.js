import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return typeof window === 'undefined' ? null : <Component {...pageProps} />
}
