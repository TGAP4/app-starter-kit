import { useMutation, useQuery } from "@tanstack/react-query";
import gqlClient from "@requests/gqlClient";
import { getUser, createUser } from "@requests/user";
import { useParams } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const Profile = () => {
  const { userId } = useParams();

  const { isPending, data } = useQuery({
    queryKey: [`profilePageUser-${userId}`],
    queryFn: async () =>
      await gqlClient.request({
        document: getUser,
        variables: { id: Number(userId) },
      }),
  });

  const mutation = useMutation({
    mutationFn: async ({
      firstName,
      lastName,
    }: {
      firstName: string;
      lastName: string;
    }) => {
      console.log(gqlClient, import.meta.env.VITE_GRAPHQL_ENDPOINT);

      return await gqlClient.request({
        document: createUser,
        variables: { firstName, lastName },
      });
    },
  });

  const {
    status,
    data: testData,
    refetch,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("/api/user");
      const json = await response.json();
      console.log(json);
      return json;
    },
    enabled: false,
  });
  console.log(status, testData);

  return (
    <Box w="fit-content" m="25vh auto 0">
      {(() => {
        if (isPending) return <div>LOADING</div>;
        if (!data?.getUser) {
          return (
            <Button
              onClick={() =>
                mutation.mutate({ firstName: "Joe", lastName: "Bob" })
              }
              isLoading={mutation.isPending}
            >
              Create User
            </Button>
          );
        }
        return <div>Name: {data.getUser?.fullName}</div>;
      })()}
      <Button onClick={() => refetch()}>API</Button>
    </Box>
  );
};

export default Profile;
