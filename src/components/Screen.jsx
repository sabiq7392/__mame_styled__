import { Div, H2 } from '../../styles/MameStyled/core/HtmlTag.styled';
import Container from './_partials/Container';
import Heading from './_partials/Heading';

export default function Screen() {
  return (
    <div>
      <Container as="article">
        <Heading as={H2} title="Screen" />
      </Container>
    </div>
  );
}


function ResultCodePreview() {

}