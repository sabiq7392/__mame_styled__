import Head from 'next/head'
import Image from 'next/image'
import DisplayFlex from '../src/components/DisplayFlex'
import DisplayGrid from '../src/components/DisplayGrid'
import HtmlTag from '../src/components/HtmlTag'
import IsTypography from '../src/components/IsTyphography'
import Screen from '../src/components/Screen'
import styles from '../styles/Home.module.css'
import { H1, P } from '../styles/MameStyled/core/HtmlTag.styled'
import { Grid, Header, Main, Typography } from '../styles/MameStyled/Mame.styled'

/**
 * Home Page
 * @component
 * @returns Grid Template Column
 */
function Home() {
  return (
    <>
      <Screen />
      <HtmlTag />
      <DisplayGrid />
      {/* <DisplayFlex /> */}
      <IsTypography />
    </>
  )
}

export default Home;
