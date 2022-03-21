import { H2 } from '../../styles/MameStyled/core/HtmlTag.styled';
import GridTemplateColumns from './display-grid/GridTemplateColumns';
import Container from './_partials/Container';
import stylesConfig from '../../styles.config';

export default function DisplayGrid() {
  const { color } = stylesConfig;

  return (
    <Container>
      <H2 css={{ color: color.white }}>Display Grid</H2>
      <GridTemplateColumns />
    </Container>
  );
}

