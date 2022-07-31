import Heading from "../src/components/molecules/Heading";
import { Div, H2 } from "../styles/MameStyled/core/HtmlTag";

export default function GettingStarted() {
  return (
    <>
      <Heading head={H2} title="Getting Started" />

        <Div 
          width={{ xs: 200, lg: 400 }} 
          padding={{ xs: 16, lg: 40 }} 
          height={{ xs: 500, lg: 200 }} 
          debug
        >
          <Div height={400} debug>

          </Div>
        </Div>
    </>
  );
}
