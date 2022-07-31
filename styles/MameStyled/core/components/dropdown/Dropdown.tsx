import { Div } from "../../HtmlTag";
import { createElement } from "react";
import { requiredProps } from "../../../constants/required-props.constant";
import { node } from "prop-types";
import type { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function Dropdown({ children, ...props }: Props): ReactElement {
  return createElement(
    Div,
    {
      ...requiredProps(props, {
        cssXs: {
          width: "fit-content",
        },
      }),
    },
    children,
  );
}

Dropdown.propTypes = {
  children: node.isRequired,
};
