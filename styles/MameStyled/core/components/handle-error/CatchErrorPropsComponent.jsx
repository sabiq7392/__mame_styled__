/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { Span, P } from "../../HtmlTag.styled";
import propTypes from "prop-types";
import { createRoot } from "react-dom/client";
import { any } from "prop-types";
import { node } from "prop-types";
import { string } from "prop-types";

export default function CatchErrorPropsComponent({ 
  props, 
  component, 
  type, 
  note,
  children,
  exceptProps
}) {


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
          note={note}
        />
      );
    }

  }, [props, component, type, note, children, exceptProps]);

  if (children) return <>{children}</>
}

CatchErrorPropsComponent.propTypes = {
  props: any.isRequired,
  component: string.isRequired,
  children: node,
  type: string,
};

function ErrorMessage({ 
  props, 
  component, 
  type, 
  typeShouldBe, 
  description, 
  propName, 
  isRequired,
  note,
}) {
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

            { props &&
              <ListInfoError title="Props" value={JSON.stringify(props)} />  
            }
            { type && 
              <ListInfoError title="Type" value={type} /> 
            }
            { typeShouldBe && 
              <ListInfoError title="Type Should Be" value={typeShouldBe} /> 
            }
            { isRequired && 
              <ListInfoError title="Is Required" value={isRequired} /> 
            }
            { note && 
              <ListInfoError title="Note" value={note} /> 
            }
          </Span>
        </Span>
      </P>
    </>
  );
}

function ListInfoError({ title, value }) {
  return (
    <Span>
      <Span cssXs={{ color: "red" }}>{title}: </Span>
      <Span>{value}</Span>
    </Span>
  );
}

ListInfoError.propTypes = {
  title: propTypes.string.isRequired,
  value: propTypes.any.isRequired
};


