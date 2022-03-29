import styled from 'styled-components';
import screen from '../config/screen.config';
import attributes from '../utils/constants/attributes';


// Sementara
const setFontSize = props => (
  !props.size ? false : (
    typeof props.size === 'number' ? {
      [`@media (${screen.xs})`]: { fontSize: props.size, }
    }
    : typeof props.size !== 'number' ?
    {
      [`@media (${screen.xs})`]: { fontSize: props.size.xs },
      [`@media (${screen.sm})`]: { fontSize: props.size.sm },
      [`@media (${screen.md})`]: { fontSize: props.size.md },
      [`@media (${screen.lg})`]: { fontSize: props.size.lg },
      [`@media (${screen.xl})`]: { fontSize: props.size.xl },
      [`@media (${screen.xxl})`]: { fontSize: props.size.xxl },
    }
    : false
  ) 
);

/** General */
export const Div = styled.div(...attributes);
export const Article = styled.article(...attributes);
export const Section = styled.section(...attributes);
export const Header = styled.header(...attributes);
export const Footer = styled.footer(...attributes);
export const Nav = styled.nav(...attributes);
export const Button = styled.button(...attributes);
export const Main = styled.main(...attributes);
export const Span = styled.span(...attributes);
export const Aside = styled.aside(...attributes);
export const Br = styled.br(...attributes);
export const Hr= styled.hr(...attributes);

/** image */
export const Figure = styled.figure(...attributes);
export const Img = styled.img(...attributes);
export const Picture = styled.picture(...attributes);
export const Caption = styled.caption(...attributes);
export const Figcaption = styled.figcaption(...attributes);

/** Form */
export const Input = styled.input(...attributes);
export const Form = styled.form(...attributes);
export const Fieldset = styled.fieldset(...attributes);
export const Legend = styled.legend(...attributes);
export const Label = styled.label(...attributes);
export const Select = styled.select(...attributes);

/** Table */
export const Table = styled.table(...attributes);
export const Tbody = styled.tbody(...attributes);
export const Thead = styled.thead(...attributes);
export const Tfoot = styled.tfoot(...attributes);
export const Tr = styled.tr(...attributes);
export const Th = styled.th(...attributes);
export const Td = styled.td(...attributes);

/** Typhography */
export const H1 = styled.h1(...attributes, setFontSize);
export const H2 = styled.h2(...attributes, setFontSize);
export const H3 = styled.h3(...attributes, setFontSize);
export const H4 = styled.h4(...attributes, setFontSize);
export const H5 = styled.h5(...attributes, setFontSize);
export const H6 = styled.h6(...attributes, setFontSize);
export const P = styled.p(...attributes, setFontSize);
export const A = styled.a(...attributes, setFontSize);
export const Small = styled.small(...attributes, setFontSize);
export const B = styled.b(...attributes, setFontSize);
export const I = styled.i(...attributes, setFontSize);
export const Blockquote = styled.blockquote(...attributes, setFontSize);
export const Strong = styled.strong(...attributes);

/** List */
export const Ul = styled.ul(...attributes);
export const Ol = styled.ol(...attributes);
export const Li = styled.li(...attributes);
