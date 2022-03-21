import { Flex } from '../../../styles/MameStyled/core/display/Flex.styled';
import { A } from '../../../styles/MameStyled/core/HtmlTag.styled';
import aboutMe from '../../data/aboutMe';
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import stylesConfig from '../../../styles.config';

export default function SocialMedia() {
  const { color, spacing } = stylesConfig;
  const css = {
    display: 'grid',
    alignItems: 'center',
  };

  return (
    <Flex justifyContent="end" gap={spacing.sm}>
      <A href={aboutMe.instagram} css={css}>
        <AiOutlineInstagram color={color.white} />
      </A>
      <A href={aboutMe.github} css={css}> 
        <AiOutlineGithub color={color.white} />
      </A>
      <A href={aboutMe.linkedin} css={css}>
        <BsLinkedin color={color.white} />
      </A>
    </Flex>
  );
}