import { useEffect } from "react";
import { Span, P } from "../../HtmlTag.styled";
import propTypes from "prop-types";
import { createRoot } from "react-dom/client";

export default function CatchErrorPropsComponent({ props, component, type }) {
  useEffect(() => {
    if (Object.keys(props).length !== 0) {

      /** @for_react_below_version_18 */
      // ReactDOM.hydrate(
      //   <ErrorMessage description="There was an unexpected props on: " props={props} component={component} type={type} />, 
      //   document.querySelector("body"),
      // );

      /** @for_react_version_18 */
      const container  = document.querySelector("body");
      const root = createRoot(container);
      root.render(
        <ErrorMessage 
          description="There was an unexpected props on: " 
          props={props} 
          component={component} 
          type={type} 
        />
      );
    } 
  });
}

// eslint-disable-next-line react/prop-types
function ErrorMessage({ props, component, type, typeShouldBe, description, propName, isRequired }) {
  const css = { 
    color: "white", 
    display: "flex",  
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    width: "100%", 
    height: "100vh",
  };

  return (
    <>
      <P debug cssXs={css}>
        <Span>
          <Span>{description}</Span>
          <Span cssXs={{ display: "grid", gap: 5 }}>
            <ListInfoError title="Component" value={component} />
            <ListInfoError title="Prop Name" value={propName} />
            { props ? <ListInfoError title="Props" value={JSON.stringify(props)} /> : null }
            { type ? <ListInfoError title="Type" value={type} /> : null }
            { typeShouldBe ? <ListInfoError title="Type Should Be" value={typeShouldBe} /> : null }
            { isRequired ? <ListInfoError title="Is Required" value={isRequired} /> : null }
          </Span>
        </Span>
      </P>
    </>
  );
}

function ListInfoError({ title, value }) {
  return (
    <Span>
      <Span cssXs={{ color: "red" }}>{title}: </Span><Span>{value}</Span>
    </Span>
  );
}

ListInfoError.propTypes = {
  title: propTypes.string.isRequired,
  value: propTypes.any.isRequired
};
