import Container from '../atoms/Container';
import { Grid } from '../../../styles/MameStyled/core/display/Grid.styled';
import stylesConfig from '../../../styles.config';
import propTypes from 'prop-types';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';
import Heading from '../molecules/Heading';
import { H1, H2, H3, H4, H5, H6 } from '../../../styles/MameStyled/core/HtmlTag.styled';

export default function Harbor({ head, children, member, title, appeal, description, ...props }) {
  catchErrorPropsComponent({ props, catchErrorPropsComponent: 'Harbor', type: 'Organisms' });

  const { spacing } = stylesConfig;

  return (
    <Container as="article" standard>
      <Grid gap={spacing.md}> 
        <Heading head={head} member={member} title={title} appeal={appeal} description={description} /> 
        <Grid gap={spacing.lg}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}

const { node, oneOf, string } = propTypes;

Harbor.propTypes = {
  head: oneOf([H1, H2, H3, H4, H5, H6]).isRequired,
  children: node.isRequired,
  title: string.isRequired,
  member: string,
  appeal: string,
  description: string,
};
