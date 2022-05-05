import { AiOutlineInstagram } from "react-icons/ai";
import ErrorUnexpectedProps from "../../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps";
import propTypes from "prop-types";

export default function Instagram({ size, ...props }) {
  ErrorUnexpectedProps({ props, component: "Instagram" });

  return (
    <AiOutlineInstagram fontSize={size || 24} /> 
  );
}

Instagram.propTypes = {
  size: propTypes.number,
};
