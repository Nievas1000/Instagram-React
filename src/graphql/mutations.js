import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $username: String!) {
    registrerUser(email: $email, password: $password, username: $username)
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      email
      username
    }
  }
`;
