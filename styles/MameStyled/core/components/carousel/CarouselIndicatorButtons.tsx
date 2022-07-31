/* eslint-disable react/prop-types */
import { Div, Button } from "../../HtmlTag";
import { ReactElement, useRef } from "react";
import type { MouseEventHandler } from "react";
import { createElement } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";
import { useEffect } from "react";

interface Props {
  onClick: MouseEventHandler;
  totalIndicatorButtons: number;
  currentSlide: number;
  _ref: any,
}

export default function CarouselIndicatorButtons({ 
  onClick,
  totalIndicatorButtons,
  currentSlide,
  _ref,
  ...props 
}: Props): ReactElement {
  return createElement(
    Div,
    {
      ref: _ref,
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
          {...props}
        />
      )}
    </>
  );
}

interface IndicatorButtonsProps {
  onClick: MouseEventHandler;
  dataIndexSlide: number;
  currentSlide: number;
}

function IndicatorButtons({ 
  onClick,
  dataIndexSlide,
  currentSlide,
  ...props 
}: IndicatorButtonsProps) {
  const button = useRef<HTMLElement>();

  useEffect(() => {
    (button.current as HTMLElement).setAttribute("data-index-slide", dataIndexSlide.toString());
  }, [dataIndexSlide]);

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
