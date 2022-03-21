import { Article } from '../../../styles/MameStyled/core/HtmlTag.styled';

export default function Container({ children }) {
  return (
    <Article css={{ display: 'grid', gap: 30,width: '100%', padding: 30, borderRadius: 12, border: '1px solid #eee' }}>
      {children}
    </Article>
  );
}