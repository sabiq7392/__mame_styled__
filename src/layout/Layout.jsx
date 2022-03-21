import Head from 'next/head';
import { Main } from '../../styles/MameStyled/core/HtmlTag.styled';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mame Styled</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main css={{ display: 'grid', gap: 60, maxWidth: 1200, margin: 'auto' }}>
        {children}
      </Main>
      {/* <Footer /> */}
    </>
  );
}