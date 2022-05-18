/* eslint-disable react/prop-types */
import { Div, Button } from "../../HtmlTag.ts";
import { createElement } from "react";
import { func, number, array } from "prop-types";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { memo } from "react";
import { useEffect, useCallback, useState } from "react";

export default function CarouselIndicatorButtons({ 
  carouselItems, 
  isActive, 
  setIsActive, 
  carousel,
  ...props 
}) {
  return createElement(
    Div,
    {
      cssXs: {
        display: "flex",
        gap: 3,
      },
    },
    <>
      {carouselItems.map((carouselItem, index) => 
        <IndicatorsButtons 
          key={index}
          index={index}
          isActive={isActive}
          setIsActive={setIsActive}
          carouselItem={carouselItem}
          carousel={carousel}
          {...props}
        />
      )}
    </>
  );
}

const IndicatorsButtons = memo(function IndicatorsButtons({ 
  isActive, 
  index, 
  setIsActive, 
  carouselItem, 
  carousel,
  ...props 
}) {
  const [positionActiveElement, setPositionActiveElement] = useState(0);

  const scrollToActiveElement = useCallback(() => {
    const observer = new ResizeObserver(entries => {
      const getWidthElementAsPositionLeft = entries[0].target.getBoundingClientRect().width;

      return setPositionActiveElement(getWidthElementAsPositionLeft);
    });

    observer.observe(carouselItem);
  }, [carouselItem]);

  useEffect(() => {
    scrollToActiveElement();
  }, [scrollToActiveElement]);

  return createElement(
    Button,
    {
      onClick: () => {
        setIsActive(index);
        // document
          // .querySelector(`#${carouselId} .mame-carousel-items-container`)
        carousel.current.children[0]
          .scrollTo({ 
            left: positionActiveElement * index, 
            behavior: "smooth" 
          });
        // carouselItem.scrollIntoView({ 
        //   behavior: "smooth", 
        //   block: "center", 
        //   inline: "center" 
        // });
      },
      ...requiredProps(props, {
        className: "mame-carousel-indicator-button",
        cssXs: {
          width: 16,
          aspectRatio: "1 / 1",
          background: isActive === index ? "#00B4D8" : "rgba(0,0,0,0)",
          border: "2px solid #00B4D8",
          borderRadius: "50%",
          cursor: "pointer",
        },
      }),
    },
    <></>,
  );
});

CarouselIndicatorButtons.propTypes = {
  carouselItems: array.isRequired,
  isActive: number.isRequired,
  setIsActive: func.isRequired,
  ...requiredPropTypes,
};
