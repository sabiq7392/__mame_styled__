import { useState, useRef, ReactElement } from "react";
import Carousel from "../../../../../styles/MameStyled/core/components/carousel/Carousel";
import CarouselItem from "../../../../../styles/MameStyled/core/components/carousel/CarouselItem";
import CarouselIndicatorButtons from "../../../../../styles/MameStyled/core/components/carousel/CarouselIndicatorButtons";
import CarouselItemsContainer from "../../../../../styles/MameStyled/core/components/carousel/CarouselItemsContainer";
import { Figure, Img, Figcaption, H2, P } from "../../../../../styles/MameStyled/core/HtmlTag";

export default function MameCarousel(): ReactElement {
  // const carouselContainer = useRef();
  // const [carouselItems, setCarouselItems] = useState([]);
  // const [isActive, setIsActive] = useState(0);
  // const [isClicked, setIsClicked] = useState(false);
  // const carousel = useRef();

  return <>
    <Carousel
      // isActive={isActive}
      // carouselItems={carouselItems}
      // setCarouselItems={setCarouselItems}
      // setIsActive={setIsActive}
      // carouselContainer={carouselContainer}
      // isClicked={isClicked}
      // setIsClicked={setIsClicked}
      // // id={"auto-switch-slide"}
      // _ref={carousel}
      // timingAutoSwitchSlide={3000}
    >
      {/* <CarouselItemsContainer _ref={carouselContainer} cssXs={{ borderRadius: 10 }}> */}
        <CarouselItem>
          <Figure cssXs={{ display: "grid" }}>
            <Img 
              src="/images/photos/example-1.jpg"
              alt="example-1"
              cssXs={{ width: "100%", height: 300, objectFit: "cover" }}
            />
            <Figcaption cssXs={{ color: "#00B4D8", padding: "1rem" }}>
              <H2>Example 1</H2>
              <P cssXs={{ color: "#90E0EF" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus voluptatum explicabo deleniti! 
                Alias dolores illum ad rem dicta magni sit temporibus ullam nam, corporis distinctio officiis sapiente voluptatum facere?
              </P>
            </Figcaption>
          </Figure>
        </CarouselItem>
        <CarouselItem> 
          <Figure cssXs={{ display: "grid" }}>
            <Img 
              src="/images/photos/example-2.jpg"
              alt="example-1"
              cssXs={{ width: "100%", height: 300, objectFit: "cover" }}
            />
            <Figcaption cssXs={{ color: "#00B4D8", padding: "1rem" }}>
              <H2>Example 2</H2>
              <P cssXs={{ color: "#90E0EF" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus voluptatum explicabo deleniti! 
                Alias dolores illum ad officiis sapiente voluptatum facere?
              </P>
            </Figcaption>
          </Figure>
        </CarouselItem>
        <CarouselItem>
          <Figure cssXs={{ display: "grid" }}>
            <Img 
              src="/images/photos/example-3.jpg"
              alt="example-1"
              cssXs={{ width: "100%", height: 300, objectFit: "cover" }}
            />
            <Figcaption cssXs={{ color: "#00B4D8", padding: "1rem" }}>
              <H2>Example 3</H2>
              <P cssXs={{ color: "#90E0EF" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatum explicabo deleniti! 
                Alias dolores illum ad officiis sapiente voluptatum facere? 
              </P>
            </Figcaption>
          </Figure>
        </CarouselItem>
      {/* </CarouselItemsContainer> */}
      {/* <CarouselIndicatorButtons 
        carouselItems={carouselItems}
        isActive={isActive}
        setIsActive={setIsActive}
        // carouselId={"auto-switch-slide"}
        carousel={carousel}

      /> */}
    </Carousel>
  </>;
}
