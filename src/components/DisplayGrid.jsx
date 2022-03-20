import { Article, Grid, Section } from '../../styles/MameStyled/Mame.styled';
import GridTemplateColumns from './display-grid/GridTemplateColumns';

export default function DisplayGrid() {
  return (
    <Article css={{ display: 'grid', gap: 30,width: '100%', padding: 30, borderRadius: 12, border: '1px solid #eee' }}>
      <h2>Display Grid</h2>
      <GridTemplateColumns />
    </Article>
  );
}

