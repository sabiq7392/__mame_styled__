import stylesConfig from '../styles.config';
import { H2, Figure } from '../styles/MameStyled/core/HtmlTag.styled';
import Description from '../src/components/atoms/Description';
import Container from '../src/components/atoms/Container';
import { Grid } from '../styles/MameStyled/core/display/Grid.styled';
import Image from 'next/image';
import HtmlTag from './html-tag';

export default function Home() {
  const { spacing } = stylesConfig;
  return (
    <Grid>
      <Container as="article">
        <HtmlTag />
      </Container>

      <Container as="article">
        <H2 cssXs={{ color: 'white' }} fontSize={{ lg: 32 }}>Installation</H2>
        <Description 
          text="
            install Bootstrap’s source Sass and JavaScript files via npm, Composer, or Meteor. 
            Package managed installs don’t include documentation or our full build scripts. 
            You can also use our npm template repo to quickly generate a Bootstrap project via npm.
          " 
          fontSize={{ xs: 12, md: 14, lg: 16 }}
        />
      </Container>

      <Container as="article">
        <H2 cssXs={{ color: 'white' }} fontSize={{ lg: 32 }}>Why Mame Styled?</H2>
        <Description
          text="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          "
        />
      </Container>

      <Container as="article">
        <H2 cssXs={{ color: 'white' }} fontSize={{ lg: 32 }}>Thanks to</H2>
        <Figure cssXs={{ display: 'flex', gap: spacing.lg }}>
          <Image src="/images/photos/styled-components.png" alt="styled-components" width={100} height={100} />
          <Image src="/images/photos/next-js.png" alt="styled-components" width={200} height={110} />
        </Figure>
      </Container>
    </Grid>
  );
}
