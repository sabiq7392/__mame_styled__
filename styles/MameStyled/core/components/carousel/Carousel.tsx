import { requiredProps } from "../../../utils/constants/requiredProps";
import { Div } from "../../HtmlTag";
import { createElement, MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import type { ReactElement, ReactNode } from "react";
import CarouselIndicatorButtons from "./CarouselIndicatorButtons";
import CarouselItemsContainer from "../carousel/CarouselItemsContainer";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function Carousel({ 
  children, 
  ...props 
}: Props): ReactElement {
  const [totalIndicatorButtons, setTotalIndicatorButtons] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselItemsContainer = useRef<HTMLElement>();

  const setDataIndexSlideToCarouselItems = (): void => {
    Array.from((carouselItemsContainer.current as HTMLElement).children).forEach((item, index) => {
      item.setAttribute("data-index-slide", index.toString());
    });
  };

  const currentSlidePosition = useCallback((): void => {
    if (carouselItemsContainer.current) {
      const positionCurrentSlide = (
        ((carouselItemsContainer.current as HTMLElement).children[currentSlide as number] as HTMLElement).offsetWidth * (currentSlide as number)
      );
  
      (carouselItemsContainer.current as HTMLElement).scrollTo({
        left: positionCurrentSlide,
        behavior: "smooth",
      });
    } 
  }, [currentSlide]);

  const onIndicatorButtonsClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    setCurrentSlide(Number(e.currentTarget.getAttribute("data-index-slide")));
  };

  const repositionCarouselItemsWhenResize = useCallback(() => new ResizeObserver(() => currentSlidePosition()), [currentSlidePosition]);

  useEffect(() => {
    let isObserve: boolean = true;

    if (isObserve && carouselItemsContainer.current) {
      setTotalIndicatorButtons((carouselItemsContainer.current as HTMLElement).children.length);
      setDataIndexSlideToCarouselItems();
      currentSlidePosition();
      repositionCarouselItemsWhenResize().observe(document.body);
    }

    return (): void => {
      isObserve = false;
      repositionCarouselItemsWhenResize().unobserve(document.body);
    };
  }, [currentSlide, currentSlidePosition, repositionCarouselItemsWhenResize]);

  return createElement(
    Div,
    {
      ...requiredProps(props, {
        cssXs: {
          display: "grid",
          gap: "1rem",
        },
      }),
    },
    <>
      <CarouselItemsContainer _ref={carouselItemsContainer} cssXs={{ borderRadius: 10 }}>
        {children}
      </CarouselItemsContainer>
      <CarouselIndicatorButtons 
        currentSlide={currentSlide}
        carouselItemsContainer={carouselItemsContainer}
        totalIndicatorButtons={totalIndicatorButtons} 
        onClick={onIndicatorButtonsClickHandler} 
      />
    </>,
  );
}
