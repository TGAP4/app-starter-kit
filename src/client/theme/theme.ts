import { extendBaseTheme } from "@chakra-ui/react";
import Button from "./components/button";
import Heading from "./components/heading";
import Text from "./components/text";
import STYLES from "./styles";

const theme = extendBaseTheme({
  ...STYLES,
  components: {
    Button,
    Heading,
    Text,
  },
});

export default theme;
