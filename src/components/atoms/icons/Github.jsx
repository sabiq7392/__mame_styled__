import propTypes from 'prop-types';
import { AiOutlineGithub } from 'react-icons/ai';
import CatchErrorPropsComponent from '../../../utils/CatchErrorPropsComponent';

export default function Github({ size, ...props }) {
  CatchErrorPropsComponent({ props, component: 'Github' })

  return (
    <AiOutlineGithub size={size || 24} />
  );
}

Github.propTypes = {
  size: propTypes.number,
};
