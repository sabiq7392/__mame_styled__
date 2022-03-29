import Container from '../atoms/Container';
import { Grid } from '../../../styles/MameStyled/core/display/Grid.styled';
import stylesConfig from '../../../styles.config';
import propTypes from 'prop-types';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';
import Heading from '../molecules/Heading';
import { H2 } from '../../../styles/MameStyled/core/HtmlTag.styled';
import { nanoid } from 'nanoid';
import SetAutoHead from '../../utils/setAutoHead';

export default function Harbor({ children, member, title, appeal, description, ...props }) {
  catchErrorPropsComponent({ props, catchErrorPropsComponent: 'Harbor', type: 'Organisms' });

  const { spacing } = stylesConfig;
  const id = nanoid();

  return (
    <Container id={id} as="article" standard>
      <Grid gap={spacing.md}> 
        <Heading head={SetAutoHead(id) || H2} member={member} title={title} appeal={appeal} description={description} /> 
        <Grid gap={spacing.lg}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}

const { node, string } = propTypes;

Harbor.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  member: string,
  appeal: string,
  description: string,
};
