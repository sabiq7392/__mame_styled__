import { Grid, Flex } from "../../../styles/MameStyled/core/display/_display";
import STYLES_CONFIG from "../../../styles.config";
import { A, H2, P, Div } from "../../../styles/MameStyled/core/HtmlTag";
import { ReactElement } from "react";
import { CSSProperties } from "styled-components";

interface Props extends PropsItem {
  item: "grid" | "flex",
}

export default function ItemExample({  item, title, href, description }: Props): ReactElement {
  const { radius, spacing, color, timing } = STYLES_CONFIG;

  const css: CSSProperties = {
    padding: spacing.md, 
    borderRadius: radius.sm, 
    transition: timing.fast,
    backgroundColor: color.base.secondary.default,
    height: "100%",
  };

  const hover: CSSProperties = { background: color.base.secondary.hover };

  return (
    <Div>
      {item === "grid" ? 
        <Grid item  cssXs={css} hover={hover}>
          <Item href={href} title={title} description={description} />
        </Grid>
        : item === "flex" ?
          <Flex item cssXs={css} hover={hover}>
            <Item href={href} title={title} description={description} />
          </Flex>
          : 
          <></>
      }
    </Div>
  );
}

interface PropsItem {
  title: string,
  href: string,
  description: string,
}

function Item({ href, title, description }: PropsItem): ReactElement {
  const { spacing, color } = STYLES_CONFIG;

  return (
    <A href={href} cssXs={{ display: "grid", gap: spacing.sm, color: color.white }}>
      <H2>{title} &rarr;</H2>
      <P>{description}</P>
    </A>
  );
}
