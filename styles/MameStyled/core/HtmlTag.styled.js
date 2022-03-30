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
export const A = styled.a(...attributes, setFontSize);
export const Address = styled.address(...attributes, setFontSize);
export const Area = styled.area(...attributes);
export const Article = styled.article(...attributes);
export const Aside = styled.aside(...attributes);
export const Audio = styled.audio(...attributes);
export const B = styled.b(...attributes, setFontSize);
export const Blockquote = styled.blockquote(...attributes, setFontSize);
export const Br = styled.br(...attributes);
export const Button = styled.button(...attributes);

export const Caption = styled.caption(...attributes, setFontSize);
export const Datalist = styled.datalist(...attributes);
export const Details = styled.details(...attributes);
export const Div = styled.div(...attributes);
export const Fieldset = styled.fieldset(...attributes);
export const Figure = styled.figure(...attributes);
export const Figcaption = styled.figcaption(...attributes, setFontSize);
export const Footer = styled.footer(...attributes);
export const Form = styled.form(...attributes);
export const H1 = styled.h1(...attributes, setFontSize);

export const H2 = styled.h2(...attributes, setFontSize);
export const H3 = styled.h3(...attributes, setFontSize);
export const H4 = styled.h4(...attributes, setFontSize);
export const H5 = styled.h5(...attributes, setFontSize);
export const H6 = styled.h6(...attributes, setFontSize);
export const Header = styled.header(...attributes);
export const Hr = styled.hr(...attributes);
export const I = styled.i(...attributes, setFontSize);
export const Img = styled.img(...attributes);
export const Input = styled.input(...attributes);

export const Label = styled.label(...attributes);
export const Legend = styled.legend(...attributes, setFontSize);
export const Li = styled.li(...attributes);
export const Main = styled.main(...attributes);
export const Nav = styled.nav(...attributes);
export const Ol = styled.ol(...attributes);
export const Option = styled.option(...attributes);
export const P = styled.p(...attributes, setFontSize);
export const Picture = styled.picture(...attributes);
export const Section = styled.section(...attributes);

export const Select = styled.select(...attributes);
export const Small = styled.small(...attributes, setFontSize);
export const Span = styled.span(...attributes);
export const Strong = styled.strong(...attributes);
export const Summary = styled.summary(...attributes, setFontSize);
export const Table = styled.table(...attributes);
export const Tbody = styled.tbody(...attributes);
export const Td = styled.td(...attributes);
export const Textarea = styled.textarea(...attributes);
export const Tfoot = styled.tfoot(...attributes);

export const Th = styled.th(...attributes);
export const Thead = styled.thead(...attributes);
export const Tr = styled.tr(...attributes);
export const Ul = styled.ul(...attributes);
export const Video = styled.video(...attributes);
