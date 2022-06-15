import { A } from "../../../../../styles/MameStyled/core/HtmlTag";
import { BsChevronDown } from "react-icons/bs";
import { useRef, useState } from "react";
import Dropdown from "../../../../../styles/MameStyled/core/components/dropdown/Dropdown";
import DropdownButton from "../../../../../styles/MameStyled/core/components/dropdown/DropdownButton";
import DropdownBody from "../../../../../styles/MameStyled/core/components/dropdown/DropdownBody";

export default function MameDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const button = useRef<HTMLElement>();

  return <>
    <Dropdown>
      <DropdownButton 
        title="Dropdown"
        icon={<BsChevronDown size={18} />}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        _ref={button}
      />
      <DropdownBody isOpen={isOpen}>
        <A>Action</A>
        <A>Another Action</A>
        <A>Something else</A>
      </DropdownBody>
    </Dropdown>
  </>;
}
