import { Small } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';

export default function Brand({ ...props }) {
  catchErrorPropsComponent({ props, component: 'Brand', location: '/src/components/_partials/Brand.jsx' });

  // // [{},{}]
  // if (props[0].length === undefined) {
  //   console.log('undefined')
  // } else {
  //   console.log('else')
  // }

  const { color } = stylesConfig;
  const css = { 
    textAlign: 'center', 
    fontWeight: 'bold', 
    color: color.primary, 
    letterSpacing: 1 
  };

  return (
    <Small css={css}>Mame Styled</Small>
  );
}