import screen from '../../config/screen.config';

function setResponsiveProperty(props , property, propNameInComponent) {
  const setProperty = props[propNameInComponent || property];

  return (
    !setProperty ? false : (
      typeof setProperty === 'number' || 
      typeof setProperty === 'string' ? {
        [property]: setProperty
      }
      :
      {
        [`@media (${screen.xs})`]: { 
          [property]: setProperty.xs ,
        },
        [`@media (${screen.sm})`]: {
          [property]: setProperty.sm,
        },
        [`@media (${screen.md})`]: {
          [property]: setProperty.md,
        },
        [`@media (${screen.lg})`]: {
          [property]: setProperty.lg,
        },
        [`@media (${screen.xl})`]: {
          [property]: setProperty.xl,
        },
        [`@media (${screen.xxl})`]: {
          [property]: setProperty.xxl,
        }
      }
    )
  );
}

export const gap = (props) => setResponsiveProperty(props, 'gap');
export const fontSize = (props) => setResponsiveProperty(props, 'fontSize', 'fontSize');
export const width = (props) => setResponsiveProperty(props, 'width');
export const height = (props) => setResponsiveProperty(props, 'height)');
export const padding = (props) => setResponsiveProperty(props, 'padding');
export const display = (props) => setResponsiveProperty(props, 'display');
export const background = (props) => setResponsiveProperty(props, 'background', 'bg');

export const globalResponsiveProperty = [
  width,
  height,
  padding,
];
