import { Article } from '../../styles/MameStyled/core/HtmlTag.styled';
import { Flex } from '../../styles/MameStyled/core/display/Flex.styled';
import Container from './_partials/Container';

function DisplayFlex() {
  return (
    <Container>
      <h2>Display Flexsss</h2>
      <Flex 
        container 
        gap={15}
      >
        <Flex item css={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', padding: 30, borderRadius: 8 }}>
          <a href="https://nextjs.org/docs">
            <h2>1 Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </Flex>
        <Flex item css={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', padding: 30, borderRadius: 8 }}>
          <a href="https://nextjs.org/learn">
            <h2>2 Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </Flex>
        <Flex item css={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', padding: 30, borderRadius: 8 }}>
          <a href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>3 Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </Flex>
        <Flex item css={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', padding: 30, borderRadius: 8 }}>
          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2>4 Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </Flex>
      </Flex>
    </Container>
  )
}

export default DisplayFlex;