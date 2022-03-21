import { Section } from '../../../styles/MameStyled/core/HtmlTag.styled';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Heading } from '../_partials/_partials';
import PropTypes from 'prop-types';

export default function CodePreview({ heading, title, member, children }) {
  return (
    <Section>
      <Heading as={heading} member={member} title={title}  />
      <SyntaxHighlighter language="html" style={vscDarkPlus}>
        {children}
      </SyntaxHighlighter>
    </Section>
  );
}

CodePreview.propTypes = {
  heading: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  member: PropTypes.string,
  title: PropTypes.string,
};


