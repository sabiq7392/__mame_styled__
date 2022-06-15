import { Attributes } from "../utils/types";
import styled from "styled-components";
import attributes from "../../utils/constants/attributes";
import { FlexDirection } from "../utils/types";

interface Props extends Attributes {
  container?: true,
  item?: true,
  vCenter?: true,
  center?: true,
  alignItems?: string,
  hCenter?: true,
  justifyContent?: string,
  gap?: number | string,
  direction?: FlexDirection,
}

export const Flex = styled.div<Props>(
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
