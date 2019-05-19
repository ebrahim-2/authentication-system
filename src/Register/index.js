import React, { useEffect } from 'react';
import { useMutation } from 'react-apollo-hooks';
import * as Yup from 'yup';
import { Segment, Divider, Header } from 'semantic-ui-react';

import Form from 'shared/Form';
import { REGISTER } from './mutations';
import { CURRENT_USER } from './queries';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

const Register = props => {
  const addNewUser = useMutation(REGISTER);

  useEffect(() => {
    if (localStorage.getItem('token')) props.history.push('/secret');
  }, []);

  const onSubmit = async (values, actions) => {
    try {
      const { data } = await addNewUser({
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
      localStorage.setItem('token', data.register.token);
      props.history.push('/secret');
    } catch (error) {
      actions.setFieldError('email', 'Email is in use please try another one');
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="frm">
      <Segment stacked>
        <Divider horizontal>
          <Header>
            <em>Register</em>
          </Header>
        </Divider>
        <Form
          showUserName={true}
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={RegisterSchema}
          onSubmit={onSubmit}
          {...props}
        />
      </Segment>
    </div>
  );
};

export default Register;
