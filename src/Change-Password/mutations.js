import gql from 'graphql-tag';

export const CHANGE_PASSWORD = gql`
  mutation($password: String!, $token: String!) {
    changePassword(password: $password, token: $token) {
      user {
        _id
        name
      }
      token
    }
  }
`;
