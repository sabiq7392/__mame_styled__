import { Header, H1, A } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import Description from '../atoms/Description';

export default function Welcome() {
  const { color, spacing, radius, timing } = stylesConfig;
  
  const cssHeader = { 
    padding: `${spacing.sxxl}px ${spacing.sm}px`, 
    margin: 'auto', 
    display: 'grid', 
    gap: spacing.md, 
    textAlign: 'center', 
    border: `1px solid ${color.muted}`, 
    marginBottom: spacing.sxxl, 
  };

  return (
    <Header
      cssXs={cssHeader}
      cssSm={{ padding: `${spacing.sxxl}px ${spacing.md}px` }}
      cssLg={{ padding: `${spacing.sxxl}px ${spacing.sxxl}px` }}
    >
      <H1 bold center 
        fontSize={{ xs: '2rem', md: '3rem',  lg: '4rem' }}
        cssXs={{ margin: 0, lineHeight: 1.15, color: color.white }}
      >
        Welcome to <A href="#" cssXs={{ color: color.primary }}>Mame Styled</A>
      </H1>
      <Description 
        text="
          this is a styled component that makes it easy to develop user interfaces, 
          where you can write internal css in inline css style. 
          hopefully if you use this you can easily create components without having to create css files again
        "
        fontSize={{ xs: 12, md: 14, lg: 16 }}
      />
      <A 
        href="/getting-started" 
        cssXs={{ backgroundColor: color.primary, padding: 5, color: 'white', borderRadius: radius.sm, maxWidth: 500, width: '100%', placeSelf: 'center', transition: timing.fast }}
        cssLg={{ padding: 10 }}
        hover={{ filter: 'brightness(80%)' }}
        fontSize={{ xs: 12, md: 14, lg: 16 }}
      >
        Getting Started
      </A>
    </Header>
  );
}
