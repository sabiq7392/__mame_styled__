import Harbor from "../src/components/organisms/Harbor";
import { NextPage } from "next";
import { ReactElement } from "react";
import Preview from "../src/components/organisms/Preview";
import { Figure, Img, Div,Blockquote, Figcaption, H1, Small } from "../styles/MameStyled/core/HtmlTag";
import STYLES_CONFIG from "../styles.config";
import CodePreview from "../src/components/organisms/CodePreview";

const { color } = STYLES_CONFIG;

const HtmlTag: NextPage = (): ReactElement => {
  return (
    <Harbor title="HTML Tag" appeal="The HTML tag is superset!"
      description="
        you can easily use media screen , pseudo, internal css with inline 
        style. Provided you have to call the superset html 
        tag starting with uppercase
      "
    >
      <Preview title="Result Preview" member="HTML Tag" noLandfield>
        <Figure 
          cssLg={{ flexDirection: "row", width: "75%" }}
          cssXs={{ display: "flex", flexDirection: "column", background: color.base.secondary.default, width: "100%",  borderRadius: 8, color: "#f5f5f5", transition: "200ms" }}
          hover={{ background: color.base.secondary.hover }}
          // hover={{ border: "1px solid red" }}
        >
          <Img src="/images/photos/sabiq-mini.jpg" alt="Sabiq Muhammad" 
            cssXs={{ width: 125, height: 125, objectFit: "cover", objectPosition: "top", borderRadius: "50%", margin: "20px auto 0 auto" }} 
            cssLg={{ width: 200, height: "100%", borderRadius: "8px 0px 0px 8px", padding: 0, margin: 0 }}
          />
          <Div cssXs={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20, padding: 20 }}>
            <Blockquote cssXs={{ lineHeight: "175%", color: "rgba(255, 255, 255, 0.8)" }} fontSize={{ xs: 10, md: 12, lg: 14}}>
              {"\""}This a styled component that makes it easy to develop user interfaces, 
              where you can write internal css in inline css style. hopefully if you use this you can 
              easily create components without having to create css files again{"\""}
            </Blockquote>
            <Figcaption cssXs={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <H1 cssXs={{ color: "#90E0EF", fontWeight: 500 }} fontSize={{ xs: 14, md: 16, lg: 18 }}>Sabiq Muhammad</H1>
              <Small cssXs={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: 600, letterSpacing: 0.4 }} fontSize={{ xs: 10, md: 12, lg: 14 }}>Fullstack Developer, Jakarta</Small>
            </Figcaption>
          </Div>
        </Figure>
      </Preview>
      
      <CodePreview title="Result Code Preview" member="HTML Tag">
        {`
          import { Blockquote, Div, Figcaption, Figure, H1, Header, Img, P, Small } from "../../styles/MameStyled/core/HtmlTag.ts";

          <Figure 
            cssLg={{ flexDirection: "row", width: "75%" }}
            cssXs={{ display: "flex", flexDirection: "column", background: "#1D2D50", width: "100%",  borderRadius: 8, color: "#f5f5f5", transition: "200ms" }}
            hover={{ background: "#133B5C" }}
          >
            <Img src="/images/photos/sabiq-mini.jpg" alt="Sabiq Muhammad" 
              cssXs={{ width: 125, height: 125, objectFit: "cover", objectPosition: "top", borderRadius: "50%", margin: "20px auto 0 auto" }} 
              cssLg={{ width: 200, height: "100%", borderRadius: "8px 0px 0px 8px", padding: 0, margin: 0 }}
            />
            <Div cssXs={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20, padding: 20 }}>
              <Blockquote cssXs={{ lineHeight: "175%", color: "rgba(255, 255, 255, 0.8)" }} fontSize={{ xs: 10, md: 12, lg: 14}}>
                "This a styled component that makes it easy to develop user interfaces, 
                where you can write internal css in inline css style. hopefully if you use this you can 
                easily create components without having to create css files again"
              </Blockquote>
              <Figcaption cssXs={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <H1 cssXs={{ color: "#90E0EF", fontWeight: 500 }} fontSize={{ xs: 14, md: 16, lg: 18 }}>Sabiq Muhammad</H1>
                <Small cssXs={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: 600, letterSpacing: 0.4 }} fontSize={{ xs: 10, md: 12, lg: 14 }}>Fullstack Developer, Jakarta</Small>
              </Figcaption>
            </Div>
          </Figure>
        `}
      </CodePreview>
    </Harbor>
  );
};

export default HtmlTag;
