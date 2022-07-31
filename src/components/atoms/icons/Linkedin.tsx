import { BsLinkedin } from "react-icons/bs";
import type { ReactElement } from "react";

interface Props {
  size?: number
}

export default function Linkedin({ size }: Props): ReactElement {
  return (
    <BsLinkedin fontSize={size || 18} />
  );
}
