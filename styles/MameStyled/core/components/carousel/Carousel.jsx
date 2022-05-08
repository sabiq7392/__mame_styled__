import { node, any, number, array, func } from "prop-types";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { Div } from "../../HtmlTag";
import { createElement, useCallback, useEffect } from "react";

export default function Carousel({ 
  children, 
  _ref, 
  isActive, 
  carouselItems, 
  setCarouselItems, 
  setIsActive, 
  carouselContainer,
  timingAutoSwitchSlide,
  ...props 
}) {
  const repositionCarouselItemsWhenResize = useCallback(() => {
    const observer = new ResizeObserver(() => (
      document
        .getElementsByClassName("mame-carousel-item")[isActive]
        .scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
    ));

    observer.observe(document.querySelector("body"));
  }, [isActive]);

  if (timingAutoSwitchSlide) {
    const autoSwitchSlide = (timing) => {
      setTimeout(() => {
        const carouselItemsProgrammingLength = carouselItems.length - 1;
    
        if (isActive < carouselItemsProgrammingLength) {
          setIsActive(isActive + 1);
        }
    
        if (isActive === carouselItemsProgrammingLength) {
          setIsActive(0);
        }
      }, timing);
    };
  
    autoSwitchSlide(timingAutoSwitchSlide);
  }

  useEffect(() => {
    setCarouselItems([...carouselContainer.current.children]);
    repositionCarouselItemsWhenResize();
  }, [carouselContainer, repositionCarouselItemsWhenResize, setCarouselItems]);
  
  return createElement(
    Div,
    {
      ref: _ref,
      ...requiredProps(props, {
        cssXs: {
          display: "grid",
          gap: "1rem",
        },
      }),
    },
    children,
  );
}

Carousel.propTypes = {
  children: node.isRequired,
  isActive: number.isRequired,
  carouselItems: array.isRequired,
  setCarouselItems: func.isRequired,
  setIsActive: func.isRequired,
  carouselContainer: any.isRequired,
  timingAutoSwitchSlide: number,
  _ref: any,
  ...requiredPropTypes,
};
