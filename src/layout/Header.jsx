import {  Header as MameHeader, H1, P, A } from '../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../styles.config';
import Description from '../components/_partials/Description';

export default function Header() {
  const { color, spacing, radius, timing } = stylesConfig;

  return (
    <MameHeader 
      css={{ padding: `${spacing.sxxl}px ${spacing.sm}px`, maxWidth: 1200, margin: 'auto', display: 'grid', gap: spacing.md, textAlign: 'center' }}
      cssSm={{ padding: `${spacing.sxxl}px ${spacing.md}px` }}
      cssLg={{ padding: `${spacing.sxxl}px ${spacing.sxxl}px` }}
    >
      <H1 bold center 
        size={{ xs: '2rem', md: '3rem',  lg: '4rem' }}
        css={{ margin: 0, lineHeight: 1.15, color: color.white }}
      >
        Welcome to <A href="#" css={{ color: color.primary }}>Mame Styled</A>
      </H1>
      <Description 
        text="
          this is a styled component that makes it easy to develop user interfaces, 
          where you can write internal css in inline css style. 
          hopefully if you use this you can easily create components without having to create css files again
        "
        size={{ xs: 12, md: 14, lg: 16 }}
      />
      
      <A 
        href="/docs/index.html" 
        css={{ backgroundColor: color.primary, padding: 5, color: 'white', borderRadius: radius.sm, maxWidth: 500, width: '100%', placeSelf: 'center', transition: timing.fast }}
        cssLg={{ padding: 10 }}
        hover={{ filter: 'brightness(80%)' }}
        size={{ xs: 12, md: 14, lg: 16 }}
      >
        Documentation
      </A>
    </MameHeader>
  );
}