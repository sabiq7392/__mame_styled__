import stylesConfig from '../../styles.config';
import { Blockquote, Div, Figcaption, Figure, H1, Header, Img, Small, H3, H2 } from '../../styles/MameStyled/core/HtmlTag.styled';
import Appeal from './_partials/Appeal';
import CodePreview from './_partials/CodePreview';
import Container from './_partials/Container';
import Description from './_partials/Description';
import Heading from './_partials/Heading';

export default function HtmlTag() {
  const { spacing } = stylesConfig;

  return (
    <Container as="article" >
      <Header css={{ display: 'grid', gap: spacing.xs, }}>
        <Heading as={H2} title="HTML Tag" />
        <Appeal as="small" text="The HTML tag is superset!" />
        <Description text="
          you can easily use media screen , hover, internal css with inline 
          style. Provided you have to call the superset html 
          tag starting with uppercase" 
        />
      </Header>
      <ResultPreview />     
      <ResultCodePreview />
    </Container>
  );
}

function ResultPreview() {
  return (
    <Container as="section" standard>
      <Figure 
        cssLg={{ flexDirection: 'row', width: '75%' }}
        css={{ display: 'flex', flexDirection: 'column', background: '#1D2D50', width: '100%',  borderRadius: 8, color: '#f5f5f5', transition: '200ms' }}
        hover={{ background: '#133B5C' }}
      >
        <Img src="/images/photos/sabiq-mini.jpg" alt="Sabiq Muhammad" 
          css={{ width: 125, height: 125, objectFit: 'cover', objectPosition: 'top', borderRadius: '50%', margin: '20px auto 0 auto' }} 
          cssLg={{ width: 200, height: '100%', borderRadius: '8px 0px 0px 8px', padding: 0, margin: 0 }}
        />
        <Div css={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, padding: 20 }}>
          <Blockquote css={{ lineHeight: '175%', color: 'rgba(255, 255, 255, 0.8)' }} size={{ xs: 10, md: 12, lg: 14}}>
            {`"`}This a styled component that makes it easy to develop user interfaces, 
            where you can write internal css in inline css style. hopefully if you use this you can 
            easily create components without having to create css files again{`"`}
          </Blockquote>
          <Figcaption css={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <H1 css={{ color: '#90E0EF', fontWeight: 500 }} size={{ xs: 14, md: 16, lg: 18 }}>Sabiq Muhammad</H1>
            <Small css={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: 600, letterSpacing: 0.4 }} size={{ xs: 10, md: 12, lg: 14 }}>Fullstack Developer, Jakarta</Small>
          </Figcaption>
        </Div>
      </Figure>
    </Container>
  );
}

function ResultCodePreview() {
  return (
    <CodePreview heading={H3} title="Result Code Preview" member="HTML Tag">
      {`
        import { Blockquote, Div, Figcaption, Figure, H1, Header, Img, P, Small } from '../../styles/MameStyled/core/HtmlTag.styled';


        <Figure 
          cssLg={{ flexDirection: 'row', width: '75%' }}
          css={{ display: 'flex', flexDirection: 'column', background: '#1D2D50', width: '100%',  borderRadius: 8, color: '#f5f5f5', transition: '200ms' }}
          hover={{ background: '#133B5C' }}
        >
          <Img src="/images/photos/sabiq-mini.jpg" alt="Sabiq Muhammad" 
            css={{ width: 125, height: 125, objectFit: 'cover', objectPosition: 'top', borderRadius: '50%', margin: '20px auto 0 auto' }} 
            cssLg={{ width: 200, height: '100%', borderRadius: '8px 0px 0px 8px', padding: 0, margin: 0 }}
          />
          <Div css={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, padding: 20 }}>
            <Blockquote css={{ lineHeight: '175%', color: 'rgba(255, 255, 255, 0.8)' }} size={{ xs: 10, md: 12, lg: 14}}>
              "This a styled component that makes it easy to develop user interfaces, 
              where you can write internal css in inline css style. hopefully if you use this you can 
              easily create components without having to create css files again"
            </Blockquote>
            <Figcaption css={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <H1 css={{ color: '#90E0EF', fontWeight: 500 }} size={{ xs: 14, md: 16, lg: 18 }}>Sabiq Muhammad</H1>
              <Small css={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: 600, letterSpacing: 0.4 }} size={{ xs: 10, md: 12, lg: 14 }}>Fullstack Developer, Jakarta</Small>
            </Figcaption>
          </Div>
        </Figure>
      `}
    </CodePreview>
  );
}