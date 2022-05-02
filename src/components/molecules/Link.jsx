import { default as NextLink } from "next/link";
import { A } from "../../../styles/MameStyled/core/HtmlTag";
import CatchErrorPropsComponent from "../../../styles/MameStyled/core/components/handle-error/CatchErrorPropsComponent";
import propTypes from "prop-types";
import stylesConfig from "../../../styles.config";
import { useRouter } from "next/router";

export default function Link({ href, text, ...props }) {
  CatchErrorPropsComponent({ props, component: "Link" });

  const router = useRouter();

  const { color, timing } = stylesConfig;

  return (
    <NextLink href={href} passHref>
      <A 
        cssXs={{ color: router.pathname === href ? color.primary : "white", transition: timing.fast, }} 
        hover={{ color: color.primary }}
      >
        {text}
      </A>
    </NextLink>
  );
}

const { string } = propTypes;

Link.propTypes = {
  href: string.isRequired,
  text: string.isRequired,
};


