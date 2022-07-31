import { ReactElement } from "react";
import CodePreview from "../../../organisms/CodePreview";

export default function ResultCodePreview(): ReactElement {
  return <>
    <CodePreview member="Dropdown">
      {`
        export default function MameDropdown() {
          const [isOpen, setIsOpen] = useState(false);
        
          return <>
            <Dropdown>
              <DropdownButton 
                title="Dropdown"
                icon={<BsChevronDown size={18} />}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
              <DropdownBody isOpen={isOpen}>
                <A>Action</A>
                <A>Another Action</A>
                <A>Something else</A>
              </DropdownBody>
            </Dropdown>
          </>;
        }
      `}
    </CodePreview>
  </>;
}
