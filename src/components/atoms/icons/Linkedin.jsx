import CatchErrorPropsComponent from '../../../utils/CatchErrorPropsComponent';
import { BsLinkedin } from 'react-icons/bs';
import propTypes from 'prop-types';

export default function Linkedin({ size, ...props }) {
  CatchErrorPropsComponent({ props, component: 'Linkedin' });

  return (
    <BsLinkedin fontSize={size || 18} />
  );
}

Linkedin.propTypes = {
  size: propTypes.number,
};
