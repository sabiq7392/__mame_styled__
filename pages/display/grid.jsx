import Container from '../../src/components/atoms/Container';
import Heading from '../../src/components/molecules/Heading';
import GridTemplateColumns from '../../src/components/templates/display-grid/GridTemplateColumns';
import { H2 } from '../../styles/MameStyled/core/HtmlTag.styled';

export default function DisplayGrid() {
  return (
    <Container as="article">
      <Heading head={H2} title="Display Grid" />
      <GridTemplateColumns />
    </Container>
  );
}
