import { Footer as MameFooter } from '../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../styles.config';
import { Grid } from '../../styles/MameStyled/core/display/Grid.styled';
import Author from '../components/molecules/Author';
import Brand from '../components/organisms/Brand';
import SocialMedia from '../components/molecules/SocialMedia';

export default function Footer() {
  const { color, spacing } = stylesConfig;

  return (
    <MameFooter css={{ marginTop: spacing.sxxl, background: color.base.secondary.default }}>
      <Grid 
        cols={3}
        css={{ maxWidth: 1440, margin: 'auto', padding: spacing.md, justifyContent: 'space-between' }}
      >
        <Grid item vCenter>
          <Author />
        </Grid>
        <Grid item center>
          <Brand as="small" />
        </Grid>
        <Grid item vCenter>
          <SocialMedia position="end" />
        </Grid>
      </Grid>
    </MameFooter>
  );
}





