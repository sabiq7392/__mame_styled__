import { A } from "../../../../../styles/MameStyled/core/HtmlTag";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import Dropdown from "../../../../../styles/MameStyled/core/components/dropdown/Dropdown";
import DropdownButton from "../../../../../styles/MameStyled/core/components/dropdown/DropdownButton";
import DropdownBody from "../../../../../styles/MameStyled/core/components/dropdown/DropdownBody";

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
