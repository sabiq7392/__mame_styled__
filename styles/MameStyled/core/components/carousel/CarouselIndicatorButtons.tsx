/* eslint-disable react/prop-types */
import { Div, Button } from "../../HtmlTag";
import { ReactElement, useRef, useState } from "react";
import type { MouseEventHandler, MouseEvent } from "react";
import { createElement } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";
import { useEffect } from "react";

interface Props {
  onClick: MouseEventHandler<HTMLElement> | undefined;
  totalIndicatorButtons: number;
  carouselItemsContainer: any;
  currentSlide: number;
}

export default function CarouselIndicatorButtons({ 
  onClick,
  totalIndicatorButtons,
  carouselItemsContainer,
  currentSlide,
  ...props 
}: Props): ReactElement {
  return createElement(
    Div,
    {
      cssXs: {
        display: "flex",
        gap: 3,
      },
    },
    <>
      {[...Array(totalIndicatorButtons)].map((total, index) => 
        <IndicatorButtons 
          onClick={onClick} 
          key={index} 
          dataIndexSlide={index} 
          currentSlide={currentSlide}
          // currentSlide={currentSlide} 
          carouselItemsContainer={carouselItemsContainer}
          {...props}
        />
      )}
    </>
  );
}

interface IndicatorButtonsProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  dataIndexSlide: number;
  currentSlide: number;
  carouselItemsContainer: any;
}

function IndicatorButtons({ 
  onClick,
  dataIndexSlide,
  currentSlide,
  carouselItemsContainer,
  ...props 
}: IndicatorButtonsProps) {
  // const [currentSlide, setCurrentSlide] = useState<number>(0);
  const button = useRef<HTMLElement>();

  // console.log({ currentSlide, dataIndexSlide });

  useEffect(() => {
    (button.current as HTMLElement).setAttribute("data-index-slide", dataIndexSlide.toString());
  }, [dataIndexSlide]);

  // const changeCurrentSlide = (e: MouseEvent<HTMLButtonElement>): void => {
  //   /** @progress */
  //   const positionCurrentSlide = (
  //     ((carouselItemsContainer.current as HTMLElement).children[currentSlide] as HTMLElement).offsetWidth * currentSlide
  //   );

  //   (carouselItemsContainer.current as HTMLElement).scrollTo({
  //     left: positionCurrentSlide,
  //     behavior: "smooth",
  //   });
  // };

  // const onButtonClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
  //   // setCurrentSlide(Number(e.currentTarget.getAttribute("data-index-slide")));
  //   changeCurrentSlide(e);
  // };

  return createElement(
    Button,
    {
      ref: button,
      onClick,
      ...requiredProps(props, {
        cssXs: {
          width: 16,
          aspectRatio: "1 / 1",
          background: currentSlide === dataIndexSlide ? "#00B4D8" : "rgba(0,0,0,0)",
          border: "2px solid #00B4D8",
          borderRadius: "50%",
          cursor: "pointer",
        },
      }),
    },
    <></>,
  );
}
