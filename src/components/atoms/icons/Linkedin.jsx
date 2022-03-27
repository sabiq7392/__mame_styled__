import catchErrorPropsComponent from '../../../utils/catchErrorPropsComponent';
import { BsLinkedin } from 'react-icons/bs';
import propTypes from 'prop-types';

export default function Linkedin({ size, ...props }) {
  catchErrorPropsComponent({ props, component: 'Linkedin' });

  return (
    <BsLinkedin size={size || 18} />
  );
}

Linkedin.propTypes = {
  size: propTypes.number,
};
