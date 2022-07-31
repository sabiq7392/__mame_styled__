import { requiredProps } from "../../../utils/constants/requiredProps";
import { Div } from "../../HtmlTag";
import { createElement, MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import type { ReactElement, ReactNode } from "react";
import CarouselIndicatorButtons from "./CarouselIndicatorButtons";
import CarouselItemsContainer from "../carousel/CarouselItemsContainer";

interface Props {
  children: ReactNode | ReactNode[];
  timing?: number,
}

export default function Carousel({ 
  children, 
  timing, 
  ...props 
}: Props): ReactElement {
  const [totalIndicatorButtons, setTotalIndicatorButtons] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselItemsContainer = useRef<HTMLElement>();
  const carouselIndicatorButtons = useRef<HTMLElement>();

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

  const repositionCarouselItemsWhenResize = useCallback(() => new ResizeObserver(() => currentSlidePosition()), [currentSlidePosition]);

  const autoSwitchSlide = useCallback(() => {
    const setTiming = setTimeout(() => {
      if (carouselItemsContainer.current && currentSlide < ((carouselItemsContainer.current as HTMLElement).children.length) - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      } 
    }, 3000);

    const clearTimingAutoSwitchSlide = (): void => {
      Array.from(carouselIndicatorButtons.current?.children as unknown as HTMLElement[]).forEach((button: HTMLElement) => {
        button.onclick = () => clearTimeout(setTiming);
      });
    };

    clearTimingAutoSwitchSlide();
  }, [currentSlide]);

  const onIndicatorButtonsClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    const _currentSlide = Number(e.currentTarget.getAttribute("data-index-slide"));
    setCurrentSlide(_currentSlide);
  };

  useEffect(() => {
    let isObserve: boolean = true;

    if (isObserve) {
      setTotalIndicatorButtons((carouselItemsContainer.current as HTMLElement).children.length);
      setDataIndexSlideToCarouselItems();
      currentSlidePosition();
      repositionCarouselItemsWhenResize().observe(document.body);
      timing && autoSwitchSlide();
    }

    return (): void => {
      isObserve = false;
      repositionCarouselItemsWhenResize().unobserve(document.body);
    };
  }, [autoSwitchSlide, currentSlide, currentSlidePosition, repositionCarouselItemsWhenResize, timing]);


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
        _ref={carouselIndicatorButtons}
        currentSlide={currentSlide}
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
