import { A, H1 } from "../../../styles/MameStyled/core/HtmlTag";
import STYLES_CONFIG from "../../../styles.config";
import Link from "next/link";
import { ReactElement } from "react";

interface Props {
  as?: "small" | "h1",
}

export default function Brand({ as }: Props): ReactElement {
  const { color } = STYLES_CONFIG;
  const css = { 
    fontWeight: "bold", 
    color: color.primary, 
    letterSpacing: 1,
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Link href="/" passHref>
      <A cssXs={{ display: "grid" }}>
        <H1 as={as} cssXs={css}>Mame Styled</H1>
      </A>
    </Link>
  );
}
