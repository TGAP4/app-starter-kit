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
      <Text size="lg">Sorry, an unexpected error has occurred.</Text>
      {import.meta.env.VITE_NODE_ENV === "development" && (
        <ErrorMessage>
          <i>
            {isRouteErrorResponse(error)
              ? error.data.message || error.statusText
              : String(error)}
          </i>
        </ErrorMessage>
      )}
      <Button onClick={() => navigate(-1)} mt="10px">
        GO BACK
      </Button>
    </Container>
  );
};

export default ErrorPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20vh 20px 0;
`;
const ErrorMessage = styled.div`
  max-width: 600px;
  text-align: center;
`;
