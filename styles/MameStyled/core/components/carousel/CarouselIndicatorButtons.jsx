/* eslint-disable react/prop-types */
import { Div, Button } from "../../HtmlTag";

export default function CarouselIndicatorButtons({ carouselItems, isActive, setIsActive }) {
  return <>
    <Div cssXs={{ display: "flex", gap: 3 }}>
      {carouselItems.map((carouselItem, index) => 
        <Button
          key={index}
          cssXs={{
            width: 16,
            aspectRatio: "1 / 1",
            background: isActive === index ? "#00B4D8" : "rgba(0,0,0,0)",
            border: "2px solid #00B4D8",
            borderRadius: "50%",
            cursor: "pointer",
          }} 
          onClick={() => {
            setIsActive(index);
            carouselItem.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
          }}
        />  
      )}
    </Div>
  </>;
}
