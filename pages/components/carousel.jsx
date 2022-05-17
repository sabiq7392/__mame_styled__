import Harbor from "../../src/components/organisms/Harbor";
import CarouselAutoSwitchSlide from "../../src/components/templates/components/carousel/CarouselAutoSwitchSlide";
import CarouselOriginal from "../../src/components/templates/components/carousel/CarouselOriginal";

export default function Carousel() {
  return <>
    <Harbor title="Carousel">
      <CarouselOriginal />
      <CarouselAutoSwitchSlide />
    </Harbor>
  </>;
}

