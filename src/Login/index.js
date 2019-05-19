import React, { useEffect } from 'react';
import { useMutation } from 'react-apollo-hooks';
import * as Yup from 'yup';
import { Segment, Divider, Header } from 'semantic-ui-react';

import Form from 'shared/Form';
import { LOGIN } from './mutations';
import { CURRENT_USER } from './queries';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

const Login = props => {
  const loginUser = useMutation(LOGIN);

  useEffect(() => {
    if (localStorage.getItem('token')) props.history.push('/secret');
  }, []);

  const onSubmit = async (values, actions) => {
    try {
      const { data } = await loginUser({
        variables: { data: values },
        update: (cache, { data }) => {
          cache.writeQuery({
            query: CURRENT_USER,
            data: {
              me: data.register.user,
            },
          });
        },
      });
      localStorage.setItem('token', data.login.token);
      props.history.push('/secret');
    } catch (error) {
      const msg = error.message.split(':')[1];
      const isEmailError = msg.toLowerCase().includes('email');
      actions.setFieldError(isEmailError ? 'email' : 'password', msg);
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="frm">
      <Segment stacked>
        <Divider horizontal>
          <Header>
            <em>Login</em>
          </Header>
        </Divider>
        <Form
          showUserName={false}
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
          showForgotPasswordLink={true}
          {...props}
          path="Login"
        />
      </Segment>
    </div>
  );
};

export default Login;
