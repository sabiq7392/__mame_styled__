import { A, Img } from "../../HtmlTag.styled";

export default function NavbarBrand() {
  return (
    <A cssXs={{ display: "grid", padding: "0.5rem", placeItems: "center" }}>
      <Img 
        src="/images/logo/mame.svg" 
        alt="mame" 
      />
    </A>
  );
}
