import { AiOutlineInstagram } from "react-icons/ai";
import CatchErrorPropsComponent from "../../../../styles/MameStyled/core/utils/handle-error/CatchErrorPropsComponent";
import propTypes from "prop-types";

export default function Instagram({ size, ...props }) {
  CatchErrorPropsComponent({ props, component: "Instagram" });

  return (
    <AiOutlineInstagram fontSize={size || 24} /> 
  );
}

Instagram.propTypes = {
  size: propTypes.number,
};
