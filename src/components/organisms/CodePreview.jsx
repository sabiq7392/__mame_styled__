import { H1, Section } from '../../../styles/MameStyled/core/HtmlTag.styled';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Heading from '../molecules/Heading';
import PropTypes from 'prop-types';
import stylesConfig from '../../../styles.config';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';
import SetAutoHead from '../../utils/setAutoHead';
import { nanoid } from 'nanoid';

export default function CodePreview({ title, member, children, ...props }) {
  catchErrorPropsComponent({ props, component: 'CodePreview.jsx' });

  const { spacing } = stylesConfig;

  const id = nanoid();

  return (
    <Section id={id} css={{ display: 'grid', gap: `calc(${spacing.sm}px - .5em)` }}>
      <Heading head={SetAutoHead(id) || H1} member={member} title={title}  />
      <SyntaxHighlighter language="html" style={vscDarkPlus}>
        {children}
      </SyntaxHighlighter>
    </Section>
  );
}

const { string } = PropTypes;

CodePreview.propTypes = {
  member: string,
  title: string.isRequired,
  children: string.isRequired,
};


