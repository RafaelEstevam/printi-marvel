const constant = 4;

export const theme: any = {
  colors: {
    primary: "#c00",
    secondary: "#fc0",
    white: "#fff",
    dark: "#333",
    gray: "#ccc",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  screens: {
    md: "1024px",
    lg: "1366px",
    sm: "767px",
    xs: "480px",
  },
  margin: {
    X1: constant, //4px
    X2: constant * 2, //8px
    X3: constant * 3, //12px
    X4: constant * 4, //16px
    X5: constant * 5, //20px
    X6: constant * 6, //24px
  },
  border: {
    radius: constant,
  },
};
