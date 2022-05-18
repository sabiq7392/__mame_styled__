import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps";
import Description from "../atoms/Description";
import Appeal from "../atoms/Appeal";
import stylesConfig from "../../../styles.config";
import { H1, H2, H3, H4, H5, H6, Header, Span } from "../../../styles/MameStyled/core/HtmlTag";
import { ReactElement, ReactNode } from "react";
import { THead } from "../../../styles/MameStyled/core/utils/types/index";


interface Props {
  head: THead,
  title: string;
  description: string | ReactNode;
  member?: string;
  appeal?: string;
  headWeight?: 500 | 600 | 800 | 900 | "bold" | "normal" | "black";
}


const { color, spacing } = stylesConfig;

export default function Heading({ 
  head, 
  title, 
  appeal, 
  member, 
  headWeight, 
  description, 
  ...props 
}: Props): ReactElement {
  ErrorUnexpectedProps({ props, componentName: "Header" });
  
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
      {appeal ? <Appeal text={appeal}/> : null}
      {description ? <Description text={description} /> : null}
    </Header>
  );
}
