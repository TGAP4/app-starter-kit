import { useMutation, useQuery } from "@tanstack/react-query";
import gqlClient from "@requests/gqlClient";
import { getUser, createUser } from "@requests/user";
import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Profile = () => {
  const { userId } = useParams();

  const { isPending, data } = useQuery({
    queryKey: [`profilePageUser-${userId}`],
    queryFn: async () =>
      gqlClient.request({
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
    }) =>
      gqlClient.request({
        document: createUser,
        variables: { firstName, lastName },
      }),
  });
  console.log(data, isPending);

  return (
    <>
      {(() => {
        if (isPending) return <div>LOADING</div>;
        if (!data) {
          return (
            <Button
              onClick={() =>
                mutation.mutate({ firstName: "Joe", lastName: "Bob" })
              }
            >
              Create User
            </Button>
          );
        }
        return <div>Name: {data.getUser?.fullName}</div>;
      })()}
    </>
  );
};

export default Profile;
