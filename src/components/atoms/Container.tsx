import stylesConfig from "../../../styles.config";
import { Div } from "../../../styles/MameStyled/core/HtmlTag";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps";
import { ReactNode } from "react";

type Props = {
  children: ReactNode, 
  as: "article" | "section" | "div",
  radius?: number,
  border?: string,
  standard?: any,
  display?: "grid" | "flex",
  gap?: number,
  id?: string,
}

const { color, spacing } = stylesConfig;

function Container({ 
  children, 
  as, 
  radius, 
  border, 
  standard, 
  display, 
  gap, 
  id, 
  ...props 
}: Props) {
  ErrorUnexpectedProps({ props, component: "CodePreview.jsx" });

  const css = { 
    display: display ?? "grid", 
    gap: standard ? gap || spacing.sm : spacing.md ,
    padding: standard ? 0 : spacing.sm, 
    borderRadius: standard ? 0 : radius || stylesConfig.radius.md, 
    border: border ? `1px solid ${color.muted}` : "none", 
  };

  const cssLg = {
    padding: standard ? 0 : spacing.md,
  };

  return (
    <Div id={id} as={as} cssXs={css} cssLg={cssLg}>{children}</Div>
  );
}

export default Container;
