import {  Header as MameHeader, H1, P, A } from "../../styles/MameStyled/Mame.styled";

export default function Header() {
  return (
    <MameHeader style={{ padding: 120, display: 'grid', gap: 30, textAlign: 'center' }}>
      <H1 style={{ margin: 0, lineHeight: 1.15, fontSize: '4rem' }} >
        Welcome to <a href="#" style={{ color: '#0070f3' }}>Mame Styled</a>
      </H1>
      <P style={{ textAlign: 'center', maxWidth: 800, margin: 'auto', lineHeight: '175%' }}>this is a styled component that makes it easy to develop user interfaces, where you can write internal css in inline css style. hopefully if you use this you can easily create components without having to create css files again</P>
      <A href="/docs/index.html" css={{ backgroundColor: '#0070f3', padding: 10, color: 'white', borderRadius: 8 }}>
        Documentation
      </A>
    </MameHeader>
  );
}