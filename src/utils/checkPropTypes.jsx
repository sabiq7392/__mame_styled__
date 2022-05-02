import ReactDOM from "react-dom";
import { P, Span } from "../../styles/MameStyled/core/HtmlTag.styled";
import propTypes from "prop-types";

export const mustBeString = (props, propName, componentName) => {
  checkPropTypes({ 
    type: "string", props, propName, componentName,
  });
};

export const mustBeStringRequired = (props, propName, componentName) => {
  checkPropTypes({ 
    type: "string", isRequired: true, props, propName, componentName
  });
}

export const mustBeNumber = (props, propName, componentName) => {
  checkPropTypes({ 
    type: "number", props, propName, componentName
  });
};

function checkPropTypes({ type, isRequired, props, propName, componentName }) {
  componentName = componentName || "Anonymous";

  if (isRequired) {
    if (!props[propName]) {
      ReactDOM.hydrate(
        <ErrorMessage 
          description="Type prop error: is required" 
          component={componentName} 
          propName={propName}
          isRequired={"true"}
        />, 
        document.querySelector("body")
      );
    }
  } else {
    if (props[propName]) {
      let value = props[propName];
  
      if (typeof value === type) {
        return;
      }
  
      ReactDOM.hydrate(
        <ErrorMessage 
          description="Type prop error" 
          component={componentName} 
          propName={propName}
          type={typeof value} 
          typeShouldBe={type} 
        />, 
        document.querySelector("body")
      );
    }
  }
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

