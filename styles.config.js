const stylesConfig = {
  color: {
    primary: '#00B4D8',
    secondary: '#90E0EF',
    white: '#f5f5f5',
    light: 'rgba(255, 255, 255, 0.6)',
    dark: '#1A1A40',
    muted: 'rgba(255, 255, 255, 0.1)',
    warning: '#C6DE41',
    danger: '#A0204C',
    base: {
      primary: '#001E3C',
      secondary: {
        default: '#1D2D50',
        hover: '#133B5C',
      },
      
    },
  },
  spacing: {
    xs: 5, sm: 15, md: 30, lg: 45, xl: 60, xxl: 90, sxxl: 120,
  },
  shadow: {
    primary: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  },
  radius: {
    xs: 4, sm: 8, md: 12,
  },
  font: {
    lineHeight: '175%',
    family: '',
    size: { 
      default: { xs: 10, },
      small: {},
      medium: {},
      large: {},
      xlarge: {},
      xxlarge: {},
    },
  },
  timing: {
    fast: '200ms',
  },
};

export default stylesConfig;
