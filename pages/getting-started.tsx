import { NextPage } from "next";
import { ReactElement } from "react";
import Heading from "../src/components/molecules/Heading";
import { Div, H2 } from "../styles/MameStyled/core/HtmlTag";

const GettingStarted: NextPage = (): ReactElement => {
  return (
    <>
      <Heading head={H2} title="Getting Started" />
      <Div 
        width={{ xs: 200, lg: 400 }} 
        padding={{ xs: 16, lg: 40 }} 
        height={{ xs: 500, lg: 200 }} 
        debug
      >
        <Div fontSize={{ xs: 30, lg: 60 }} background={"red"} debug>
            BEGO
        </Div>
      </Div>
    </>
  );
};

export default GettingStarted;
