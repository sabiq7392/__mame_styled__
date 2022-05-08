import { Div, H2, P, Button, Img, Figure, Figcaption } from "../../../../../styles/MameStyled/core/HtmlTag";
import { useRef, useEffect, useState, useCallback } from "react";

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

function Carousel({ children }) {
  return <>
    <Div
      cssXs={{ 
        display: "grid",
        gap: "1rem"
      }}
    >
      {children}
    </Div>
  </>;
}

function CarouselItemsContainer({ children, _ref }) {
  return <>
    <Div 
      ref={_ref}
      cssXs={{ 
        display: "flex",
        background: "#222",
        width: "100%",
        // height: 400,
        overflowX: "hidden",
      }}
    >
      {children}
    </Div>
  </>;
}

function CarouselIndicatorButtons({ carouselItems, isActive, setIsActive }) {
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

function CarouselItem({ children }) {
  
  useEffect(() => {

  }, []);
  return <>
    <Div 
      className="mame-carousel-item"
      cssXs={{ 
        display: "flex",
        flexShrink: 0,
        width: "100%",
        gap: 10, 
        height: "100%", 
        padding: "2rem" 
      }}
    >
      <Div>
        {children}
      </Div>
    </Div>
  </>;
}
