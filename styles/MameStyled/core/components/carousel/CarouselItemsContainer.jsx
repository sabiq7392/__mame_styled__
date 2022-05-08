import { Div } from "../../HtmlTag";

export default function CarouselItemsContainer({ children, _ref }) {
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
