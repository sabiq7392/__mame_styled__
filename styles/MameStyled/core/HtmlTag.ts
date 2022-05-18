import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";
import attributes from "../utils/constants/attributes";

type Props = {
  cssXs?: CSSProperties,
  cssSm?: CSSProperties,
  cssMd?: CSSProperties,
  cssLg?: CSSProperties,
  cssXl?: CSSProperties,
  cssXxl?: CSSProperties,
  as?: Element | string | undefined | string | ReactNode,
  debug?: true,
  fontSize?: any, 
};

export const A = styled.a<Props>(...attributes);
export const Abbr = styled.abbr<Props>(...attributes);
export const Address = styled.address<Props>(...attributes);
export const Area = styled.area<Props>(...attributes);
export const Article = styled.article<Props>(...attributes);
export const Aside = styled.aside<Props>(...attributes);
export const Audio = styled.audio<Props>(...attributes);
export const B = styled.b<Props>(...attributes);
export const Bdi = styled.bdi<Props>(...attributes);
export const Bdo = styled.bdo<Props>(...attributes);
export const Blockquote = styled.blockquote<Props>(...attributes);
export const Body = styled.body<Props>(...attributes);
export const Br = styled.br<Props>(...attributes);
export const Button = styled.button<Props>(...attributes);
export const Canvas = styled.canvas<Props>(...attributes);
export const Caption = styled.caption<Props>(...attributes);
export const Cite = styled.cite<Props>(...attributes);
export const Code = styled.code<Props>(...attributes);
export const Col = styled.col<Props>(...attributes);
export const Colgroup = styled.colgroup<Props>(...attributes);
export const Data = styled.data<Props>(...attributes);
export const Datalist = styled.datalist<Props>(...attributes);
export const Dd = styled.dd<Props>(...attributes);
export const Del = styled.del<Props>(...attributes);
export const Details = styled.details<Props>(...attributes);
export const Dfn = styled.dfn<Props>(...attributes);
export const Dialog = styled.dialog<Props>(...attributes);
export const Div = styled.div<Props>(...attributes);
export const Dl = styled.dl<Props>(...attributes);
export const Dt = styled.dt<Props>(...attributes);
export const Em = styled.em<Props>(...attributes);
export const Embed = styled.embed<Props>(...attributes);
export const Fieldset = styled.fieldset<Props>(...attributes);
export const Figcaption = styled.figcaption<Props>(...attributes);
export const Figure = styled.figure<Props>(...attributes);
export const Footer = styled.footer<Props>(...attributes);
export const Form = styled.form<Props>(...attributes);
export const H1 = styled.h1<Props>(...attributes);
export const H2 = styled.h2<Props>(...attributes);
export const H3 = styled.h3<Props>(...attributes);
export const H4 = styled.h4<Props>(...attributes);
export const H5 = styled.h5<Props>(...attributes);
export const H6 = styled.h6<Props>(...attributes);
export const Header = styled.header<Props>(...attributes);
export const Hr = styled.hr<Props>(...attributes);
export const I = styled.i<Props>(...attributes);
export const Img = styled.img<Props>(...attributes);
export const Input = styled.input<Props>(...attributes);
export const Ins = styled.ins<Props>(...attributes);
export const Kbd = styled.kbd<Props>(...attributes);
export const Label = styled.label<Props>(...attributes);
export const Legend = styled.legend<Props>(...attributes);
export const Li = styled.li<Props>(...attributes);
export const Link = styled.link<Props>(...attributes);
export const Main = styled.main<Props>(...attributes);
export const Map = styled.map<Props>(...attributes);
export const Mark = styled.mark<Props>(...attributes);
export const Meta = styled.meta<Props>(...attributes);
export const Meter = styled.meter<Props>(...attributes);
export const Nav = styled.nav<Props>(...attributes);
export const Noscript = styled.noscript<Props>(...attributes);
export const Object = styled.object<Props>(...attributes);
export const Ol = styled.ol<Props>(...attributes);
export const Optgroup = styled.optgroup<Props>(...attributes);
export const Option = styled.option<Props>(...attributes);
export const Output = styled.output<Props>(...attributes);
export const P = styled.p<Props>(...attributes);
export const Param = styled.param<Props>(...attributes);
export const Picture = styled.picture<Props>(...attributes);
export const Pre = styled.pre<Props>(...attributes);
export const Progress = styled.progress<Props>(...attributes);
export const Q = styled.q<Props>(...attributes);
export const Rp = styled.rp<Props>(...attributes);
export const Rt = styled.rt<Props>(...attributes);
export const Ruby = styled.ruby<Props>(...attributes);
export const S = styled.s<Props>(...attributes);
export const Samp = styled.samp<Props>(...attributes);
export const Section = styled.section<Props>(...attributes);
export const Select = styled.select<Props>(...attributes);
export const Small = styled.small<Props>(...attributes);
export const Source = styled.source<Props>(...attributes);
export const Span = styled.span<Props>(...attributes);
export const Strong = styled.strong<Props>(...attributes);
export const Style = styled.style<Props>(...attributes);
export const Sub = styled.sub<Props>(...attributes);
export const Summary = styled.summary<Props>(...attributes);
export const Sup = styled.sup<Props>(...attributes);
export const Svg = styled.svg<Props>(...attributes);
export const Table = styled.table<Props>(...attributes);
export const Tbody = styled.tbody<Props>(...attributes);
export const Td = styled.td<Props>(...attributes);
// export const Template = styled.template<Props>(...attributes); // cant defined
export const Textarea = styled.textarea<Props>(...attributes);
export const Tfoot = styled.tfoot<Props>(...attributes);
export const Th = styled.th<Props>(...attributes);
export const Thead = styled.thead<Props>(...attributes);
export const Time = styled.time<Props>(...attributes);
export const Tr = styled.tr<Props>(...attributes);
export const Track = styled.track<Props>(...attributes);
export const U = styled.u<Props>(...attributes);
export const Ul = styled.ul<Props>(...attributes);
export const Var = styled.var<Props>(...attributes);
export const Video = styled.video<Props>(...attributes);
export const Wbr = styled.wbr<Props>(...attributes);
