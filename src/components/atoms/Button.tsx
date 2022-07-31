import Link from "next/link";
import { ReactElement } from "react";
import { CSSProperties } from "styled-components";
import STYLES_CONFIG from "../../../styles.config";
import { A, Button as MameButton } from "../../../styles/MameStyled/core/HtmlTag";

interface Props {
  text: string,
  href: string,
}

export default function Button({ text, href }: Props): ReactElement {
  const { color, radius, timing } = STYLES_CONFIG;

  const css: CSSProperties = {
    background: color.base.secondary.default,
    border: "none",
    padding: 5, 
    color: "white", 
    borderRadius: radius.sm, 
    maxWidth: 500, 
    width: "100%", 
    placeSelf: "center", 
    transition: timing.fast,
    fontWeight: 600,
    textAlign: "center"
  };

  const cssLg: CSSProperties = { padding: 10 };

  const hover: CSSProperties = { filter: "brightness(80%)" };

  return (
    <>
      {href ? 
        <Link href={href} passHref>
          <A cssXs={css} cssLg={cssLg} hover={hover}>
            {text}
          </A>
        </Link>
      :
        <MameButton cssXs={css} cssLg={cssLg} hover={hover}>
        {text}
        </MameButton>
      }
    </>
  );
}
