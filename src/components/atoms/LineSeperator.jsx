import stylesConfig from "../../../styles.config";
import { Div } from "../../../styles/MameStyled/core/HtmlTag";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps";

export default function LineSeperator({ ...props }) {
  ErrorUnexpectedProps({ props, component: "LineSeperator" });

  const { color } = stylesConfig;

  return (
    <Div cssXs={{ background: color.muted, width: "100%", height: 1 }} />
  );
}
