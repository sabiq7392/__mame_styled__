import { oneOfType, node, string } from "prop-types";
import { A } from "../../HtmlTag.styled";

export default function NavLink({ title, href }) {
  return (
    <A 
      href={href || "#"}
      cssXs={{ 
        color: "white",
        padding: "0.8rem",
        fontSize: "1.2rem",
        minHeight: 44,
        minWidth: 44,
      }} 
      hover={{ filter: "brightness(70%)" }}
    >
      {title}
    </A>
  );
}

NavLink.propTypes = {
  title: oneOfType([string, node]).isRequired,
  href: string.isRequired,
};
