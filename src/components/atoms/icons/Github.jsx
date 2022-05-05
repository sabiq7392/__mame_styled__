import propTypes from "prop-types";
import { AiOutlineGithub } from "react-icons/ai";
import ErrorUnexpectedProps from "../../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps";

export default function Github({ size, ...props }) {
  ErrorUnexpectedProps({ props, component: "Github" });

  return (
    <AiOutlineGithub fontSize={size || 24} />
  );
}

Github.propTypes = {
  size: propTypes.number,
};
