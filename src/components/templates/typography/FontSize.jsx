import ErrorUnexpectedProps from "../../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps";
import Harbor from "../../organisms/Harbor";
import Preview from "../../organisms/Preview";
import CodePreview from "../../organisms/CodePreview";
import { Typography } from "../../../../styles/MameStyled/core/_deprecated/Typography.styled";

export default function FontSize({ ...props }) {
  ErrorUnexpectedProps({ props, component: "FontSize of Typography" });

  return (
    <Harbor title="Font Size" 
      description="xs, md, ... is size of screen. the font size will base on the screen"
    >
      <Preview title="Result Preview" member="Font Size" appeal="Try to resize the screen, and see the effect">
        <Typography fontSize={{ xs: 20, sm: 25, md: 30, lg: 35, xl: 40, xxl: 45 }}>
          Developer, Try Me!!
        </Typography>
      </Preview>
      
      <CodePreview title="Result Code Preview" member="Font Size">
        {`
          <Typography fontSize={{ xs: 20, sm: 25, md: 30, lg: 35, xl: 40, xxl: 45 }}>
            Developer Try Me
          </Typography>
        `}
      </CodePreview>
    </Harbor>
  );
}
