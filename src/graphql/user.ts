import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers {
    getAllUserInfo {
      id
      email
      realName
      displayName
      mobile
    }
  }
`;

export const FIND_USER = gql`
  query getUserById($id: String!) {
    getUserById(id: $id) {
      id
      email
      realName
      displayName
      mobile
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input)
  }
`;
