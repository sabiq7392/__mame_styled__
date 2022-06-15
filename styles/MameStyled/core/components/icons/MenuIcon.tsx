import { ReactElement } from "react";
import { IconProps } from "../../utils/types";

export default function MenuIcon({ size = 28, color = "white" }: IconProps): ReactElement {
  return <>
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 18 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M18 12H9V10H18V12ZM18 7H0V5H18V7ZM18 2H0V0H18V2Z" 
        fill={color} 
      />
    </svg>
  </>;
}
