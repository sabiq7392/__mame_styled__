import { node, any, number, array, func } from "prop-types";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { Div } from "../../HtmlTag.ts";
import { createElement, useCallback, useEffect, memo , useRef} from "react";

function Carousel({ 
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

  /** @masih_bermasalah */
  const repositionCarouselItemsWhenResize = useCallback(() => {
    const observer = new ResizeObserver(() => (
      document
        // .querySelectorAll(`${props.id} .mame-carousel-item`)[isActive]
        .getElementsByClassName("mame-carousel-item")[isActive]
        // ?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
    ));

    if (document.getElementsByClassName("mame-carousel-item")) {
      observer.observe(document.querySelector("body"));
    }
  }, [isActive]);

  const autoSwitchSlide = useCallback((timing) => {
    const setTiming = setTimeout(() => {
      const carouselItemsProgrammingLength = carouselItems.length - 1;
  
      if (isActive < carouselItemsProgrammingLength) {
        setIsActive(isActive + 1);
      }
  
      if (isActive === carouselItemsProgrammingLength) {
        setIsActive(0);
      }
    }, timing);

    const clearTimingWhenClickedIndicatorButtons = () => {
      const carouselIndicatorsContainer = 1;
      _ref.current.children[carouselIndicatorsContainer].children
        .forEach((indicatorButton) => {
          indicatorButton.onclick = () => {
            clearTimeout(setTiming);
          };
        });
    };

    clearTimingWhenClickedIndicatorButtons();

  }, [_ref, carouselItems.length, isActive, setIsActive]);

  useEffect(() => {
    setCarouselItems([...carouselContainer.current.children]);
    repositionCarouselItemsWhenResize();
    if (timingAutoSwitchSlide || timingAutoSwitchSlide === 0) {
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

export default Carousel;
