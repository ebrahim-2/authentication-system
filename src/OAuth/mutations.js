import gql from 'graphql-tag';

export const LOGIN_OR_REGISTER_WITH_GOOGLE = gql`
  mutation($data: AuthGoogleInput!) {
    authGoogle(data: $data) {
      user {
        _id
        name
      }
      token
    }
  }
`;

export const LOGIN_OR_REGISTER_WITH_FACEBOOK = gql`
  mutation($data: AuthFacebookInput!) {
    authFacebook(data: $data) {
      token
      user {
        _id
        name
      }
    }
  }
`;
