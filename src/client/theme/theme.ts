import { extendTheme } from "@chakra-ui/react";
import COMPONENTS from "./components";
import STYLES from "./styles";

const theme = extendTheme({
  ...STYLES,
  ...COMPONENTS,
});

export default theme;
