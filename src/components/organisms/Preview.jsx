import propTypes from 'prop-types';
import stylesConfig from '../../../styles.config';
import { H1, Section } from '../../../styles/MameStyled/core/HtmlTag.styled';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';
import SetAutoHead from '../../utils/setAutoHead';
import Heading from '../molecules/Heading';
import { nanoid } from 'nanoid';

export default function Preview({ member, title, appeal, description, children, ...props }) {
  catchErrorPropsComponent({ props, component: 'Review', type: 'Organisms' });

  const { spacing } = stylesConfig;

  const id = nanoid();

  return (
    <Section id={id} css={{ display: 'grid', gap: spacing.sm }}>
      <Heading head={SetAutoHead(id) || H1} member={member} title={title} appeal={appeal} description={description} /> 
      {children}
    </Section>
  );
}

const { string, node } = propTypes;

Preview.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  member: string,
  appeal: string,
  description: string,
};
