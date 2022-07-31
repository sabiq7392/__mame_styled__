import { Footer as MameFooter } from "../../../styles/MameStyled/core/HtmlTag";
import STYLES_CONFIG from "../../../styles.config";
import { Grid } from "../../../styles/MameStyled/core/display/Grid";
import Author from "../molecules/Author";
import Brand from "../molecules/Brand";
import SocialMedia from "../molecules/SocialMedia";
import { ReactElement } from "react";

export default function Footer(): ReactElement {
  const { color, spacing } = STYLES_CONFIG;

  return (
    <MameFooter cssXs={{ marginTop: spacing.sxxl, background: color.base.secondary.default }}>
      <Grid 
        container
        gap={spacing.md}
        cols={{ xs: 1, md: 3 }}
        cssXs={{ maxWidth: 1440, margin: "auto", padding: spacing.md, justifyContent: "space-between" }}
      >
        <Grid item cssMd={{ alignSelf: "center" }}>
          <Author />
        </Grid>
        <Grid item cssMd={{ placeSelf: "center" }}>
          <Brand as="small" />
        </Grid>
        <Grid item cssMd={{ alignSelf: "center", justifySelf: "end" }}>
          <SocialMedia />
        </Grid>
      </Grid>
    </MameFooter>
  );
}





