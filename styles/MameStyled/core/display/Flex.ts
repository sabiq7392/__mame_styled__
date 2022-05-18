import styled from "styled-components";
import attributes from "../../utils/constants/attributes";

type Props = {
  container?: true,
  item?: true,
  vCenter?: true,
  center?: true,
  alignItems?: string,
  hCenter?: true,
  justifyContent?: string,
  gap?: number,
  direction?: "column" | "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse" | undefined,
};

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
