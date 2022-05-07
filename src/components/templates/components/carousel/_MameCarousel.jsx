import { Div, H2, P, Button, Img, Figure, Figcaption } from "../../../../../styles/MameStyled/core/HtmlTag";
import { useRef, useEffect, useState } from "react";

export default function MameCarousel() {
  const carouselContainer = useRef();
  const [carouselItems, setCarouselItems] = useState([]);
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    setCarouselItems([...carouselContainer.current.children]);
  }, []);

  return <>
    <Div
      cssXs={{ 
        display: "grid",
        gap: "1rem"
      }}
    >
      <Div 
        ref={carouselContainer}
        cssXs={{ 
          display: "flex",
          background: "#222",
          width: "100%",
          // height: 400,
          overflowX: "hidden",
        }}
      >
        <CarouselItem>
          <Figure>
            <Img 
              src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=640"
              alt="example-1"
              style={{ width: "100%", height: 300, objectFit: "cover" }}
            />
            <Figcaption cssXs={{ color: "#00B4D8" }}>
              <H2>Documentation</H2>
              <P cssXs={{ color: "#90E0EF" }}>Find in-depth information about Next.js features and API.</P>
            </Figcaption>
          </Figure>
        </CarouselItem>
        <CarouselItem>
          <H2 cssXs={{ color: "#00B4D8" }}>Deploy</H2>
          <P cssXs={{ color: "#90E0EF" }}>Instantly deploy your Next.js site to a public URL with Vercel.</P>
        </CarouselItem>
      </Div>
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
              carouselItem.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          />  
        )}
      </Div>
    </Div>
  </>;
}

function CarouselItem({ children }) {
  return <>
    <Div 
      // id={title.toLowerCase()}
      className="mame-carousel-item"
      cssXs={{ 
        display: "flex",
        flexDirection: "column", 
        flexShrink: 0,
        // width: "inherit",
        width: "100%",
        gap: 10, 
        height: "100%", 
        padding: "2rem" 
      }}
    >
      {children}
    </Div>
  </>;
}
