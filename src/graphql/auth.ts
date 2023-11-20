import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email:$email, password:$password){
      code
      message
      data
    }
  }
`;