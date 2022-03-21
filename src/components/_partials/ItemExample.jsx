import { Grid, Flex } from '../../../styles/MameStyled/core/display/_Display.styled';
import PropTypes from 'prop-types';

export default function ItemExample({ item, title, href, description }) {
  const css = {
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', 
    padding: 30, 
    borderRadius: 8, 
    transition: '200ms'
  };

  const hover = { background: '#eee' };

  return (
    <>
      {item === 'grid' ? 
        <Grid item  css={css} hover={hover}>
          <Item href={href} title={title} description={description} />
        </Grid>
        : 
        <Flex item css={css} hover={hover}>
          <Item href={href} title={title} description={description} />
        </Flex>
      }
    </>
  );
}

function Item({ href, title, description }) {
  return (
    <a href={href}>
      <h2>{title} &rarr;</h2>
      <p>{description}</p>
    </a>
  );
}

ItemExample.propTypes = {
  item: PropTypes.oneOf(['grid', 'flex']).isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
