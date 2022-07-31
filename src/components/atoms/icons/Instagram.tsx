import { AiOutlineInstagram } from "react-icons/ai";
import { ReactElement } from "react";

interface Props {
  size?: number
}

export default function Instagram({ size }: Props): ReactElement {
  return (
    <AiOutlineInstagram fontSize={size || 24} /> 
  );
}
