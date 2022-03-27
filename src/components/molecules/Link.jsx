import { default as NextLink } from 'next/link';
import { A } from '../../../styles/MameStyled/core/HtmlTag.styled';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';
import propTypes from 'prop-types';
import stylesConfig from '../../../styles.config';
import { useRouter } from 'next/router';

export default function Link({ active, href, text, ...props }) {
  catchErrorPropsComponent({ props, component: 'Link' });

  const router = useRouter();

  const { color, timing } = stylesConfig;

  return (
    <NextLink href={href} passHref>
      <A 
        css={{ color: router.pathname === href ? color.primary : 'white', transition: timing.fast, }} 
        hover={{ color: color.primary }}
      >
        {text}
      </A>
    </NextLink>
  );
}

const { string } = propTypes;

Link.propTypes = {
  href: string.isRequired,
  text: string.isRequired,
};


