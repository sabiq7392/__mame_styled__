import ErrorUnexpectedProps from "../../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps.tsx";
import { BsLinkedin } from "react-icons/bs";
import propTypes from "prop-types";

export default function Linkedin({ size, ...props }) {
  ErrorUnexpectedProps({ props, component: "Linkedin" });

  return (
    <BsLinkedin fontSize={size || 18} />
  );
}

Linkedin.propTypes = {
  size: propTypes.number,
};
