import propTypes from "prop-types";
import { AiOutlineGithub } from "react-icons/ai";
import CatchErrorPropsComponent from "../../../../styles/MameStyled/core/components/handle-error/CatchErrorPropsComponent";

export default function Github({ size, ...props }) {
  CatchErrorPropsComponent({ props, component: "Github" })

  return (
    <AiOutlineGithub fontSize={size || 24} />
  );
}

Github.propTypes = {
  size: propTypes.number,
};
