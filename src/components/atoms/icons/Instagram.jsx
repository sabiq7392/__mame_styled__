import { AiOutlineInstagram } from 'react-icons/ai';
import catchErrorPropsComponent from '../../../utils/catchErrorPropsComponent';
import propTypes from 'prop-types';

export default function Instagram({ size, ...props }) {
  catchErrorPropsComponent({ props, component: 'Instagram' });

  return (
    <AiOutlineInstagram size={size || 24} /> 
  );
}

Instagram.propTypes = {
  size: propTypes.number,
};
