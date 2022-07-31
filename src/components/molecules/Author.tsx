import { Small } from "../../../styles/MameStyled/core/HtmlTag";
import STYLES_CONFIG from "../../../styles.config";
import { ReactElement } from "react";

interface Props {
  name?: string,
}

export default function Author({ name }: Props): ReactElement {
  const { color } = STYLES_CONFIG;

  const css = { 
    display: "grid", 
    alignItems: "center", 
    color: color.light, 
    fontSize: 10,  
  };

  return (
    <Small cssXs={css}>Authors: {name || "Sabiq Muhammad Antebing Mame"}</Small>
  );
}
