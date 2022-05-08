import { Div } from "../../HtmlTag";

export default function Carousel({ children }) {
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
