import { A, Small } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import CatchErrorPropsComponent from '../../utils/CatchErrorPropsComponent';
import propTypes from 'prop-types';
import Link from 'next/link';

export default function Brand({ as, ...props }) {
  CatchErrorPropsComponent({ props, component: 'Brand' });

  const { color } = stylesConfig;
  const css = { 
    fontWeight: 'bold', 
    color: color.primary, 
    letterSpacing: 1,
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Link href="/" passHref>
      <A cssXs={{ display: 'grid' }}>
        <Small as={as} cssXs={css}>Mame Styled</Small>
      </A>
    </Link>
  );
}

Brand.propTypes = {
  as: propTypes.oneOf(['small', 'h1']),
}
