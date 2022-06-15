import { useEffect } from "react";
import ErrorMessage from "./ErrorMessage";

type Props = {
  componentName: string,
  note: string,
};

export default function ErrorCannotCombinedProps({
  componentName, 
  note,
}: Props) {
  useEffect(() => {
    ErrorMessage({ 
      description: "Cannot Combined Props with Another Props", 
      componentName, 
      note,
    });
  }, [componentName, note]); 
}
