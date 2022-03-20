import { Grid, Flex } from '../../../styles/MameStyled/Mame.styled'
import PropTypes from 'prop-types';

export default function ItemExample({ item, title, href, description, props }) {
  return (
    <>
      {item === 'grid' ? 
        <Grid {...props} item css={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', padding: 30, borderRadius: 8 }}>
          <a href={href}>
            <h2>{title} &rarr;</h2>
            <p>{description}</p>
          </a>
        </Grid>
        : 
        <Flex item css={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', padding: 30, borderRadius: 8 }}>
          <a href={href}>
            <h2>{title} &rarr;</h2>
            <p>{description}</p>
          </a>
        </Flex>
      }
    </>
  );
}

ItemExample.propTypes = {
  item: PropTypes.oneOf(['grid', 'flex']),
  title: PropTypes.string,
  href: PropTypes.string,
  description: PropTypes.string,
};
