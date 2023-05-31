import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $username: String!) {
    registrerUser(email: $email, password: $password, username: $username) {
      email
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($file: Upload) {
    createPost(file: $file)
  }
`;

export const UPDATE_PROFILE_INFO = gql`
  mutation updateInfo($id: Int!, $description: String!, $username: String!) {
    updateInfoProfile(id: $id, description: $description, username: $username)
  }
`;
