/* eslint-disable react/prop-types */
import { Div, Button } from "../../HtmlTag";
import { createElement } from "react";
import { func, number, array } from "prop-types";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { useMemo, memo } from "react";

export default function CarouselIndicatorButtons({ 
  carouselItems, 
  isActive, 
  setIsActive, 
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
  ...props 
}) {
  useMemo(() => console.log(isActive), [isActive]);
  return createElement(
    Button,
    {
      onClick: () => {
        setIsActive(index);
        carouselItem.scrollIntoView({ 
          behavior: "smooth", 
          block: "center", 
          inline: "center" 
        });
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
