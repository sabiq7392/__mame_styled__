// import React from "react";
// import STYLES_CONFIG from "../../../styles.config";
// import { H1 } from "../../../styles/MameStyled/core/HtmlTag.ts";
// import ErrorUnexpectedProps from "../../utils/ErrorUnexpectedProps";

// export default function Heading({ as, member, title, size, weight, ...props }) {
//   ErrorUnexpectedProps({ props, component: "Heading.jsx" });
  
//   const { color, spacing } = STYLES_CONFIG;

//   const styleMember = { 
//     color: color.light, 
//     fontSize: 10, 
//     marginRight: spacing.xs, 
//     fontWeight: "normal",
//   };

//   return React.createElement(
//     as || H1, 
//     { css: { color: color.white, fontWeight: weight }, size }, 
//     member ? [React.createElement("span", { style: styleMember, key: 1 }, member), title] : title,
//   );
// }
