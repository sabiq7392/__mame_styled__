import { A, Div, Small } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';
import propTypes from 'prop-types';
import Link from 'next/link';

export default function Brand({ as, ...props }) {
  catchErrorPropsComponent({ props, component: 'Brand' });

  const { color } = stylesConfig;
  const css = { 
    fontWeight: 'bold', 
    color: color.primary, 
    letterSpacing: 1,
  };

  return (
    <Link href="/" passHref>
      <A>
        <Small as={as} css={css}>Mame Styled</Small>
      </A>
    </Link>
  );
}

Brand.propTypes = {
  as: propTypes.oneOf(['small', 'h1']),
}
