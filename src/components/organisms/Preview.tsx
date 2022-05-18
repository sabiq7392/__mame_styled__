import propTypes from "prop-types";
import stylesConfig from "../../../styles.config";
import { H1, Section } from "../../../styles/MameStyled/core/HtmlTag.ts";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps.tsx";
import SetAutoHead from "../../utils/SetAutoHead";
import Heading from "../molecules/Heading";
import Landfield from "../atoms/Landfield";
import { any } from "prop-types";
import { useId } from "react";

export default function Preview({ member, title = "Result Preview", appeal, description, children, noLandfield, background, ...props }) {
  ErrorUnexpectedProps({ props, component: "Review", type: "Organisms" });

  const { spacing } = stylesConfig;

  const id = useId();

  return (
    <Section id={id} cssXs={{ display: "grid", gap: spacing.sm }}>
      <Heading head={SetAutoHead({ id }) || H1} member={member} title={title} appeal={appeal} description={description} /> 
      {noLandfield ? children : <Landfield background={background}>{children}</Landfield>}
    </Section>
  );
}

const { string, node } = propTypes;

Preview.propTypes = {
  title: string,
  children: node.isRequired,
  member: string,
  appeal: string,
  description: string,
  noLandfield: any,
  background: string,
};
