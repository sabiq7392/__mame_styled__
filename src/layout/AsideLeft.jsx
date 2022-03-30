import stylesConfig from '../../styles.config';
import { Grid } from '../../styles/MameStyled/core/display/Grid.styled';
import { A, Aside, Hr} from '../../styles/MameStyled/core/HtmlTag.styled';
import LineSeperator from '../components/atoms/LineSeperator';
import Link from '../components/molecules/Link';
import Brand from '../components/molecules/Brand';
import SocialMedia from '../components/molecules/SocialMedia';

export default function AsideLeft() {
  const { color, spacing } = stylesConfig;

  return (
    <Aside 
      css={{ display: 'none', position: 'sticky', top: 0, height: '100vh', padding: `${spacing.md}px 20px` }} 
      cssMd={{ display: 'block' }}
    >
      <Grid container gap={spacing.lg}>
        <Grid gap={spacing.sm}>
          <Brand as="h1" />
          <SocialMedia />
        </Grid>
        <LineSeperator />
        <Grid container gap={spacing.sm}>
          <Link href="/" text="Home" />
          <Link href="/getting-started" text="Getting Started" />
          <Link href="/display/grid" text="Display Grid"  />
          <Link href="/display/flex" text="Display Flex" />
          <Link href="/typography" text="Typography" />
          <Link href="/html-tag" text="HTML Tag" />
          <Link href="/screen" text="Screen" />
        </Grid>
      </Grid>
    </Aside>
  );
}
