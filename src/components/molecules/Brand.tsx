import { A, H1 } from "../../../styles/MameStyled/core/HtmlTag.ts";
import STYLES_CONFIG from "../../../styles.config";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps.tsx";
import propTypes from "prop-types";
import Link from "next/link";

export default function Brand({ as, ...props }) {
  ErrorUnexpectedProps({ props, component: "Brand" });

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

Brand.propTypes = {
  as: propTypes.oneOf(["small", "h1"]),
};
