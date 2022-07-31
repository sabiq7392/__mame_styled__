import { NextPage } from "next";
import { ReactElement } from "react";
import CodePreview from "../../src/components/organisms/CodePreview";
import Harbor from "../../src/components/organisms/Harbor";
import Preview from "../../src/components/organisms/Preview";
import MameDropdown from "../../src/components/organisms/_MameDropdown";

const Dropdown: NextPage = (): ReactElement => {
  return <>
    <Harbor title="Dropdown">
      <Preview member="Dropdown" noLandfield>
        <MameDropdown />
      </Preview>      
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
    </Harbor>
  </>;
};

export default Dropdown;
