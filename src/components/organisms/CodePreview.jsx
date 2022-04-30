import { H1, Section } from '../../../styles/MameStyled/core/HtmlTag.styled';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Heading from '../molecules/Heading';
import PropTypes from 'prop-types';
import stylesConfig from '../../../styles.config';
import CatchErrorPropsComponent from '../../utils/CatchErrorPropsComponent';
import SetAutoHead from '../../utils/SetAutoHead';
import { useId } from 'react';

export default function CodePreview({ title = 'Result Code Preview', member, children, ...props }) {
  CatchErrorPropsComponent({ props, component: 'CodePreview.jsx' });

  const { spacing } = stylesConfig;

  const id = useId();

  return (
    <Section id={id} cssXs={{ display: 'grid', gap: `calc(${spacing.sm}px - .5em)` }}>
      <Heading head={SetAutoHead({ id }) || H1} member={member} title={title}  />
      <SyntaxHighlighter language="html" style={vscDarkPlus}>
        {children}
      </SyntaxHighlighter>
    </Section>
  );
}

const { string } = PropTypes;

CodePreview.propTypes = {
  member: string,
  title: string,
  children: string.isRequired,
};


