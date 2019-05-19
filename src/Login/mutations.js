import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation($data: LoginInputType!) {
    login(data: $data) {
      user {
        _id
        name
      }
      token
    }
  }
`;
