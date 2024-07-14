import { Button, Heading, Text } from "@chakra-ui/react";
import { createUser, getUser } from "@requests/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import styled from "styled-components";

const HomePage = () => {
  const { isPending, data } = useQuery({
    queryKey: ["firstUser"],
    queryFn: () => getUser(1),
  });

  const mutation = useMutation({
    mutationFn: createUser,
  });

  return (
    <Container>
      <Heading>Hello World</Heading>
      <Text>React-Express-GraphQL Fullstack Starter Kit (with examples)</Text>
      <div>
        {isPending ? (
          <div>LOADING</div>
        ) : (
          <div>Name: {data?.getUser?.fullName}</div>
        )}
      </div>
      <Button
        onClick={() => mutation.mutate({ firstName: "Joe", lastName: "Bob" })}
        isLoading={mutation.isPending}
      >
        Create User
      </Button>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 20vh;
`;
