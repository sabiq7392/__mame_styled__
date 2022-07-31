import { ReactElement } from "react";
import { AiOutlineGithub } from "react-icons/ai";

interface Props {
  size?: number,
}

export default function Github({ size }: Props): ReactElement {
  return (
    <AiOutlineGithub fontSize={size || 24} />
  );
}
