import { Small } from "../../../styles/MameStyled/core/HtmlTag";
import stylesConfig from "../../../styles.config";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps";
import { string } from "prop-types";

export default function Author({ name, ...props }) {
  ErrorUnexpectedProps({ props, component: "Author.jsx" });

  const { color } = stylesConfig;

  const css = { 
    display: "grid", 
    alignItems: "center", 
    color: color.light, 
    fontSize: 10,  
  };

  return (
    <Small cssXs={css}>Author: {name || "Sabiq Muhammad Antebing Mame"}</Small>
  );
}

Author.propTypes = {
  name: string,
};
