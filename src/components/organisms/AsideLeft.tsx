import stylesConfig from "../../../styles.config";
import { Grid } from "../../../styles/MameStyled/core/display/Grid";
import { Aside } from "../../../styles/MameStyled/core/HtmlTag.ts";
import LineSeperator from "../atoms/LineSeperator";
import Link from "../molecules/Link";
import Brand from "../molecules/Brand";
import SocialMedia from "../molecules/SocialMedia";
import link from "../../../link.config";

export default function AsideLeft() {
  const { spacing } = stylesConfig;

  return (
    <Aside 
      cssXs={{ display: "none", position: "sticky", top: 0, height: "100vh", padding: `${spacing.md}px 20px` }} 
      cssMd={{ display: "block" }}
    >
      <Grid container gap={spacing.lg}>
        <Grid gap={spacing.sm}>
          <Brand as="h1" />
          <SocialMedia />
        </Grid>
        <LineSeperator />
        <Grid container gap={spacing.sm}>
          {link.pages.map(({ title, href }) => 
            <Link key={title} title={title} href={href} />
          )}
        </Grid>
      </Grid>
    </Aside>
  );
}
