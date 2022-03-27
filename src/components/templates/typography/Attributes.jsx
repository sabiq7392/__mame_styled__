import Container from '../../atoms/Container';
import Heading from '../../molecules/Heading';
import { Table, THead, TBody, Td, Tr, Th, H3 } from '../../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../../styles.config';

export default function Attributes() {
  const { spacing, color, radius } = stylesConfig;

  return (
    <div>
      <Container as="section" standard gap={spacing.sm}>
        <Heading head={H3} title="Attributes" member="Typography" />
        <Table>
          <THead css={{ backgroundColor: color.light, borderRadius: radius.sm }}>
            <Tr>
              {['Name', 'Value', 'Type', 'Description'].map((_title, _key) =>
                <Th key={_key} css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px` }}>
                  {_title}
                </Th>
              )}
            </Tr>
          </THead>
          <TBody css={{ backgroundColor: color.base.secondary.default }}>
            <Tr>
              <Td css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px`, color: color.white, verticalAlign: 'top' }}>size</Td>
              <Td css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px`, color: color.white, verticalAlign: 'top' }}>
                {`size={{number}}`} 
                <br />
                {`size={{ xs: {number}, sm:..., md:..., lg:..., xl:..., xxl:... }}`}
              </Td>
              <Td css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px`, color: color.white, verticalAlign: 'top' }}>
                number 
                <br /> 
                number{`{ xs, sm, md, lg, xl, xxl }`}
              </Td>
              <Td css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px`, color: color.white, verticalAlign: 'top' }}>
                xs, md, ... is size of screen. 
                <br />
                the font size will be added based on the screen
              </Td>
            </Tr>
          </TBody>
        </Table>
      </Container>
    </div>
  );
}
