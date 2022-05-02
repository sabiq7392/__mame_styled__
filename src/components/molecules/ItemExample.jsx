import { Grid, Flex } from "../../../styles/MameStyled/core/display/_Display.styled";
import PropTypes from "prop-types";
import stylesConfig from "../../../styles.config";
import { A, H2, P, Div } from "../../../styles/MameStyled/core/HtmlTag.styled";
import CatchErrorPropsComponent from "../../../styles/MameStyled/core/components/handle-error/CatchErrorPropsComponent";

export default function ItemExample({  item, title, href, description, ...props }) {
  CatchErrorPropsComponent({ props, component: "ItemExample.jsx" });
  
  const { radius, spacing, color, timing } = stylesConfig;

  const css = {
    padding: spacing.md, 
    borderRadius: radius.sm, 
    transition: timing.fast,
    backgroundColor: color.base.secondary.default,
    height: "100%",
  };

  const hover = { background: color.base.secondary.hover };

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

// eslint-disable-next-line react/prop-types
function Item({ href, title, description }) {
  const { spacing, color } = stylesConfig;

  return (
    <A href={href} cssXs={{ display: "grid", gap: spacing.sm, color: color.white }}>
      <H2>{title} &rarr;</H2>
      <P>{description}</P>
    </A>
  );
}

const { oneOf, string } = PropTypes;


ItemExample.propTypes = {
  item: oneOf(["grid", "flex"]).isRequired,
  title: string.isRequired,
  href: string.isRequired,
  description: string.isRequired,
};
