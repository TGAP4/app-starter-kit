// See https://v2.chakra-ui.com/docs/styled-system/theme for defaults

const STYLES = {
  colors: {
    gray: {
      100: "#EDF2F7", // Base
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
    },
    blue: {
      500: "#3182CE", // Base
    },
  },
  fontSizes: {
    sm: "12px",
    md: "14px",
    lg: "16px",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  styles: {
    global: {
      body: {
        fontFamily: "system-ui, sans-serif",
        color: "gray.800",
      },
    },
  },
};

export default STYLES;
