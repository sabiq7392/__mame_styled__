import CodePreview from "../../src/components/organisms/CodePreview";
import Harbor from "../../src/components/organisms/Harbor";
import Preview from "../../src/components/organisms/Preview";
import MameCarousel from "../../src/components/organisms/_MameCarousel";
import type { ReactElement } from "react";
import { NextPage } from "next";

const Carousel: NextPage = (): ReactElement => {
  return <>
    <Harbor title="Carousel">
      <CarouselOriginal />
      <CarouselAutoSwitchSlide />
    </Harbor>
  </>;
};
export default Carousel;

function CarouselOriginal(): ReactElement {
  return <>
    <Preview title="Carousel" noLandfield>
      <MameCarousel />
    </Preview>

    <CodePreview member="Carousel">
      {`
        import { ReactElement } from "react";
        import Carousel from "../../../../../styles/MameStyled/core/components/carousel/Carousel";
        import CarouselItem from "../../../../../styles/MameStyled/core/components/carousel/CarouselItem";
        import { Figure, Img, Figcaption, H2, P } from "../../../../../styles/MameStyled/core/HtmlTag";

        export default function MameCarousel(): ReactElement {
          return <>
            <Carousel>
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
            </Carousel>
          </>;
        }
      `}
    </CodePreview>
  </>;
}

function CarouselAutoSwitchSlide(): ReactElement {
  return <>
    <Harbor title="Carousel Auto Switch Slide">
      <Preview member="Carousel" noLandfield>
        <MameCarousel timing={3000} />  
      </Preview>
      <CodePreview member="Carousel">
        {`
          <Carousel
            ...
            timing={3000}
          >
          ...
          </Carousel>
        `}
      </CodePreview>
    </Harbor>
  </>;
}
