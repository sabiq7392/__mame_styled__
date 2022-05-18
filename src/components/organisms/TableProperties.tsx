import stylesConfig from "../../../styles.config";
import { Table, Thead, Tbody, Tr, Th, Td } from "../../../styles/MameStyled/core/HtmlTag.ts";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps.tsx";
import propTypes from "prop-types";

export default function TableProperties({ data, ...props }) {
  ErrorUnexpectedProps({ props, component: "TableProperties" });
  
  const { spacing, color, radius } = stylesConfig;
  const cssThThead = {
    textAlign: "left", 
    padding: `${spacing.xs}px ${spacing.sm}px`,
  };

  const cssTdTbody = { 
    textAlign: "left", 
    padding: `${spacing.xs}px ${spacing.sm}px`, 
    color: color.white, 
    verticalAlign: "top" 
  };

  const theadData = ["Name", "Default", "Type",  "Description"];

  return (
    <Table>
      <Thead cssXs={{ backgroundColor: color.light, borderRadius: radius.sm }}>
        <Tr>
          {theadData.map((_title, _key) =>
            <Th key={_key} cssXs={cssThThead}>
              {_title}
            </Th>
          )}
        </Tr>
      </Thead>
      <Tbody cssXs={{ backgroundColor: color.base.secondary.default }}>
        {data.map(({ name, value, type, description }) =>
          <Tr key={name}>
            <Td cssXs={cssTdTbody}>{name}</Td>
            <Td cssXs={cssTdTbody}>{value}</Td>
            <Td cssXs={cssTdTbody}>{type}</Td>
            <Td cssXs={cssTdTbody}>{description}</Td>
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


