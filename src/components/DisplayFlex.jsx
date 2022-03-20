import { Article, Flex } from "../../styles/MameStyled/Mame.styled";

function DisplayFlex() {
  return (
    <Article css={{ width: '100%', padding: 30, borderRadius: 12, border: '1px solid #eee' }}>
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
    </Article>
  )
}

export default DisplayFlex;