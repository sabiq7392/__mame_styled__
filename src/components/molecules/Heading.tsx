import Description from "../atoms/Description";
import Appeal from "../atoms/Appeal";
import STYLES_CONFIG from "../../../styles.config";
import { H1, Header, Span } from "../../../styles/MameStyled/core/HtmlTag";
import { ReactElement, ReactNode } from "react";
import { THead } from "../../../styles/MameStyled/core/utils/types/index";
import { CSSProperties } from "styled-components";

const { color, spacing } = STYLES_CONFIG;

interface Props {
  head: THead,
  title: string;
  description?: string | ReactNode;
  member?: string;
  appeal?: string;
  headWeight?: 500 | 600 | 800 | 900 | "bold" | "normal" | "black";
}

export default function Heading({ 
  head, 
  title, 
  appeal, 
  member, 
  headWeight, 
  description, 
}: Props): ReactElement {
  const cssHead: CSSProperties = {
    color: color.white,
    fontWeight: headWeight || "bold",
  };

  const styleMember: CSSProperties = {
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
