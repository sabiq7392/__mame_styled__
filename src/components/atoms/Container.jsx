import stylesConfig from '../../../styles.config';
import { Div } from '../../../styles/MameStyled/core/HtmlTag.styled';
import PropTypes from 'prop-types';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';

function Container({ children, as, radius, border, standard, display, gap, id, ...props }) {
  catchErrorPropsComponent({ props, component: 'CodePreview.jsx' });

  const { color, spacing } = stylesConfig;

  const css = { 
    display: display ?? 'grid', 
    gap: standard ? gap || spacing.sm : spacing.md ,
    padding: standard ? 0 : spacing.sm, 
    borderRadius: standard ? 0 : radius || stylesConfig.radius.md, 
    border: border ? `1px solid ${color.muted}` : 'none', 
  };

  const cssLg = {
    padding: standard ? 0 : spacing.md,
  };

  return (
    <Div id={id} as={as} css={css} cssLg={cssLg}>{children}</Div>
  );
}

const { any, oneOf, oneOfType, string, number } = PropTypes;

Container.propTypes = {
  children: any.isRequired,
  as: oneOf(['article', 'section', 'div']).isRequired,
  padding: oneOfType([string, number]),
  border: string,
  radius: number,
  display: oneOf(['grid', 'flex']),
  id: string,
  standard: any,
  gap: number,
};

export default Container;
