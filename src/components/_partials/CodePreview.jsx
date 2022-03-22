import { H1, H2, H3, H4, H5, H6, Section } from '../../../styles/MameStyled/core/HtmlTag.styled';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Heading from './Heading';
import PropTypes from 'prop-types';
import stylesConfig from '../../../styles.config';

export default function CodePreview({ heading, title, member, gap, children }) {
  const { spacing } = stylesConfig;

  return (
    <Section css={{ display: 'grid', gap: gap || spacing.sm }}>
      <Heading as={heading} member={member} title={title}  />
      <SyntaxHighlighter language="html" style={vscDarkPlus}>
        {children}
      </SyntaxHighlighter>
    </Section>
  );
}

const { oneOf, string, number } = PropTypes;

CodePreview.propTypes = {
  heading: oneOf([H1, H2, H3, H4, H5, H6]),
  member: string,
  title: string.isRequired,
  gap: number,
  children: string,
};


