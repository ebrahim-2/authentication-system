import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Button, Segment, Divider, Header } from 'semantic-ui-react';
import * as Yup from 'yup';
import { useMutation } from 'react-apollo-hooks';

import { CHANGE_PASSWORD } from './mutations';
import Password from 'shared/PasswordField';
import Portal from 'shared/Portal';

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string()
    .min(8, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

const ChangePassword = props => {
  const changePassword = useMutation(CHANGE_PASSWORD);
  const [showPortal, setShowPortal] = useState(false);

  const onSubmit = async (values, actions) => {
    if (values.password !== values.confirmPassword) {
      actions.setSubmitting(false);
      return actions.setFieldError('confirmPassword', 'Password did not match');
    }

    try {
      const { data } = await changePassword({
        variables: {
          password: values.password,
          token: props.match.params.token,
        },
      });
      localStorage.setItem('token', data.changePassword.token);
      props.history.push('/secret');
    } catch (error) {
      setShowPortal(true);
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ password: '', confirmPassword: '' }}
      validationSchema={ResetPasswordSchema}
      onSubmit={onSubmit}
    >
      {props => {
        return (
          <div className="frm">
            {showPortal ? (
              <Portal
                show={showPortal}
                close={() => setShowPortal(false)}
                content="Password reset token is invalid or has expired"
              />
            ) : null}
            <Segment>
              <Form onSubmit={props.handleSubmit} loading={props.isSubmitting}>
                <Divider horizontal>
                  <Header>
                    <em>Reset Password</em>
                  </Header>
                </Divider>
                <Password />
                <Password
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
                <Button type="submit" basic>
                  Submit
                </Button>
              </Form>
            </Segment>
          </div>
        );
      }}
    </Formik>
  );
};

export default ChangePassword;
