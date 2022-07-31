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

  console.log({ outside: currentSlide });

  console.log({ carouselItemsContainer })

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

  /** @masih_bermasalah */
  // const repositionCarouselItemsWhenResize = useCallback(() => {
  //   const observer = new ResizeObserver(() => (
  //     document
  //       // .querySelectorAll(`${props.id} .mame-carousel-item`)[isActive]
  //       .getElementsByClassName("mame-carousel-item")[isActive]
  //       .scrollTo({
  //         top: 0,
  //         left: document.getElementsByClassName("mame-carousel-item")[isActive].getBoundingClientRect().width,
  //         behavior: "smooth",
  //       })
  //       // ?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
  //   ));

  //   if (document.getElementsByClassName("mame-carousel-item")) {
  //     observer.observe(document.querySelector("body") as Element);
  //   }
  // }, []);

  // const autoSwitchSlide = useCallback((timing: number) => {
  //   const setTiming = setTimeout(() => {
  //     const carouselItemsProgrammingLength = carouselItems.length - 1;
  
  //     if (isActive < carouselItemsProgrammingLength) {
  //       setIsActive(isActive + 1);
  //     }
  
  //     if (isActive === carouselItemsProgrammingLength) {
  //       setIsActive(0);
  //     }
  //   }, timing);

  //   const clearTimingWhenClickedIndicatorButtons = () => {
  //     const carouselIndicatorsContainer: number = 1;
  //     (_ref.current as HTMLElement).children[carouselIndicatorsContainer].children
  //       .forEach((indicatorButton: HTMLElement) => {
  //         indicatorButton.onclick = () => {
  //           clearTimeout(setTiming);
  //         };
  //       });
  //   };

  //   clearTimingWhenClickedIndicatorButtons();

  // }, [_ref, carouselItems.length, isActive, setIsActive]);

  // useEffect(() => {
  //   console.log(document.querySelectorAll(`#${props.id} .mame-carousel-item`))

  //   setCarouselItems([...(carouselContainer.current as any).children]);
  //   repositionCarouselItemsWhenResize();
  //   if (timingAutoSwitchSlide || timingAutoSwitchSlide === 0) {
  //     autoSwitchSlide(timingAutoSwitchSlide);
  //   }

  // }, [autoSwitchSlide, carouselContainer, repositionCarouselItemsWhenResize, setCarouselItems, timingAutoSwitchSlide]);
