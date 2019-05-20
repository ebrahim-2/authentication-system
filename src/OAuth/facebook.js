import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useMutation } from "react-apollo-hooks";

import { LOGIN_OR_REGISTER_WITH_FACEBOOK } from "./mutations";
import { CURRENT_USER } from "./queries";
import { Icon } from "semantic-ui-react";

const FacebookAuth = ({ path, history, setIsLoading }) => {
  const loginOrRegisterWithFacebook = useMutation(
    LOGIN_OR_REGISTER_WITH_FACEBOOK
  );
  const facebookResponse = async ({ name, userID }) => {
    try {
      const { data } = await loginOrRegisterWithFacebook({
        variables: {
          data: {
            name,
            facebookId: userID
          }
        },
        update: (cache, { data }) => {
          cache.writeQuery({
            query: CURRENT_USER,
            data: {
              me: data.authFacebook.user
            }
          });
        }
      });
      localStorage.setItem("token", data.authFacebook.token);
      history.push("/secret");
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
      autoLoad={false}
      fields="name,email,picture"
      callback={facebookResponse}
      render={renderProps => (
        <button
          onClick={() => {
            setIsLoading(true);
            renderProps.onClick();
          }}
          disabled={renderProps.disabled}
          className="ui facebook right floated labeled icon button"
          type="button"
        >
          <Icon name="facebook f" /> {path} With Facebook
        </button>
      )}
    />
  );
};

export default FacebookAuth;
