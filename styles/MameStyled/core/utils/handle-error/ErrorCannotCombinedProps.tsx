import { string } from "prop-types";
import { useEffect } from "react";
import ErrorMessage from "./ErrorMessage";

export default function ErrorCannotCombinedProps({
  componentName, 
  note,
}) {
  useEffect(() => {
    ErrorMessage({ 
      description: "Cannot Combined Props with Another Props", 
      componentName, 
      note,
    });
  }, [componentName, note]); 
}

ErrorCannotCombinedProps.propTypes = {
  componentName: string.isRequired,
  note: string.isRequired
};
