import { ReactNode, ReactElement } from "react";
import STYLES_CONFIG from "../../../styles.config";
import { Div } from "../../../styles/MameStyled/core/HtmlTag";

interface Props {
  background?: string,
  children: ReactNode | ReactNode[],
}

export default function Landfield({ children, background }: Props): ReactElement {
  const { color, radius, spacing } = STYLES_CONFIG;

  return (
    <Div cssXs={{ backgroundColor: background || color.base.secondary.default, borderRadius: radius.sm, padding: spacing.md }}>
      {children}
    </Div>
  );
}
