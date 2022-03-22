import { Grid, Flex } from '../../../styles/MameStyled/core/display/_Display.styled';
import PropTypes from 'prop-types';
import stylesConfig from '../../../styles.config';
import { A, H2, P } from '../../../styles/MameStyled/core/HtmlTag.styled';
import catchErrorComponent from '../../utils/catchErrorPropsComponent';

export default function ItemExample({ item, title, href, description, ...props }) {
  catchErrorComponent({ props, component: 'ItemExample.jsx', location: '/src/components/_partials/ItemExample.jsx' });
  
  const { radius, spacing, color, timing } = stylesConfig;

  const css = {
    padding: spacing.md, 
    borderRadius: radius.sm, 
    transition: timing.fast,
    backgroundColor: color.base.secondary.default,
    height: '100%',
  };

  const hover = { background: color.base.secondary.hover };

  return (
    <div>
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
    </div>
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

const { oneOf, string } = PropTypes;

ItemExample.propTypes = {
  item: oneOf(['grid', 'flex']).isRequired,
  title: string.isRequired,
  href: string.isRequired,
  description: string.isRequired,
};
