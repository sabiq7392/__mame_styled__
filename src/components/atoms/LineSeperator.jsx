import stylesConfig from '../../../styles.config';
import { Div } from '../../../styles/MameStyled/core/HtmlTag.styled';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';

export default function LineSeperator({ ...props }) {
  catchErrorPropsComponent({ props, component: 'LineSeperator' });

  const { color } = stylesConfig;

  return (
    <Div css={{ background: color.muted, width: '100%', height: 1 }} />
  )
}
