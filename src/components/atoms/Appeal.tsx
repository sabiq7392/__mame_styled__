import { Strong } from "../../../styles/MameStyled/core/HtmlTag";
import STYLES_CONFIG from "../../../styles.config";
import { CSSProperties, ReactElement } from "react";

type Props = {
  text: string,
  css?: CSSProperties,
};

export default function Appeal({ text, css }: Props): ReactElement {
  const { color } = STYLES_CONFIG;

  const cssDefault = { 
    color: color.warning, 
    fontSize: 12,
    fontWeight: 600,
  };

  return (
    <Strong cssXs={css ?? cssDefault}>{text}</Strong>
  );
}
