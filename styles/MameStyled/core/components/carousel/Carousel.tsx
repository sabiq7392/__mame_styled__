import { node, any, number, array, func } from "prop-types";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { Div } from "../../HtmlTag";
import { createElement, MutableRefObject, useCallback, useEffect } from "react";
import type { ReactElement, ReactNode, SetStateAction } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  carouselItems: HTMLCollection[] | never[];
  // eslint-disable-next-line no-unused-vars
  setCarouselItems: (value: SetStateAction<HTMLCollection[] | never[]>) => void;
  _ref: MutableRefObject<HTMLElement | undefined>;
  isActive: number;
  // eslint-disable-next-line no-unused-vars
  setIsActive: (value: SetStateAction<number>) => void;
  isClicked: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsClicked: (value: SetStateAction<boolean>) => void;
  carouselContainer: MutableRefObject<HTMLElement | undefined>;
  timingAutoSwitchSlide?: number;
}

// Carousel.propTypes = {
//   children: node.isRequired,
//   isActive: number.isRequired,
//   carouselItems: array.isRequired,
//   setCarouselItems: func.isRequired,
//   setIsActive: func.isRequired,
//   carouselContainer: any.isRequired,
//   timingAutoSwitchSlide: number,
//   _ref: any,
//   ...requiredPropTypes,
// };

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
}: Props): ReactElement {

  /** @masih_bermasalah */
  const repositionCarouselItemsWhenResize = useCallback(() => {
    const observer = new ResizeObserver(() => (
      document
        // .querySelectorAll(`${props.id} .mame-carousel-item`)[isActive]
        .getElementsByClassName("mame-carousel-item")[isActive]
        // ?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
    ));

    if (document.getElementsByClassName("mame-carousel-item")) {
      observer.observe(document.querySelector("body") as Element);
    }
  }, [isActive]);

  const autoSwitchSlide = useCallback((timing: number) => {
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
      const carouselIndicatorsContainer: number = 1;
      (_ref.current as HTMLElement).children[carouselIndicatorsContainer].children
        .forEach((indicatorButton: HTMLElement) => {
          indicatorButton.onclick = () => {
            clearTimeout(setTiming);
          };
        });
    };

    clearTimingWhenClickedIndicatorButtons();

  }, [_ref, carouselItems.length, isActive, setIsActive]);

  useEffect(() => {
    setCarouselItems([...(carouselContainer.current as any).children]);
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


