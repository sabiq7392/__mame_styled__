/* eslint-disable react/prop-types */
import { Div, Button } from "../../HtmlTag";
import { MouseEventHandler, ReactElement, useRef } from "react";
import { createElement } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";
import { useEffect } from "react";

interface Props {
  onClick: MouseEventHandler<HTMLElement> | undefined;
  totalIndicatorButtons: number;
  currentSlide: number;
}

export default function CarouselIndicatorButtons({ 
  // carouselItems, 
  // isActive, 
  // setIsActive, 
  // carousel,
  onClick,
  totalIndicatorButtons,
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
        <IndicatorButtons onClick={onClick} key={index} dataIndexSlide={index} currentSlide={currentSlide} {...props} />
      )}
    </>
  );
}

interface IndicatorButtonsProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
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

  console.log({ currentSlide, dataIndexSlide })

  // const [positionActiveElement, setPositionActiveElement] = useState(0);

  // const scrollToActiveElement = useCallback(() => {
  //   const observer = new ResizeObserver(entries => {
  //     const getWidthElementAsPositionLeft = entries[0].target.getBoundingClientRect().width;

  //     return setPositionActiveElement(getWidthElementAsPositionLeft);
  //   });

  //   observer.observe(carouselItem);
  // }, [carouselItem]);

  // useEffect(() => {
  //   scrollToActiveElement();
  // }, [scrollToActiveElement]);

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
