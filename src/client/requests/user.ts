import { graphql } from "../gql";

export const getUser = graphql(/* GraphQL */ `
  query getUserQuery($id: Int!) {
    getUser(id: $id) {
      id
      fullName
    }
  }
`);

export const createUser = graphql(/* GraphQL */ `
  mutation createUserMutation($firstName: String!, $lastName: String!) {
    postUser(firstName: $firstName, lastName: $lastName) {
      id
    }
  }
`);
