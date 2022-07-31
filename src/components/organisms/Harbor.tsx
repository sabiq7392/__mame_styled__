import Container from "../atoms/Container";
import STYLES_CONFIG from "../../../styles.config";
import Heading from "../molecules/Heading";
import { H2 } from "../../../styles/MameStyled/core/HtmlTag";
import { useId } from "react";
import SetAutoHead from "../../utils/SetAutoHead";
import { Flex } from "../../../styles/MameStyled/core/display/Flex";
import { ReactNode } from "react";
import { ReactElement } from "react";

const { spacing } = STYLES_CONFIG;

interface Props {
  children: ReactNode,
  title: string,
  member?: string,
  appeal?: string,
  description?: string,
}

export default function Harbor({ 
  children, 
  member, 
  title, 
  appeal, 
  description, 
}: Props): ReactElement {
  const id = useId();

  return (
    <Container id={id} as="article" standard>
      <Flex direction="column" gap={spacing.md}> 
        <Heading head={SetAutoHead({ id }) || H2} member={member} title={title} appeal={appeal} description={description} /> 
        <Flex direction="column" gap={spacing.lg}>
          {children}
        </Flex>
      </Flex>
    </Container>
  );
}
