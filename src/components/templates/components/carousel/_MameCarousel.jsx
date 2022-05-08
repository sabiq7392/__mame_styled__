import { H2, P, Img, Figure, Figcaption } from "../../../../../styles/MameStyled/core/HtmlTag";
import { useRef, useEffect, useState, useCallback } from "react";
import Carousel from "../../../../../styles/MameStyled/core/components/carousel/Carousel";
import CarouselItemsContainer from "../../../../../styles/MameStyled/core/components/carousel/CarouselItemsContainer";
import CarouselIndicatorButtons from "../../../../../styles/MameStyled/core/components/carousel/CarouselIndicatorButtons";
import CarouselItem from "../../../../../styles/MameStyled/core/components/carousel/CarouselItem";

export default function MameCarousel() {
  const carouselContainer = useRef();
  const [carouselItems, setCarouselItems] = useState([]);
  const [isActive, setIsActive] = useState(0);

  const repositionCarouselItemsWhenResize = useCallback(() => {
    const observer = new ResizeObserver(entries => {
      const entry = entries[0].target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

      return entry;
    });

    observer.observe(document.getElementsByClassName("mame-carousel-item")[isActive]);
  }, [isActive]);

  useEffect(() => {
    setCarouselItems([...carouselContainer.current.children]);
    repositionCarouselItemsWhenResize();
  }, [repositionCarouselItemsWhenResize]);

  return <>
    <Carousel>
      <CarouselItemsContainer _ref={carouselContainer}>
        <CarouselItem>
          <Figure>
            <Img 
              src="/images/photos/example-1.jpg"
              alt="example-1"
              style={{ width: "100%", height: 300, objectFit: "cover" }}
            />
            <Figcaption cssXs={{ color: "#00B4D8" }}>
              <H2>Example 1</H2>
              <P cssXs={{ color: "#90E0EF" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus voluptatum explicabo deleniti! 
                Alias dolores illum ad rem dicta magni sit temporibus ullam nam, corporis distinctio officiis sapiente voluptatum facere?
              </P>
            </Figcaption>
          </Figure>
        </CarouselItem>
        <CarouselItem>
          <Figure>
            <Img 
              src="/images/photos/example-2.jpg"
              alt="example-1"
              style={{ width: "100%", height: 300, objectFit: "cover" }}
            />
            <Figcaption cssXs={{ color: "#00B4D8" }}>
              <H2>Example 2</H2>
              <P cssXs={{ color: "#90E0EF" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus voluptatum explicabo deleniti! 
                Alias dolores illum ad officiis sapiente voluptatum facere?
              </P>
            </Figcaption>
          </Figure>
        </CarouselItem>
        <CarouselItem>
          <Figure>
            <Img 
              src="/images/photos/example-3.jpg"
              alt="example-1"
              style={{ width: "100%", height: 300, objectFit: "cover" }}
            />
            <Figcaption cssXs={{ color: "#00B4D8" }}>
              <H2>Example 3</H2>
              <P cssXs={{ color: "#90E0EF" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatum explicabo deleniti! 
                Alias dolores illum ad officiis sapiente voluptatum facere? 
              </P>
            </Figcaption>
          </Figure>
        </CarouselItem>
      </CarouselItemsContainer>
      <CarouselIndicatorButtons 
        carouselItems={carouselItems}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </Carousel>
  </>;
}
