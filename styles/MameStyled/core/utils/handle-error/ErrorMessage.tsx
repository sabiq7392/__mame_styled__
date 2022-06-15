import { P, Span } from "../../HtmlTag";
import { createRoot } from "react-dom/client";
import { CSSProperties } from "react";

type Props = {
  props?: any,
  component?: string,
  componentName?: string,
  type?: "atom" | "molecule" | "template" | "page" | "organism" | "component",
  typeShouldBe?: string,
  description?: string,
  propName?: string,
  isRequired?: boolean,
  note?: string,
};

export default function ErrorMessage({ 
  props, 
  component, componentName, // same
  type, 
  typeShouldBe, 
  description, 
  propName, 
  isRequired,
  note,
}: Props) {
  const css: CSSProperties = { 
    color: "white", 
    display: "flex",  
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    width: "100%", 
    height: "100vh",
  };

  const container = document.querySelector("body");
  const root = createRoot(container as Element);
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

type ListInfoErrorProps = {
  title: string,
  value: any,
};

function ListInfoError({ title, value }: ListInfoErrorProps) {
  return (
    <Span>
      <Span cssXs={{ color: "red" }}>{title}: </Span>
      <Span>{value}</Span>
    </Span>
  );
}
