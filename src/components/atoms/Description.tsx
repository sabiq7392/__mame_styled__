import { P } from "../../../styles/MameStyled/core/HtmlTag";
import STYLES_CONFIG from "../../../styles.config";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps";
import { ReactNode } from "react";

type Props = {
  text: string | ReactNode,
  textAlign?: "center" | "left" | "right",
  margin?: string | number,
  color?: string,
  fontSize?: string | number | object,
};

const { font } = STYLES_CONFIG;

export default function Description(
  { textAlign, margin, color, text, fontSize, ...props }: Props
) {
  ErrorUnexpectedProps({ props, componentName: "Description.jsx" });

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

