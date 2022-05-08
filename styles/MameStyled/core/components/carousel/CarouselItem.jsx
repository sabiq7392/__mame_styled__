import { Div } from "../../HtmlTag";

export default function CarouselItem({ children }) {
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
