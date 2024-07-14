import { extendBaseTheme } from "@chakra-ui/react";
import Button from "./components/button";
import Heading from "./components/heading";
import Text from "./components/text";
import styles from "./styles";

const theme = extendBaseTheme({
  ...styles,
  components: {
    Button,
    Heading,
    Text,
  },
});

export default theme;
