import { Div } from "../../HtmlTag";
import { createElement, ReactElement, ReactNode } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function CarouselItem({ children, ...props }: Props): ReactElement {
  return createElement (
    Div,
    {
      ...requiredProps(props, {
        className: "mame-carousel-item" ,
        cssXs: {
          display: "flex",
          flexShrink: 0,
          width: "100%",
          gap: 10, 
          height: "100%", 
        },
      }),
    },
    <Div>
      {children}
    </Div>,
  );
}
