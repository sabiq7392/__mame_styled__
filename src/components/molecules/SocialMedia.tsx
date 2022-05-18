import { Flex } from "../../../styles/MameStyled/core/display/Flex";
import { A } from "../../../styles/MameStyled/core/HtmlTag.ts";
import stylesConfig from "../../../styles.config";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps.tsx";
import Linkedin from "../atoms/icons/Linkedin";
import Github from "../atoms/icons/Github";
import Instagram from "../atoms/icons/Instagram";
import link from "../../../link.config";

const { authors } = link;

export default function SocialMedia({ ...props }) {
  ErrorUnexpectedProps({ props, component: "SocialMedia.jsx" });

  const { color, spacing, timing } = stylesConfig;

  const css = {
    display: "flex",
    alignItems: "center", 
    transition: timing.fast,
    color: "white",
  };

  const hover = { color: color.primary };

  return (
    <Flex gap={spacing.sm}>
      <A href={authors[0].socialMedia.instagram} cssXs={css} hover={hover}>
        <Instagram />
      </A>
      <A href={authors[0].socialMedia.github} cssXs={css} hover={hover}> 
        <Github />
      </A>
      <A href={authors[0].socialMedia.linkedin} cssXs={css} hover={hover}>
        <Linkedin />
      </A>
    </Flex>
  );
}
