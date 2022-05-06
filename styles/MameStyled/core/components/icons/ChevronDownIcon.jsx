import { string, number } from "prop-types";

export default function ChevronDownIcon({ size = 18, color = "white" }) {
  return <>
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 18 10" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M1 1L9 9L17 1" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </>;
}

ChevronDownIcon.propTypes = {
  size: number,
  color: string,
};

