import { Flex } from '../../../styles/MameStyled/core/display/Flex.styled';
import { A } from '../../../styles/MameStyled/core/HtmlTag.styled';
import aboutMe from '../../data/aboutMe';
import stylesConfig from '../../../styles.config';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';
import Linkedin from '../atoms/icons/Linkedin';
import Github from '../atoms/icons/Github';
import Instagram from '../atoms/icons/Instagram';
import propTypes from 'prop-types';

export default function SocialMedia({ position, ...props }) {
  catchErrorPropsComponent({ props, component: 'SocialMedia.jsx' });

  const { color, spacing, timing } = stylesConfig;

  const css = {
    display: 'grid',
    alignItems: 'center', 
    transition: timing.fast,
    color: 'white',
  };

  const hover = { color: color.primary }

  return (
    <Flex justifyContent={position} gap={spacing.sm} >
      <A href={aboutMe.instagram} css={css} hover={hover}>
        <Instagram />
      </A>
      <A href={aboutMe.github} css={css} hover={hover}> 
        <Github />
      </A>
      <A href={aboutMe.linkedin} css={css} hover={hover}>
        <Linkedin />
      </A>
    </Flex>
  );
}

SocialMedia.propTypes = {
  position: propTypes.oneOf(['end', 'start', 'center']).isRequired,
};


