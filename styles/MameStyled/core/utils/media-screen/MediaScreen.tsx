/* eslint-disable indent */
import { useState, useEffect } from "react";

/**
 * @use
 * MediaScreen("<=", "lg") ? active : false;
 */

type Option = ">=" | ">" | "===" | "<=" | "<";
type ScreenWidth = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | number

export default function MediaScreen(_option: Option, _screenWidth: ScreenWidth) {
  const [screenWidth, setScreenWidth] = useState(true);

  useEffect(() => {
    let width: number;
    const observer = new ResizeObserver((entries) => {
      const getScreenWidth = entries[0].contentRect.width;

      switch(_screenWidth) {
        case "xxl": { 
          width = 1400; 
          break; 
        }
        case "xl": { 
          width = 1200; 
          break; 
        }
        case "lg": { 
          width = 992; 
          break; 
        }
        case "md": { 
          width = 768; 
          break; 
        }
        case "sm": {
          width = 576; 
          break; 
        }
        case "xs": { 
          width = 0; 
          break; 
        }
        default: {
          if (typeof _screenWidth === "number") { 
            width = _screenWidth; 
            break; 
          }
          else { 
            console.error("_screenWidth is invalid value. try 'xxl' 'xl' 'lg' 'md' 'sm' 'xs' or number"); 
            break; 
          }
        }
      }

      switch(_option) {
        case ">=": { 
          setScreenWidth(getScreenWidth >= width); 
          break; 
        }
        case ">": { 
          setScreenWidth(getScreenWidth > width); 
          break; 
        }
        case "===": { 
          setScreenWidth(getScreenWidth === width); 
          break; 
        }
        case "<=": { 
          setScreenWidth((getScreenWidth <= width)); 
          break; 
        }
        case "<": { 
          setScreenWidth(getScreenWidth < width); 
          break; 
        }
        default: { 
          console.error("_option is invalid value. try '<=' '<' '===' '>' '>='"); 
          break; 
        }
      }
    });

    observer.observe(document.querySelector("body") as Element);
  }, [_option, _screenWidth]);
  
  return screenWidth;
}
