import React from 'react';
import { Portal, Segment, Icon } from 'semantic-ui-react';

const PortalCMP = ({ content, show, close }) => {
  return (
    <Portal onClose={close} open={show}>
      <Segment
        raised
        style={{
          left: '80%',
          position: 'fixed',
          top: '10%',
          marginRight: '20px',
          zIndex: 1000,
        }}
      >
        <Icon
          name="close"
          circular
          link
          style={{ float: 'right' }}
          onClick={close}
        />
        <p style={{ color: '#576366' }}>{content}</p>
      </Segment>
    </Portal>
  );
};

export default PortalCMP;
