import { H3 } from '../../styles/MameStyled/core/HtmlTag.styled';
import { Flex } from '../../styles/MameStyled/core/display/Flex.styled';
import Container from './_partials/Container';
import ItemExample from './_partials/ItemExample';
import nextJsExample from '../data/nextJsExample';
import stylesConfig from '../../styles.config';

function DisplayFlex() {
  const { color } = stylesConfig;

  return (
    <Container>
      <H3 css={{ color: color.white }}>Display Flex</H3>
      <Flex  container  gap={15}>
        {nextJsExample.map(({ title, href, description }, _key) => 
          <ItemExample key={_key} item="flex" title={title} href={href} description={description} />
        )}
      </Flex>
    </Container>
  )
}

export default DisplayFlex;