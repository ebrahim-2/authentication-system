import React from 'react';
import { Header } from 'semantic-ui-react';

const NotFound = () => {
  return (
    <div style={{ marginTop: 150 }}>
      <Header textAlign="center" size="huge">
        404
      </Header>
      <Header
        textAlign="center"
        size="small"
        style={{ marginTop: '-.5rem', color: '#576366' }}
      >
        Page Not Found
      </Header>
    </div>
  );
};

export default NotFound;
