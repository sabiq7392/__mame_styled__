import { ReactElement } from "react";
import CodePreview from "../../../organisms/CodePreview";
import Harbor from "../../../organisms/Harbor";
import Preview from "../../../organisms/Preview";
import MameCarousel from "./_MameCarousel";

export default function CarouselAutoSwitchSlide(): ReactElement {
  return <>
    <Harbor title="Carousel Auto Switch Slide">
      <Preview member="Carousel" noLandfield>
        <MameCarousel />  
      </Preview>
      <CodePreview member="Carousel">
        {`
          <Carousel
            ...
            timingAutoSwitchSlide={3000}
          >
          ...
          </Carousel>
        `}
      </CodePreview>
    </Harbor>
  </>;
}
