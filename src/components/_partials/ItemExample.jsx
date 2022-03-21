import { Grid, Flex } from '../../../styles/MameStyled/core/display/_Display.styled';
import PropTypes from 'prop-types';
import stylesConfig from '../../../styles.config';
import { A, H2, P } from '../../../styles/MameStyled/core/HtmlTag.styled';

export default function ItemExample({ item, title, href, description }) {
  const { radius, spacing, color, timing } = stylesConfig;

  const css = {
    padding: spacing.md, 
    borderRadius: radius.sm, 
    transition: timing.fast,
    backgroundColor: color.base.secondary.default,
  };

  const hover = { background: color.base.secondary.hover };

  return (
    <>
      {item === 'grid' ? 
        <Grid item  css={css} hover={hover}>
          <Item href={href} title={title} description={description} />
        </Grid>
        : item === 'flex' ?
        <Flex item css={css} hover={hover}>
          <Item href={href} title={title} description={description} />
        </Flex>
        : 
        <></>
      }
    </>
  );
}

function Item({ href, title, description }) {
  const { spacing, color } = stylesConfig;

  return (
    <A href={href} css={{ display: 'grid', gap: spacing.sm, color: color.white }}>
      <H2>{title} &rarr;</H2>
      <P>{description}</P>
    </A>
  );
}

ItemExample.propTypes = {
  item: PropTypes.oneOf(['grid', 'flex']).isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
