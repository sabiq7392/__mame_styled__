/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { any } from "prop-types";
import { node } from "prop-types";
import { string } from "prop-types";
import ErrorMessage from "./ErrorMessage";

export default function ErrorUnexpectedProps({ 
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
      ErrorMessage({
        description:"There was an unexpected props on: ",
        props,
        component,
        type,
        note,
      });
    }

  }, [props, component, type, note, children, exceptProps]);

  if (children) return <>{children}</>;
}

ErrorUnexpectedProps.propTypes = {
  props: any.isRequired,
  component: string.isRequired,
  children: node,
  type: string,
};
