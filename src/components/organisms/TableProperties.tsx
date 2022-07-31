import STYLES_CONFIG from "../../../styles.config";
import { Table, Thead, Tbody, Tr, Th, Td } from "../../../styles/MameStyled/core/HtmlTag";
import type { ReactElement } from "react";
import { CSSProperties } from "styled-components";

const { spacing, color, radius } = STYLES_CONFIG;

interface Props {
  data: {
    name: string;
    default: string;
    type: any;
    value: string;
    description: any;
  }[]
}

export default function TableProperties({ data }: Props): ReactElement {
  const cssThThead: CSSProperties = {
    textAlign: "left", 
    padding: `${spacing.xs}px ${spacing.sm}px`,
  };

  const cssTdTbody: CSSProperties = { 
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

