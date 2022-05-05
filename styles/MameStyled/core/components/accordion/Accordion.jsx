import { Div } from "../../HtmlTag";
import { createElement } from "react";

export default function Accordion({ 
  children,
  ...props
}) {
  // return createElement(
  //   Div,
  //   {

  //   }
  // );
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

Accordion.propTypes = {

};
