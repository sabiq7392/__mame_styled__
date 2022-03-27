import { Grid } from '../styles/MameStyled/core/display/_Display.styled';
import stylesConfig from '../styles.config';
import Button from '../src/components/atoms/Button';
import { Header, H1, A } from '../styles/MameStyled/core/HtmlTag.styled';
import Description from '../src/components/atoms/Description';

export default function Home() {
  const { spacing, color, radius, timing } = stylesConfig;

  return (
    <>
      <Header
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
        href="/getting-started" 
        css={{ backgroundColor: color.primary, padding: 5, color: 'white', borderRadius: radius.sm, maxWidth: 500, width: '100%', placeSelf: 'center', transition: timing.fast }}
        cssLg={{ padding: 10 }}
        hover={{ filter: 'brightness(80%)' }}
        size={{ xs: 12, md: 14, lg: 16 }}
      >
        Getting Started
      </A>
      </Header>
      <Grid container cols={{ xs: 1, sm: 2, md: 3, lg: 5 }} gap={spacing.sm}>
        <Button text="Display Grid" href="/display/grid" />
        <Button text="Display Flex" href="/display/flex" />
        <Button text="Typography" href="/typography" />
        <Button text="HTML Tag" href="/html-tag" />
        <Button text="Screen" href="/screen" />
      </Grid>
    </>
  )
}
