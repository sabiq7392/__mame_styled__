import { useState, memo } from "react";
import Accordion from "../../../../../styles/MameStyled/core/components/accordion/Accordion";
import AccordionHeader from "../../../../../styles/MameStyled/core/components/accordion/AccordionHeader";
import AccordionBody from "../../../../../styles/MameStyled/core/components/accordion/AccordionBody";
import type { ReactElement } from "react";

interface Props {
  isAlwaysOpen?: boolean;
}

const MameAccordion = memo(function MameAccordion({ isAlwaysOpen = false }: Props): ReactElement {
  const [isContentOpen, setIsContentOpen] = useState<boolean>(isAlwaysOpen);

  /** @in_milisecond */
  const transitionSpeed: number = 400;

  return <>
    <Accordion>
      <AccordionHeader 
        title="Example 1"
        setIsContentOpen={setIsContentOpen} 
        isContentOpen={isContentOpen} 
        transitionSpeed={transitionSpeed}
        cssXs={{ color: "white" }}
      />
      <AccordionBody 
        isContentOpen={isContentOpen} 
        transitionSpeed={transitionSpeed}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima accusamus quia, voluptatem, obcaecati corporis debitis 
        ratione eos et saepe officia explicabo. Accusamus tempore eum aspernatur error nobis accusantium voluptatum?

        <br />
        <br />

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsum ipsa voluptate cum ratione illum placeat a 
        dolorum assumenda praesentium explicabo vitae nihil laboriosam dicta, minima nulla accusamus optio? Atque.
      </AccordionBody>
    </Accordion>
  </>;
});

export default MameAccordion;
