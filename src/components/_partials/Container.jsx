// @ts-check
import stylesConfig from '../../../styles.config';
import { Div } from '../../../styles/MameStyled/core/HtmlTag.styled';
import PropTypes from 'prop-types';

function Container({ children, as, padding, radius, border, standard, display }) {
  const { color, spacing } = stylesConfig;

  const css = { 
    display: display ?? 'grid', 
    gap: spacing.md,
    padding: standard ? 0 : padding || spacing.sm, 
    borderRadius: standard ? 0 : radius || stylesConfig.radius.md, 
    border: standard ? 'none' : border || `1px solid ${color.muted}`, 
  };

  const cssLg = {
    padding: spacing.md,
  };

  return (
    <Div as={as ?? 'article'} css={css} cssLg={cssLg}>{children}</Div>
  );
}

const { any, oneOf, oneOfType, string, number } = PropTypes;

Container.propTypes = {
  children: any.isRequired,
  as: oneOf(['article', 'section']).isRequired,
  padding: oneOfType([string, number]),
  border: string,
  radius: number,
  display: oneOf(['grid', 'flex']),
};

export default Container;