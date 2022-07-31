import screen from "../config/screen.config";

function setResponsiveProp(props: any , NamePropCss: string) {
  const value  = props[NamePropCss];

  return (
    value && (
      typeof value  === "number" || typeof value  === "string" ? {
        [NamePropCss]: value,
      }
      :
      {
        [`@media (${screen.xs})`]: { 
          [NamePropCss]: value.xs,
        },
        [`@media (${screen.sm})`]: {
          [NamePropCss]: value.sm,
        },
        [`@media (${screen.md})`]: {
          [NamePropCss]: value.md,
        },
        [`@media (${screen.lg})`]: {
          [NamePropCss]: value.lg,
        },
        [`@media (${screen.xl})`]: {
          [NamePropCss]: value.xl,
        },
        [`@media (${screen.xxl})`]: {
          [NamePropCss]: value.xxl,
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

export const globalResponsiveProps = [
  width,
  height,
  padding,
  display,
  background,
  fontSize,
];
