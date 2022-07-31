import { Flex } from "../../../styles/MameStyled/core/display/Flex";
import { A } from "../../../styles/MameStyled/core/HtmlTag";
import STYLES_CONFIG from "../../../styles.config";
import Linkedin from "../atoms/icons/Linkedin";
import Github from "../atoms/icons/Github";
import Instagram from "../atoms/icons/Instagram";
import link from "../../../link.config";
import { ReactElement } from "react";
import { CSSProperties } from "styled-components";

const { authors } = link;

export default function SocialMedia(): ReactElement {
  const { color, spacing, timing } = STYLES_CONFIG;

  const css: CSSProperties = {
    display: "flex",
    alignItems: "center", 
    transition: timing.fast,
    color: "white",
  };

  const hover: CSSProperties = { color: color.primary };

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
