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
        ?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
    ));

    if (document.getElementsByClassName("mame-carousel-item")) {
      observer.observe(document.querySelector("body"));
    }
  }, [isActive]);

  const autoSwitchSlide = useCallback((timing) => {
    const setTiming = setTimeout(() => {
      const carouselItemsProgrammingLength = carouselItems.length - 1;
  
      // sepertinya disini ada bug ketika button di klik
      if (isActive < carouselItemsProgrammingLength) {
        setIsActive(isActive + 1);
      }
  
      if (isActive === carouselItemsProgrammingLength) {
        setIsActive(0);
      }
    }, timing);

    const clearTimingWhenClickedIndicatorButtons = () => {
      document
        .querySelectorAll(".mame-carousel-indicator-button")
        .forEach((indicatorButton) => {
          indicatorButton.onclick = () => {
            clearTimeout(setTiming);
          };
        });
    };

    clearTimingWhenClickedIndicatorButtons();

  }, [carouselItems.length, isActive, setIsActive]);

  useEffect(() => {
    setCarouselItems([...carouselContainer.current.children]);
    repositionCarouselItemsWhenResize();
    if (timingAutoSwitchSlide) {
      autoSwitchSlide(timingAutoSwitchSlide);
    }
  }, [autoSwitchSlide, carouselContainer, repositionCarouselItemsWhenResize, setCarouselItems, timingAutoSwitchSlide]);
  
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
