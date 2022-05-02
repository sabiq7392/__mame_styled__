import styled from "styled-components";
import attributes from "../../utils/constants/attributes";

export const Flex = styled.div(
  props => (
    props.container || !props.item ? {
      display: "flex",
      alignItems: props.vCenter ? "center" : props.center ? "center" : props.alignItems,
      justifyContent: props.hCenter ? "center" : props.center ? "center" : props.justifyContent,
      gap: props.gap ?? props.gap + "px",
      flexDirection: props.direction,
    }
    : 
    {
      
    }
  ),
  ...attributes,
);
