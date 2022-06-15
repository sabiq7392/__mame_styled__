import screen from "../../config/screen.config";

function setResponsiveProp(props: any , originalNameProp: string, customNameProp?: string) {
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
export const gap = (props: any) => setResponsiveProp(props, "gap");

/** global */
export const fontSize = (props: any) => setResponsiveProp(props, "fontSize");
export const width = (props: any) => setResponsiveProp(props, "width");
export const height = (props: any) => setResponsiveProp(props, "height)");
export const padding = (props: any) => setResponsiveProp(props, "padding");
export const display = (props: any) => setResponsiveProp(props, "display");
export const background = (props: any) => setResponsiveProp(props, "background");
