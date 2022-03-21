import { Footer as MameFooter } from '../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../styles.config';
import { Grid } from '../../styles/MameStyled/core/display/Grid.styled';
import Author from '../components/_partials/Author';
import Brand from '../components/_partials/Brand';
import SocialMedia from '../components/_partials/SocialMedia';

export default function Footer() {
  const { color, spacing } = stylesConfig;

  return (
    <MameFooter css={{ marginTop: spacing.sxxl, background: color.base.secondary.default }}>
      <Grid 
        cols={3}
        css={{ maxWidth: 1200, margin: 'auto', padding: spacing.md, justifyContent: 'space-between' }}
      >
        <Author />
        <Brand />
        <SocialMedia />
      </Grid>
    </MameFooter>
  );
}





