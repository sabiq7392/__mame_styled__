import { AiOutlineInstagram } from 'react-icons/ai';
import CatchErrorPropsComponent from '../../../utils/CatchErrorPropsComponent';
import propTypes from 'prop-types';

export default function Instagram({ size, ...props }) {
  CatchErrorPropsComponent({ props, component: 'Instagram' });

  return (
    <AiOutlineInstagram size={size || 24} /> 
  );
}

Instagram.propTypes = {
  size: propTypes.number,
};
