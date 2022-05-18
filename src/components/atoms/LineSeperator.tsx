import stylesConfig from "../../../styles.config";
import { Div } from "../../../styles/MameStyled/core/HtmlTag.ts";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps.tsx";

export default function LineSeperator({ ...props }) {
  ErrorUnexpectedProps({ props, component: "LineSeperator" });

  const { color } = stylesConfig;

  return (
    <Div cssXs={{ background: color.muted, width: "100%", height: 1 }} />
  );
}
