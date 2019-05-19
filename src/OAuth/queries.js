import gql from 'graphql-tag';

export const CURRENT_USER = gql`
  {
    me {
      _id
      name
    }
  }
`;
