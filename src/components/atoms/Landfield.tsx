import { string } from "prop-types";
import { node } from "prop-types";
import STYLES_CONFIG from "../../../styles.config";
import { Div } from "../../../styles/MameStyled/core/HtmlTag.ts";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps.tsx";

export default function Landfield({ children, background, ...props }) {
  ErrorUnexpectedProps({ props, component: "Landifield", type: "Molecules" });

  const { color, radius, spacing } = STYLES_CONFIG;

  return (
    <Div cssXs={{ backgroundColor: background || color.base.secondary.default, borderRadius: radius.sm, padding: spacing.md }}>
      {children}
    </Div>
  );
}

Landfield.propTypes = {
  children: node.isRequired,
  background: string,
};
