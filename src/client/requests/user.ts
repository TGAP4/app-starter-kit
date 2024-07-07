import { graphql } from '../gql'

export  const getUser = graphql(/* GraphQL */ `
  query userQuery($id: Int!) {
    user(id: $id) {
      id
      fullName
    }}`)