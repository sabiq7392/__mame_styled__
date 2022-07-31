import { A, Img } from "../../HtmlTag";
import { requiredProps } from "../../../constants/required-props.constant";
import { createElement, ReactElement, ReactNode } from "react";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  children?: ReactNode[] | ReactNode,
  src?: string,
  alt?: string,
  height?: number,
  width?: number,
}

export default function NavbarBrand({ 
  children, 
  src, 
  alt, 
  width, 
  height, 
  ...props 
}: Props): ReactElement {
  if (children && (src || alt || width || height)) {
    throw Error ("Cannot combined props children with: src || alt || width || height");
  } 

  return createElement(
    A, 
    { 
      ...requiredProps(props, { 
        cssXs: {
          display: "grid",
          placeItems: "center",
        },
      }),
    }, 
    children || <Img src={src} alt={alt} width={width} height={height} />,
  );
}

