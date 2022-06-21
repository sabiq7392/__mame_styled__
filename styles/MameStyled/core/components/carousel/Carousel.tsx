import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { Div } from "../../HtmlTag";
import { createElement, MouseEvent, MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import type { ReactElement, ReactNode, SetStateAction } from "react";
import CarouselIndicatorButtons from "./CarouselIndicatorButtons";
import CarouselItemsContainer from "../carousel/CarouselItemsContainer";
// interface Props {
//   children: ReactNode | ReactNode[];
//   carouselItems: HTMLCollection[] | never[];
//   // eslint-disable-next-line no-unused-vars
//   setCarouselItems: (value: SetStateAction<HTMLCollection[] | never[]>) => void;
//   _ref: MutableRefObject<HTMLElement | undefined>;
//   isActive: number;
//   // eslint-disable-next-line no-unused-vars
//   setIsActive: (value: SetStateAction<number>) => void;
//   isClicked: boolean;
//   // eslint-disable-next-line no-unused-vars
//   setIsClicked: (value: SetStateAction<boolean>) => void;
//   carouselContainer: MutableRefObject<HTMLElement | undefined>;
//   timingAutoSwitchSlide?: number;
// }

interface Props {
  children: ReactNode | ReactNode[];
  // _ref: MutableRefObject<HTMLElement | undefined>;
}

export default function Carousel({ 
  children, 
  // _ref, 
  // isActive, 
  // carouselItems, 
  // setCarouselItems, 
  // setIsActive, 
  // carouselContainer,
  // timingAutoSwitchSlide,
  ...props 
}: Props): ReactElement {
  const [totalIndicatorButtons, setTotalIndicatorButtons] = useState<number>(0);
  const carouselItemsContainer = useRef<HTMLElement>();
  let currentSlide: number = 0;

  const setDataIndexSlideToCarouselItems = (): void => {
    Array.from((carouselItemsContainer.current as HTMLElement).children).forEach((item, index) => {
      item.setAttribute("data-index-slide", index.toString());
    });
  };

  const changeCurrentSlide = (e: MouseEvent<HTMLButtonElement>): void => {
    /** @progress */
    currentSlide = Number(e.currentTarget.getAttribute("data-index-slide"));

    console.log({currentSlide});

    const positionCurrentSlide = (
      ((carouselItemsContainer.current as HTMLElement).children[currentSlide] as HTMLElement).offsetWidth * currentSlide
    );

    console.log(
      ((carouselItemsContainer.current as HTMLElement)
        .children[Number(currentSlide)] as HTMLElement).offsetWidth * currentSlide
    );

    return (carouselItemsContainer.current as HTMLElement).scrollTo({
      left: positionCurrentSlide,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTotalIndicatorButtons((carouselItemsContainer.current as HTMLElement).children.length);
    setDataIndexSlideToCarouselItems();
  }, []);

  const onIndicatorButtonsClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    changeCurrentSlide(e);
  };

  /** @masih_bermasalah */
  // const repositionCarouselItemsWhenResize = useCallback(() => {
    // const observer = new ResizeObserver(() => (
    //   document
    //     // .querySelectorAll(`${props.id} .mame-carousel-item`)[isActive]
    //     .getElementsByClassName("mame-carousel-item")[isActive]
    //     .scrollTo({
    //       top: 0,
    //       left: document.getElementsByClassName("mame-carousel-item")[isActive].getBoundingClientRect().width,
    //       behavior: "smooth",
    //     })
    //     // ?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
    // ));

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
        totalIndicatorButtons={totalIndicatorButtons} 
        onClick={onIndicatorButtonsClickHandler} 
        currentSlide={currentSlide}
      />
    </>,
  );
}


