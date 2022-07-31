import { P } from "../../../styles/MameStyled/core/HtmlTag";
import STYLES_CONFIG from "../../../styles.config";
import { ReactElement, ReactNode } from "react";
import { ResponsiveCss } from "../../../styles/MameStyled/core/utils/types";

const { font } = STYLES_CONFIG;

interface Props {
  text: string | ReactNode,
  textAlign?: "center" | "left" | "right",
  margin?: string | number,
  color?: string,
  fontSize?: ResponsiveCss,
}

export default function Description(
  { textAlign, margin, color, text, fontSize }: Props
): ReactElement {
  const css = { 
    textAlign: textAlign, 
    margin: margin ?? "auto", 
    lineHeight: font.lineHeight, 
    color: color ?? STYLES_CONFIG.color.light
  };

  return (
    <P cssXs={css} fontSize={fontSize}>{text}</P>
  );
}

