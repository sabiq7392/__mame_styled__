import { P, Span } from "../../HtmlTag";
import { any, string } from "prop-types";
import { createRoot } from "react-dom/client";

export default function ErrorMessage({ 
  props, 
  component, componentName, // same
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

  const container = document.querySelector("body");
  const root = createRoot(container);
  root.render(
    <P debug cssXs={css}>
      <Span cssXs={{ display: "grid", gap: "1rem" }}>
        <Span cssXs={{ fontSize: "1.5rem" }}>{description}</Span>
        <Span cssXs={{ display: "grid", gap: 5 }}>
          <ListInfoError title="Component" value={component || componentName} />

          { props &&
            <>
              <ListInfoError title="Prop Name" value={propName} />
              <ListInfoError title="Props" value={JSON.stringify(props)} /> 
            </>
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

ErrorMessage.propTypes = {
  description: string.isRequired,
  component: string.isRequired,
};

ListInfoError.propTypes = {
  title: string.isRequired,
  value: any.isRequired
};
