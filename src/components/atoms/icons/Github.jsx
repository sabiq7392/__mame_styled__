import propTypes from 'prop-types';
import { AiOutlineGithub } from 'react-icons/ai';
import catchErrorPropsComponent from '../../../utils/catchErrorPropsComponent';

export default function Github({ size, ...props }) {
  catchErrorPropsComponent({ props, component: 'Github' })

  return (
    <AiOutlineGithub size={size || 24} />
  );
}

Github.propTypes = {
  size: propTypes.number,
};
