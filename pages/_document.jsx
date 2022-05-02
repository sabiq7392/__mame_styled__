import { Head, Html, Main, NextScript } from "next/document";
import stylesConfig from "../styles.config";

export default function Document() {
  const { color } = stylesConfig;
  
  return (
    <Html lang="en">
      <Head />
      <body style={{ background: color.base.primary }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
