import STYLES_CONFIG from "../../../styles.config";

const originalRulesScreen = { 
  xs: "min-width: 1px", 
  sm: "min-width: 576px", 
  md: "min-width: 768px", 
  lg: "min-width: 992px", 
  xl: "min-width: 1200px", 
  xxl: "min-width: 1400px", 
};

const screen = STYLES_CONFIG.screen || originalRulesScreen;

export default screen;
