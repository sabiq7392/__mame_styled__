import { Header, H1, A } from "../../../styles/MameStyled/core/HtmlTag";
import STYLES_CONFIG from "../../../styles.config";
import Description from "../atoms/Description";
import { CSSProperties } from "styled-components";
import { ReactElement } from "react";

export default function Welcome(): ReactElement {
  const { color, spacing, radius, timing } = STYLES_CONFIG;
  
  const cssHeader: CSSProperties = { 
    padding: `${spacing.sxxl}px ${spacing.sm}px`, 
    margin: "auto", 
    display: "grid", 
    gap: spacing.md, 
    textAlign: "center", 
    borderBottom: `1px solid ${color.muted}`, 
    marginBottom: spacing.sxxl, 
  };

  return (
    <Header
      cssXs={cssHeader}
      cssSm={{ padding: `${spacing.sxxl}px ${spacing.md}px` }}
      cssLg={{ padding: `${spacing.sxxl}px ${spacing.sxxl}px` }}
    >
      <H1 fontSize={{ xs: "2rem", md: "3rem",  lg: "4rem" }} cssXs={{ margin: 0, lineHeight: 1.15, color: color.white }}>
        Welcome to <A href="#" cssXs={{ color: color.primary }}>Mame Styled</A>
      </H1>
      <Description 
        text="
          JavaScript Library where is focusing to build UI, 
          You can write CSS like pseudo selector, 
          Media Queries, etc in inline css style.
          Also there are components
        "
        fontSize={{ xs: 12, md: 14, lg: 16 }}
      />
      <A 
        href="/getting-started" 
        cssXs={{ backgroundColor: color.primary, padding: 5, color: "white", borderRadius: radius.sm, maxWidth: 500, width: "100%", placeSelf: "center", transition: timing.fast }}
        cssLg={{ padding: 10 }}
        hover={{ filter: "brightness(80%)" }}
        fontSize={{ xs: 12, md: 14, lg: 16 }}
      >
        Getting Started
      </A>
    </Header>
  );
}
