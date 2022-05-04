import { Div, P } from "../../HtmlTag";

export default function AccordeionBody({ 
  isContentOpen, 
  transitionSpeed, 
  heightContent, 
  refContent, 
  content 
}) {
  return <>
    <Div 
      cssXs={{ 
        display: isContentOpen ? "grid" : setTimeout(() => "none", transitionSpeed),
        background: "#222", 
        color: "white", 
        overflow: "hidden", 
        transition: `height ${transitionSpeed}ms ease!important`,
        height: isContentOpen ? heightContent : 0,
      }}
    >
      <Div
        ref={refContent}
        cssXs={{ padding: "1rem" }}
      >
        {content || 
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima accusamus quia, voluptatem, obcaecati corporis debitis 
            ratione eos et saepe officia explicabo. Accusamus tempore eum aspernatur error nobis accusantium voluptatum?

            <br />
            <br />

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsum ipsa voluptate cum ratione illum placeat a 
            dolorum assumenda praesentium explicabo vitae nihil laboriosam dicta, minima nulla accusamus optio? Atque.
          </P>
        }
      </Div>
    </Div>
  </>;
}
