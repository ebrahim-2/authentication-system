import React from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    props.history.push('/register');
  };

  return (
    <Segment>
      <Menu secondary>
        <Menu.Menu position="right">
          {!localStorage.getItem('token') ? (
            <>
              <Menu.Item as={Link} to="/login">
                Login
              </Menu.Item>
              <Menu.Item as={Link} to="/register">
                Register
              </Menu.Item>
            </>
          ) : (
            <>
              <Button color="red" inverted onClick={handleLogoutClick}>
                Logout
              </Button>
            </>
          )}
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Navbar;
