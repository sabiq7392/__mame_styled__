import { useState, useRef, useEffect, memo } from "react";
import { bool } from "prop-types";
import Accordion from "../../../../../styles/MameStyled/core/components/accordion/Accordion";
import AccordionHeader from "../../../../../styles/MameStyled/core/components/accordion/AccordionHeader";
import AccordionBody from "../../../../../styles/MameStyled/core/components/accordion/AccordionBody";

const MameAccordion = memo(function MameAccordion({ 
  isAlwaysOpen = false, 
}) {
  const [isContentOpen, setIsContentOpen] = useState(isAlwaysOpen);
  const [heightContent, setHeightContent] = useState(0);
  const buttonAccordion = useRef();
  const content = useRef();

  /** @in_milisecond */
  const transitionSpeed = 400;

  const getHeightContent = () => {
    const observer = new ResizeObserver((entries) => {
      const contentHeight = entries[0].target.offsetHeight;

      return setHeightContent(contentHeight);
    });

    observer.observe(content.current);
  };


  useEffect(() => {
    getHeightContent();
  }, []);

  return <>
    <Accordion>
      <AccordionHeader 
        title="Example 1"
        refButtonAccordion={buttonAccordion} 
        setIsContentOpen={setIsContentOpen} 
        isContentOpen={isContentOpen} 
        transitionSpeed={transitionSpeed}
      />
      <AccordionBody 
        isContentOpen={isContentOpen} 
        transitionSpeed={transitionSpeed} 
        heightContent={heightContent} 
        _ref={content}
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

MameAccordion.propTypes = {
  isAlwaysOpen: bool,
};

export default MameAccordion;
