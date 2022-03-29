import propTypes from 'prop-types';
import stylesConfig from '../../../styles.config';
import { H1, Section } from '../../../styles/MameStyled/core/HtmlTag.styled';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';
import SetAutoHead from '../../utils/setAutoHead';
import Heading from '../molecules/Heading';
import { nanoid } from 'nanoid';
import Landfield from '../molecules/LandField';
import { any } from 'prop-types';

export default function Preview({ member, title = 'Result Preview', appeal, description, children, noLandfield, background, ...props }) {
  catchErrorPropsComponent({ props, component: 'Review', type: 'Organisms' });

  const { spacing } = stylesConfig;

  const id = nanoid();

  return (
    <Section id={id} css={{ display: 'grid', gap: spacing.sm }}>
      <Heading head={SetAutoHead(id) || H1} member={member} title={title} appeal={appeal} description={description} /> 
      {noLandfield ? children : <Landfield background={background}>{children}</Landfield>}
    </Section>
  );
}

const { string, node } = propTypes;

Preview.propTypes = {
  title: string,
  children: node.isRequired,
  member: string,
  appeal: string,
  description: string,
  noLandfield: any,
  background: string,
};
