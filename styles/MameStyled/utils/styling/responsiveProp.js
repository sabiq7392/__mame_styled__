import screen from "../../config/screen.config";

function setResponsiveProp(props , originalNameProp, customNameProp) {
  const value  = props[customNameProp || originalNameProp];

  return (
    value && (
      typeof value  === "number" || typeof value  === "string" ? {
        [originalNameProp]: value,
      }
      :
      {
        [`@media (${screen.xs})`]: { 
          [originalNameProp]: value.xs,
        },
        [`@media (${screen.sm})`]: {
          [originalNameProp]: value.sm,
        },
        [`@media (${screen.md})`]: {
          [originalNameProp]: value.md,
        },
        [`@media (${screen.lg})`]: {
          [originalNameProp]: value.lg,
        },
        [`@media (${screen.xl})`]: {
          [originalNameProp]: value.xl,
        },
        [`@media (${screen.xxl})`]: {
          [originalNameProp]: value.xxl,
        },
      }
    )
  );
}

/** choosen */
export const gap = (props) => setResponsiveProp(props, "gap");

/** global */
export const fontSize = (props) => setResponsiveProp(props, "fontSize");
export const width = (props) => setResponsiveProp(props, "width");
export const height = (props) => setResponsiveProp(props, "height)");
export const padding = (props) => setResponsiveProp(props, "padding");
export const display = (props) => setResponsiveProp(props, "display");
export const background = (props) => setResponsiveProp(props, "background");
