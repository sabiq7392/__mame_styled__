import { Grid, Flex } from "../../../styles/MameStyled/core/display/_display";
import PropTypes from "prop-types";
import STYLES_CONFIG from "../../../styles.config";
import { A, H2, P, Div } from "../../../styles/MameStyled/core/HtmlTag";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps";

export default function ItemExample({  item, title, href, description, ...props }) {
  ErrorUnexpectedProps({ props, component: "ItemExample.jsx" });
  
  const { radius, spacing, color, timing } = STYLES_CONFIG;

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
  const { spacing, color } = STYLES_CONFIG;

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
