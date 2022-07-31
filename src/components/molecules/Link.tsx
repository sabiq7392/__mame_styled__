import { default as NextLink } from "next/link";
import { A } from "../../../styles/MameStyled/core/HtmlTag";
import STYLES_CONFIG from "../../../styles.config";
import { NextRouter, useRouter } from "next/router";
import { ReactElement } from "react";

interface Props {
  href: string,
  title: string,
}

export default function Link({ href, title }: Props): ReactElement {
  const router: NextRouter = useRouter();

  const { color, timing } = STYLES_CONFIG;

  return (
    <NextLink href={href} passHref>
      <A 
        cssXs={{ color: router.pathname === href ? color.primary : "white", transition: timing.fast, }} 
        hover={{ color: color.primary }}
      >
        {title}
      </A>
    </NextLink>
  );
}
