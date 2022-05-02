import { H1, H2, H3, H4, H5, H6, Header, Span } from "../../../styles/MameStyled/core/HtmlTag";
import CatchErrorPropsComponent from "../../../styles/MameStyled/core/utils/handle-error/CatchErrorPropsComponent";
import Description from "../atoms/Description";
import Appeal from "../atoms/Appeal";
import stylesConfig from "../../../styles.config";
import { oneOfType, string, oneOf, node } from "prop-types";

export default function Heading({ head, title, appeal, member, headWeight, description, ...props }) {
  CatchErrorPropsComponent({ props, component: "Header" });
  
  const { color, spacing } = stylesConfig;

  const cssHead = {
    color: color.white,
    fontWeight: headWeight || "bold",
  };

  const styleMember = {
    color: color.light,
    fontSize: 10,
    marginRight: spacing.xs,
    fontWeight: "normal",
  };

  return (
    <Header cssXs={{ display: "grid", gap: spacing.xs }}>
      <H1 as={head} cssXs={cssHead}>{member ? <Span cssXs={styleMember}>{member}</Span> : null} {title}</H1>
      {appeal ? <Appeal text={appeal} /> : null}
      {description ? <Description text={description} /> : null}
    </Header>
  );
}

Heading.propTypes = {
  head: oneOf([H1, H2, H3, H4, H5, H6]).isRequired,
  title: string.isRequired,
  description: oneOfType([string.isRequired, node.isRequired]),
  member: string,
  appeal: string,
  headWeight: oneOf([500, 600, 800, 900, "bold", "normal", "black"])
};
