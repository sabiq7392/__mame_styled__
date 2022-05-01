import stylesConfig from '../../../styles.config';
import { Div } from '../../../styles/MameStyled/core/HtmlTag.styled';
import CatchErrorPropsComponent from '../../utils/CatchErrorPropsComponent';

export default function LineSeperator({ ...props }) {
  CatchErrorPropsComponent({ props, component: 'LineSeperator' });

  const { color } = stylesConfig;

  return (
    <Div cssXs={{ background: color.muted, width: '100%', height: 1 }} />
  );
}
