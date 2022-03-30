import Head from 'next/head';
import { useRouter } from 'next/router';
import stylesConfig from '../../styles.config';
import { Grid } from '../../styles/MameStyled/core/display/Grid.styled';
import { Main } from '../../styles/MameStyled/core/HtmlTag.styled';
import Container from '../components/atoms/Container';
import AsideLeft from './AsideLeft';
import Footer from './Footer';
import { node } from 'prop-types';
import Header from './Header';

export default function Layout({ children }) {
  const router = useRouter();
  const { spacing, color } = stylesConfig;

  return (
    <>
      <Head>
        <title>Mame Styled</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        {router.pathname === '/' ? 
          <>
            <Header />
            <Main css={{ maxWidth: 1440, margin: 'auto' }}>
              {children}
            </Main>
          </>
        :
          <Grid 
            cols={{ xs: 1, md: '2fr 10fr' }} 
            gap={spacing.md} 
            css={{ maxWidth: 1440, margin: 'auto' }} 
          >
            <AsideLeft />
            <Main css={{ display: 'grid', gap: spacing.xl, border: `1px solid ${color.muted}` }}>
              <Container as="div">
                {children}
              </Container>
            </Main>
          </Grid>
        }
        <Footer />
      </>
    </>
  );
}

Layout.propTypes = {
  children: node.isRequired,
};
