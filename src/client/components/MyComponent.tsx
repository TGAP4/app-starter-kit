import {useQuery} from '@tanstack/react-query'
import gqlClient from '@requests/gqlClient';
import {getUser} from '@requests/user'

const MyComponent = () => {
  const { isPending, data } = useQuery({
      queryKey: ['firstUser'],
      queryFn: async () => gqlClient.request({
        document: getUser,
        variables: {id: 1 }
      })})

  return isPending ?  
  <div>LOADING</div>
    :
    <div>{data?.user.fullName}</div>
  ;
};

export default MyComponent;