import React, { useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Header, Segment, Loader } from 'semantic-ui-react';

import { CURRENT_USER } from './queries';

const Secret = props => {
  useEffect(() => {
    if (!localStorage.getItem('token')) props.history.push('/register');
  }, []);

  const { data, loading } = useQuery(CURRENT_USER);

  if (loading)
    return (
      <Loader
        active={loading}
        inline="centered"
        size="large"
        style={{ marginTop: 200 }}
      />
    );
  return (
    <div>
      <div style={{ maxWidth: 600, margin: '100px auto' }}>
        <Segment>
          <Header textAlign="center">
            Wellcome {data.me.name} this is your secret page :)
          </Header>
        </Segment>
      </div>
    </div>
  );
};

export default Secret;
