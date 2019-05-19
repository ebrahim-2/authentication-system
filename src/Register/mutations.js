import gql from 'graphql-tag';

export const REGISTER = gql`
  mutation($data: RegisterInputType!) {
    register(data: $data) {
      user {
        name
        _id
      }
      token
    }
  }
`;
