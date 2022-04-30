import Link from 'next/link';
import propTypes from 'prop-types';
import stylesConfig from '../../../styles.config';
import { A, Button as MameButton } from '../../../styles/MameStyled/core/HtmlTag.styled';
import CatchErrorPropsComponent from '../../utils/CatchErrorPropsComponent';

export default function Button({ text, href, ...props }) {
  CatchErrorPropsComponent({ props, component: 'Button' });
  
  const { color, radius, timing } = stylesConfig;

  const css = {
    background: color.base.secondary.default,
    border: 'none',
    padding: 5, 
    color: 'white', 
    borderRadius: radius.sm, 
    maxWidth: 500, 
    width: '100%', 
    placeSelf: 'center', 
    transition: timing.fast,
    fontWeight: 600,
    textAlign: 'center'
  };

  const cssLg = { padding: 10 };

  const hover = { filter: 'brightness(80%)' };

  return (
    <>
      {href ? 
        <Link href={href} passHref>
          <A cssXs={css} cssLg={cssLg} hover={hover}>
            {text}
          </A>
        </Link>
      :
        <MameButton cssXs={css} cssLg={cssLg} hover={hover}>
        {text}
        </MameButton>
      }
    </>
  );
}

const { string } = propTypes;

Button.propTypes = {
  text: string.isRequired,
  href: string,
};
