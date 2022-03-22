import { Flex } from '../../../styles/MameStyled/core/display/Flex.styled';
import { A } from '../../../styles/MameStyled/core/HtmlTag.styled';
import aboutMe from '../../data/aboutMe';
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import stylesConfig from '../../../styles.config';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';

export default function SocialMedia({ ...props }) {
  catchErrorPropsComponent({ props, component: 'SocialMedia.jsx', location: '/src/components/_partials/SocialMedia.jsx' });

  const { color, spacing, timing } = stylesConfig;

  const css = {
    display: 'grid',
    alignItems: 'center', 
    color: color.white,
    transition: timing.fast,
  };

  const hover = { color: color.primary }

  return (
    <Flex justifyContent="end" gap={spacing.sm} >
      <A href={aboutMe.instagram} css={css} hover={hover}>
        <AiOutlineInstagram />
      </A>
      <A href={aboutMe.github} css={css} hover={hover}> 
        <AiOutlineGithub  />
      </A>
      <A href={aboutMe.linkedin} css={css} hover={hover}>
        <BsLinkedin />
      </A>
    </Flex>
  );
}