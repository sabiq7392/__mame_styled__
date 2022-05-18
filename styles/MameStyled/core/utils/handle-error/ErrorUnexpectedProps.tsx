/* eslint-disable react/prop-types */

import { useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import { ReactNode } from "react";

type Props = {
  props: any,
  component?: string, // same componentName but this deprecated
  componentName: string,
  type?: "atom" | "molecule" | "template" | "page" | "organism" | "component",
  children?:  ReactNode,
  note?: string,
};

export default function ErrorUnexpectedProps({ 
  props, 
  component, 
  componentName, 
  type, 
  note,
  children,
}: Props) {

  useEffect(() => {
    if (Object.keys(props).length !== 0) {
      /** @for_react_below_version_18 */
      // ReactDOM.hydrate(
      //   <ErrorMessage description="There was an unexpected props on: " props={props} component={component} type={type} />, 
      //   document.querySelector("body"),
      // );

      /** @for_react_version_18 */
      ErrorMessage({
        description:"There was an unexpected props on: ",
        props,
        component,
        componentName,
        type,
        note,
      });
    }

  }, [props, component, type, note, children, componentName]);

  if (children) return <>{children}</>;
}
