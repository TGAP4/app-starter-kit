import { Link } from "react-router-dom";
import { Heading, Button, Text, Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box m="15vh auto 0" w="fit-content">
      <Heading>Hello World</Heading>
      <Text marginTop="40px">My awesome text</Text>
      <Link to="/users/1">
        <Button variant="solid" marginTop="40px">
          Link To User #1&apos;s Profile
        </Button>
      </Link>
    </Box>
  );
};

export default HomePage;
