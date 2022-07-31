import { ReactElement } from "react";
import STYLES_CONFIG from "../../../styles.config";
import { Div } from "../../../styles/MameStyled/core/HtmlTag";

export default function LineSeperator(): ReactElement {
  const { color } = STYLES_CONFIG;

  return (
    <Div cssXs={{ background: color.muted, width: "100%", height: 1 }} />
  );
}
