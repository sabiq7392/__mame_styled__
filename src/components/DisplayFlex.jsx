import { Flex } from '../../styles/MameStyled/core/display/Flex.styled';
import Container from './_partials/Container';
import ItemExample from './_partials/ItemExample';
import nextJsExample from '../data/nextJsExample';
import stylesConfig from '../../styles.config';
import Heading from './_partials/Heading';

function DisplayFlex() {
  return (
    <Container as="article">
      <Heading as="h2" title="Display Flex" />
      <Flex container gap={15}>
        {nextJsExample.map(({ title, href, description }, _key) => 
          <ItemExample key={_key} item="flex" title={title} href={href} description={description} />
        )}
      </Flex>
    </Container>
  )
}

export default DisplayFlex;