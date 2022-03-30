import { string } from 'prop-types';
import { node } from 'prop-types';
import stylesConfig from '../../../styles.config';
import { Div } from '../../../styles/MameStyled/core/HtmlTag.styled';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';

export default function Landfield({ children, background, ...props }) {
  catchErrorPropsComponent({ props, component: 'Landifield', type: 'Molecules' });

  const { color, radius, spacing } = stylesConfig;

  return (
    <Div css={{ backgroundColor: background || color.base.secondary.default, borderRadius: radius.sm, padding: spacing.md }}>
      {children}
    </Div>
  );
}

Landfield.propTypes = {
  children: node.isRequired,
  background: string,
};
