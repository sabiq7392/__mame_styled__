import STYLES_CONFIG from "../../../styles.config";
import { Div } from "../../../styles/MameStyled/core/HtmlTag";
import { ReactElement, ReactNode } from "react";

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

const { color, spacing } = STYLES_CONFIG;

export default function Container({ 
  children, 
  as, 
  radius, 
  border, 
  standard, 
  display, 
  gap, 
  id, 
}: Props): ReactElement {
  const css = { 
    display: display ?? "grid", 
    gap: standard ? gap || spacing.sm : spacing.md ,
    padding: standard ? 0 : spacing.sm, 
    borderRadius: standard ? 0 : radius || STYLES_CONFIG.radius.md, 
    border: border ? `1px solid ${color.muted}` : "none", 
  };

  const cssLg = {
    padding: standard ? 0 : spacing.md,
  };

  return (
    <Div id={id} as={as} cssXs={css} cssLg={cssLg}>{children}</Div>
  );
}
