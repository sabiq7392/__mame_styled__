import { default as NextLink } from "next/link";
import { A } from "../../../styles/MameStyled/core/HtmlTag.ts";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps.tsx";
import propTypes from "prop-types";
import STYLES_CONFIG from "../../../styles.config";
import { useRouter } from "next/router";

export default function Link({ href, title, ...props }) {
  ErrorUnexpectedProps({ props, component: "Link" });

  const router = useRouter();

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

const { string } = propTypes;

Link.propTypes = {
  href: string.isRequired,
  title: string.isRequired,
};


