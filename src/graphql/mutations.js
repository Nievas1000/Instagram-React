import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $username: String!) {
    registrerUser(email: $email, password: $password, username: $username) {
      email
    }
  }
`;

export const LOGIN_USER = gql`
  query login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      email
      username
      image
      publications
      followed
      followers
      description
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query getUser($email: String!) {
    getUserByEmail(email: $email) {
      username
      email
      image
      publications
      followed
      followers
      description
      id
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($file: Upload) {
    createPost(file: $file)
  }
`;

export const GET_COMENTS_BY_POST = gql`
  query getComents($id: Int) {
    getComentsByPost(id: $id) {
      id
      id_post
      coment
      date
    }
  }
`;
