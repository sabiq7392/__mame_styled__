import screen from '../../config/screen.config';

export default function setFontSize(props) {
  return (
    !props.size ? false : (
      typeof props.size === 'number' ? {
        [`@media (${screen.xs})`]: { fontSize: props.size, }
      }
      : typeof props.size !== 'number' ?
      {
        [`@media (${screen.xs})`]: { fontSize: props.size.xs },
        [`@media (${screen.sm})`]: { fontSize: props.size.sm },
        [`@media (${screen.md})`]: { fontSize: props.size.md },
        [`@media (${screen.lg})`]: { fontSize: props.size.lg },
        [`@media (${screen.xl})`]: { fontSize: props.size.xl },
        [`@media (${screen.xxl})`]: { fontSize: props.size.xxl },
      }
      : false
    )
  );
}
