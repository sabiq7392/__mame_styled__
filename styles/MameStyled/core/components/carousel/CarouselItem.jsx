import { node } from "prop-types";
import { Div } from "../../HtmlTag";
import { createElement } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";

export default function CarouselItem({ children, ...props }) {
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
          // padding: "2rem" 
        },
      }),
    },
    <Div>
      {children}
    </Div>,
  );
}

CarouselItem.propTypes = {
  children: node.isRequired,
};
