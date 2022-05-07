/* eslint-disable react/prop-types */
import Head from "next/head";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Main } from "../styles/MameStyled/core/HtmlTag";
import AsideLeft from "../src/components/organisms/AsideLeft";
import Container from "../src/components/atoms/Container";
import { Grid } from "../styles/MameStyled/core/display/Grid";
import Footer from "../src/components/organisms/Footer";
import stylesConfig from "../styles.config";
import { useRouter } from "next/router";
import "@fontsource/poppins"; // Defaults to weight 400.

const { spacing, color } = stylesConfig;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
          <title>Mame Styled</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      {router.pathname === "/" ? 
        <>
          <Main cssXs={{ maxWidth: 1440, margin: "auto" }}>
            
            <Component {...pageProps} />

          </Main>
        </>
      :
        <> 
          {/* <Appbar  /> */}
          <Grid 
            cols={{ xs: 1, md: "2fr 10fr" }} 
            gap={spacing.md} 
            cssXs={{ maxWidth: 1440, margin: "auto" }} 
          >
            <AsideLeft />
            <Main cssXs={{ display: "grid", gap: spacing.xl, border: `1px solid ${color.muted}` }}>
              <Container as="div">

                <Component {...pageProps} />
                
              </Container>
            </Main>
          </Grid>
        </>
      }
      <Footer />
    </>
  );
}

// eslint-disable-next-line no-undef
// export default dynamic(() => Promise.resolve(MyAepp));
