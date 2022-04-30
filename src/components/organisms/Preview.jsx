import propTypes from 'prop-types';
import stylesConfig from '../../../styles.config';
import { H1, Section } from '../../../styles/MameStyled/core/HtmlTag.styled';
import CatchErrorPropsComponent from '../../utils/CatchErrorPropsComponent';
import SetAutoHead from '../../utils/SetAutoHead';
import Heading from '../molecules/Heading';
import { nanoid } from 'nanoid';
import Landfield from '../atoms/Landfield';
import { any } from 'prop-types';

export default function Preview({ member, title = 'Result Preview', appeal, description, children, noLandfield, background, ...props }) {
  CatchErrorPropsComponent({ props, component: 'Review', type: 'Organisms' });

  const { spacing } = stylesConfig;

  const id = nanoid();

  return (
    <Section id={id} cssXs={{ display: 'grid', gap: spacing.sm }}>
      <Heading head={SetAutoHead({ id }) || H1} member={member} title={title} appeal={appeal} description={description} /> 
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
