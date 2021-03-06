import { H1, Section } from "../../../styles/MameStyled/core/HtmlTag";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Heading from "../molecules/Heading";
import STYLES_CONFIG from "../../../styles.config";
import { ReactElement, useId } from "react";
import useSetAutoHead from "../../hooks/useSetAutoHead";

const { spacing } = STYLES_CONFIG;

interface Props {
  title?: string,
  member: string,
  children: string,
}

export default function CodePreview({ title = "Result Code Preview", member, children }: Props): ReactElement {
  const id = useId();
  const setAutoHead = useSetAutoHead({ id });

  return (
    <Section id={id} cssXs={{ display: "grid", gap: `calc(${spacing.sm}px - .5em)` }}>
      <Heading head={setAutoHead || H1} member={member} title={title}  />
      <SyntaxHighlighter language="html" style={vscDarkPlus}>
        {children}
      </SyntaxHighlighter>
    </Section>
  );
}
