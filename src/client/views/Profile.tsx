import { useQuery } from "@tanstack/react-query";
import gqlClient from "@requests/gqlClient";
import { getUser } from "@requests/user";
import { useParams } from "react-router-dom";

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

  return (
    <>
      {isPending ? <div>LOADING</div> : <div>Name: {data?.user.fullName}</div>}
    </>
  );
};

export default Profile;
