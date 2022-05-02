import TableProperties from "../../organisms/TableProperties";
import CatchErrorPropsComponent from "../../../../styles/MameStyled/core/components/handle-error/CatchErrorPropsComponent";
import Harbor from "../../organisms/Harbor";

export default function Properties({ ...props }) {
  CatchErrorPropsComponent({ props, component: "Properties of Typography" });

  const tbodyData = [
    {
      name: "size",
      default: "-",
      type: <>
        number 
        <br /> 
        number{"{ xs, sm, md, lg, xl, xxl }"}
      </>,
      description: <>
        xs, md, ... is size of screen. 
        <br />
        the font size will be added based on the screen
      </>
    },
  ];

  return (
    <Harbor title="Properties">
      <TableProperties data={tbodyData} />
    </Harbor>
  );
}
