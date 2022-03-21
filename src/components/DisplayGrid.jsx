import { H2 } from '../../styles/MameStyled/core/HtmlTag.styled';
import GridTemplateColumns from './display-grid/GridTemplateColumns';
import Container from './_partials/Container';
import stylesConfig from '../../styles.config';
import Heading from './_partials/Heading';

export default function DisplayGrid() {
  return (
    <Container as="article">
      <Heading as="h2" title="Display Grid" />
      <GridTemplateColumns />
    </Container>
  );
}

