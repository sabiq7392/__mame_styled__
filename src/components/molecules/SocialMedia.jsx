import { Flex } from "../../../styles/MameStyled/core/display/Flex";
import { A } from "../../../styles/MameStyled/core/HtmlTag";
import aboutMe from "../../data/aboutMe";
import stylesConfig from "../../../styles.config";
import CatchErrorPropsComponent from "../../../styles/MameStyled/core/components/handle-error/CatchErrorPropsComponent";
import Linkedin from "../atoms/icons/Linkedin";
import Github from "../atoms/icons/Github";
import Instagram from "../atoms/icons/Instagram";

export default function SocialMedia({ ...props }) {
  CatchErrorPropsComponent({ props, component: "SocialMedia.jsx" });

  const { color, spacing, timing } = stylesConfig;

  const css = {
    display: "flex",
    alignItems: "center", 
    transition: timing.fast,
    color: "white",
  };

  const hover = { color: color.primary }

  return (
    <Flex gap={spacing.sm}>
      <A href={aboutMe.instagram} cssXs={css} hover={hover}>
        <Instagram />
      </A>
      <A href={aboutMe.github} cssXs={css} hover={hover}> 
        <Github />
      </A>
      <A href={aboutMe.linkedin} cssXs={css} hover={hover}>
        <Linkedin />
      </A>
    </Flex>
  );
}
