import { Div } from "../../HtmlTag"

export default function Accordion({ children }) {
  return <>
    <Div
      cssXs={{ 
        display: "flex",
        flexDirection: "column", 
      }}
    >
      {children}
    </Div>
  </>
}
