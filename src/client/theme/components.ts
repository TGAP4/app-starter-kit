const COMPONENTS = {
  components: {
    Button: {
      defaultProps: {
        colorScheme: "blue",
      },
    },
    Text: {
      baseStyle: {
        lineHeight: "1.7",
      },
      sizes: {
        sm: {
          fontSize: "sm",
        },
        md: {
          fontSize: "md",
        },
        lg: {
          fontSize: "lg",
        },
      },
      defaultProps: {
        size: "md",
      },
    },
  },
};

export default COMPONENTS;
