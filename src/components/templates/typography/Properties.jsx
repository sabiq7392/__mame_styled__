import { H3 } from '../../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../../styles.config';
import TableProperties from '../../organisms/TableProperties';
import catchErrorPropsComponent from '../../../utils/catchErrorPropsComponent';
import Harbor from '../../organisms/Harbor';

export default function Properties({ ...props }) {
  catchErrorPropsComponent({ props, component: 'Properties of Typography' });

  const { spacing } = stylesConfig;

  const tbodyData = [
    {
      name: 'size',
      default: '-',
      type: <>
        number 
        <br /> 
        number{`{ xs, sm, md, lg, xl, xxl }`}
      </>,
      description: <>
        xs, md, ... is size of screen. 
        <br />
        the font size will be added based on the screen
      </>
    },
  ];

  return (
    <Harbor head={H3} title="Properties">
      <TableProperties data={tbodyData} />
    </Harbor>
  );
}
