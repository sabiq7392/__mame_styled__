import Layout from '../src/layout/Layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      {typeof window === 'undefined' ? null : 
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </div>
  )
}
