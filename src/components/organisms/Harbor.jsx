import Container from "../atoms/Container";
import stylesConfig from "../../../styles.config";
import propTypes from "prop-types";
import CatchErrorPropsComponent from "../../../styles/MameStyled/core/utils/handle-error/CatchErrorPropsComponent";
import Heading from "../molecules/Heading";
import { H2 } from "../../../styles/MameStyled/core/HtmlTag";
import { useId } from "react";
import SetAutoHead from "../../utils/SetAutoHead";
import { Flex } from "../../../styles/MameStyled/core/display/Flex";

export default function Harbor({ children, member, title, appeal, description, ...props }) {
  CatchErrorPropsComponent({ props, CatchErrorPropsComponent: "Harbor", type: "Organisms" });

  const { spacing } = stylesConfig;
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

const { node, string } = propTypes;

Harbor.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  member: string,
  appeal: string,
  description: string,
};
