import { Head, Html, Main, NextScript } from "next/document";
import stylesConfig from "../styles.config";

export default function Document() {
  const { color } = stylesConfig;
  
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap" rel="stylesheet" />
      </Head>
      <body style={{ background: color.base.primary }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
