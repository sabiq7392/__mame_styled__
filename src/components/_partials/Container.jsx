import stylesConfig from '../../../styles.config';
import { Div } from '../../../styles/MameStyled/core/HtmlTag.styled';
import PropTypes from 'prop-types';

export default function Container({ children, as, padding, radius, border, standard, display }) {
  const { color, spacing } = stylesConfig;

  const css = { 
    display: display ?? 'grid', 
    gap: spacing.md,
    padding: standard ? 0 : padding || spacing.md, 
    borderRadius: standard ? 0 : radius || stylesConfig.radius.md, 
    border: standard ? 'none' : border || `1px solid ${color.muted}`, 
  };

  return (
    <Div as={as ?? 'article'} css={css}>{children}</Div>
  );
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.oneOf(['article', 'section']).isRequired,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  border: PropTypes.string,
  radius: PropTypes.number,
  display: PropTypes.oneOf(['grid', 'flex']),
};
