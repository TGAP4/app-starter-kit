import { graphql } from "../gql";
import gqlClient from "./gqlClient";

export const getUser = async (id: number) =>
  await gqlClient.request({
    document: graphql(/* GraphQL */ `
      query getUserQuery($id: Int!) {
        getUser(id: $id) {
          id
          fullName
        }
      }
    `),
    variables: { id },
  });

export const createUser = async ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) =>
  await gqlClient.request({
    document: graphql(/* GraphQL */ `
      mutation createUserMutation($firstName: String!, $lastName: String!) {
        postUser(firstName: $firstName, lastName: $lastName) {
          id
        }
      }
    `),
    variables: { firstName, lastName },
  });
