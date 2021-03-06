import STYLES_CONFIG from "../../../styles.config";
import { H1, Section } from "../../../styles/MameStyled/core/HtmlTag";
import Heading from "../molecules/Heading";
import Landfield from "../atoms/Landfield";
import { ReactElement, useId } from "react";
import type { ReactNode } from "react";
import useSetAutoHead from "../../hooks/useSetAutoHead";

const { spacing } = STYLES_CONFIG;

interface Props {
  children: ReactNode | ReactNode[];
  member?: string;
  title?: string;
  appeal?: string;
  description?: string;
  noLandfield?: true;
  background?: string;
}

export default function Preview({ 
  children, 
  member, 
  title = "Result Preview", 
  appeal, 
  description, 
  noLandfield, 
  background, 
}: Props): ReactElement {
  const id = useId();
  const setAutoHead = useSetAutoHead({ id });

  return (
    <Section id={id} cssXs={{ display: "grid", gap: spacing.sm }}>
      <Heading head={setAutoHead || H1} member={member} title={title} appeal={appeal} description={description} /> 
      {noLandfield ? children : <Landfield background={background}>{children}</Landfield>}
    </Section>
  );
}
