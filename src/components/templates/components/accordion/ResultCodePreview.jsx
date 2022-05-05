import dynamic from "next/dynamic";

const CodePreview = dynamic(() => import("../../../organisms/CodePreview"));

export default function ResultCodePreview() {
  return <>
    <CodePreview member="Accordion">
      {`
        
      `}
    </CodePreview>
  </>;
}
