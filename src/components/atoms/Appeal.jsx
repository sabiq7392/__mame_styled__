import { Strong } from "../../../styles/MameStyled/core/HtmlTag";
import stylesConfig from "../../../styles.config";
import PropTypes from "prop-types";
import ErrorUnexpectedProps from "../../../styles/MameStyled/core/utils/handle-error/ErrorUnexpectedProps";

export default function Appeal({ text, css, ...props }) {
  ErrorUnexpectedProps({ props, component: "Appeal.jsx" });

  const { color } = stylesConfig;

  const cssDefault = { 
    color: color.warning, 
    fontSize: 12,
    fontWeight: 600,
  };

  return (
    <Strong cssXs={css ?? cssDefault}>{text}</Strong>
  );
}

const { string, object } = PropTypes;

Appeal.propTypes = {
  text: string.isRequired,
  css: object,
};

