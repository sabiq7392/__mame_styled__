import {  Header as MameHeader, H1, P, A } from '../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../styles.config';
import Description from '../components/_partials/Description';

export default function Header() {
  const { color, spacing, radius, font } = stylesConfig;

  return (
    <MameHeader css={{ padding: spacing.sxxl, display: 'grid', gap: spacing.md, textAlign: 'center' }}>
      <H1 css={{ margin: 0, lineHeight: 1.15, fontSize: '4rem', color: color.white }} >
        Welcome to <A href="#" css={{ color: color.primary }}>Mame Styled</A>
      </H1>
      <Description 
        text="
          this is a styled component that makes it easy to develop user interfaces, 
          where you can write internal css in inline css style. 
          hopefully if you use this you can easily create components without having to create css files again
        "
      />
      
      <A 
        href="/docs/index.html" 
        css={{ backgroundColor: color.primary, padding: 10, color: 'white', borderRadius: radius.sm }}
        hover={{ filter: 'brightness(80%)' }}
      >
        Documentation
      </A>
    </MameHeader>
  );
}