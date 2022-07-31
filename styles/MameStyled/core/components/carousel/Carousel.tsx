import { requiredProps } from "../../../utils/constants/requiredProps";
import { Div } from "../../HtmlTag";
import { createElement, MouseEvent, useEffect, useRef, useState } from "react";
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


  useEffect(() => {
    setTotalIndicatorButtons((carouselItemsContainer.current as HTMLElement).children.length);
    setDataIndexSlideToCarouselItems();
  }, []);


  const changeCurrentSlide = (e: MouseEvent<HTMLButtonElement>): void => {
    /** @progress */
    const positionCurrentSlide = (
      ((carouselItemsContainer.current as HTMLElement).children[currentSlide] as HTMLElement).offsetWidth * currentSlide
    );

    (carouselItemsContainer.current as HTMLElement).scrollTo({
      left: positionCurrentSlide,
      behavior: "smooth",
    });
  };

  const onIndicatorButtonsClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    setCurrentSlide(Number(e.currentTarget.getAttribute("data-index-slide")));
    changeCurrentSlide(e);
  };

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
        {/* <button onClick={onClick}></button> */}
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


