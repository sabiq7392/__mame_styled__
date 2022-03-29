import stylesConfig from '../../../styles.config';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../../styles/MameStyled/core/HtmlTag.styled';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';
import propTypes from 'prop-types';

export default function TableProperties({ data, ...props }) {
  catchErrorPropsComponent({ props, component: 'TableProperties' });
  
  const { spacing, color, radius } = stylesConfig;
  const cssThThead = {
    textAlign: 'left', 
    padding: `${spacing.xs}px ${spacing.sm}px`,
  };

  const cssTdTbody = { 
    textAlign: 'left', 
    padding: `${spacing.xs}px ${spacing.sm}px`, 
    color: color.white, 
    verticalAlign: 'top' 
  };

  const theadData = ['Name', 'Default', 'Type',  'Description'];

  return (
    <Table>
      <Thead css={{ backgroundColor: color.light, borderRadius: radius.sm }}>
        <Tr>
          {theadData.map((_title, _key) =>
            <Th key={_key} css={cssThThead}>
              {_title}
            </Th>
          )}
        </Tr>
      </Thead>
      <Tbody css={{ backgroundColor: color.base.secondary.default }}>
        {data.map(({ name, value, type, description }) =>
          <Tr key={name}>
            <Td css={cssTdTbody}>{name}</Td>
            <Td css={cssTdTbody}>{value}</Td>
            <Td css={cssTdTbody}>{type}</Td>
            <Td css={cssTdTbody}>{description}</Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
}

const { string, arrayOf, shape, any } = propTypes;

TableProperties.propTypes = {
  data: arrayOf(
    shape({
      name: string.isRequired,
      default: string.isRequired,
      type: any.isRequired,
      description: any.isRequired
    }),
  ).isRequired,
};


