import gql from 'graphql-tag';

export const FORGOT_PASSWORD = gql`
  mutation($email: String!) {
    forgotPassword(email: $email)
  }
`;
