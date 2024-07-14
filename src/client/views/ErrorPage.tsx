import { Button, Heading, Text } from "@chakra-ui/react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  const navigate = useNavigate();

  const error = useRouteError();

  console.error(error);

  return (
    <Container>
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <i>
          {isRouteErrorResponse(error)
            ? error.data.message || error.statusText
            : "Unknown error message"}
        </i>
      </Text>
      <Button onClick={() => navigate(-1)}>GO BACK</Button>
    </Container>
  );
};

export default ErrorPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 20vh;
`;
