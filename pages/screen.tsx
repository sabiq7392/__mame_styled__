import { NextPage } from "next";
import { ReactElement } from "react";
import Heading from "../src/components/molecules/Heading";
import { H2 } from "../styles/MameStyled/core/HtmlTag";

const Screen: NextPage = (): ReactElement => {
  return (
    <>
      <Heading head={H2} title="Screen" />
    </>
  );
};

export default Screen;
