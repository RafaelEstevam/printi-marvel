const constant = 4;

export const theme: any = {
  colors: {
    primary: "#ED1D24",
    secondary: "#fc0",
    white: "#fff",
    dark: "#333",
    darkgray: "#00000020",
    gray: "#00000015",
    lightGray: "#00000010",
    light: "#00000005",
    backgroundLight: "#f1f1f1",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "1.5em",
    large: "2em",
    largest: "2.5em",
  },
  screens: {
    md: "1024px",
    lg: "1366px",
    sm: "767px",
    xs: "480px",
  },
  margin: {
    X1: constant + "px", //4px
    X2: constant * 2 + "px", //8px
    X3: constant * 3 + "px", //12px
    X4: constant * 4 + "px", //16px
    X5: constant * 5 + "px", //20px
    X6: constant * 6 + "px", //24px
  },
  border: {
    radius: constant,
    radiusX4: constant * 4 + "px", //16px
  },
};
