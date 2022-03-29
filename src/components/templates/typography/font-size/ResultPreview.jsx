import { Div } from '../../../../../styles/MameStyled/core/HtmlTag.styled';
import { Typography } from '../../../../../styles/MameStyled/core/Typography.styled';
import stylesConfig from '../../../../../styles.config';
import catchErrorPropsComponent from '../../../../utils/catchErrorPropsComponent';
import Preview from '../../../organisms/Preview';

export default function ResultPreview({ ...props }) {
  catchErrorPropsComponent({ props, component: 'ResultPreview of Typography - Font Size' });

  const { color, radius, spacing } = stylesConfig;

  return (
    <Preview title="Result Preview" member="Font Size" appeal="Try to resize the screen, and see the effect">
      <Div css={{ backgroundColor: color.base.secondary.default, borderRadius: radius.sm, padding: spacing.md }}>
        <Typography size={{ xs: 20, sm: 25, md: 30, lg: 35, xl: 40, xxl: 45 }}>
          Developer, Try Me!!
        </Typography>
      </Div>
    </Preview>
  );
}
