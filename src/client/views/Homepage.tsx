import { Link } from "react-router-dom";
import "../App.css";
import { Heading, Button, Text } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div>
      <Heading marginTop="50%">Hello World</Heading>
      <Text marginTop="40px">My awesome text</Text>
      <Link to="/users/1">
        <Button variant="solid" marginTop="40px">
          Link To User #1&apos;s Profile
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
