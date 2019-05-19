import React, { useState } from 'react';
import { Form, Button, Segment, Header } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-apollo-hooks';

import { FORGOT_PASSWORD } from './mutations';
import Email from 'shared/EmailField';
import Portal from 'shared/Portal';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const ForgotPassword = props => {
  const forgotPassword = useMutation(FORGOT_PASSWORD);
  const [showPortal, setShowPortal] = useState(false);

  const onSubmit = async (values, actions) => {
    try {
      await forgotPassword({
        variables: { email: values.email },
      });
      actions.setSubmitting(false);
      setShowPortal(true);
    } catch (error) {
      actions.setFieldError(
        'email',
        'No account with this email address exists'
      );
      actions.setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={ForgotPasswordSchema}
      onSubmit={onSubmit}
    >
      {props => {
        return (
          <div className="frm">
            {showPortal ? (
              <Portal
                show={showPortal}
                close={() => setShowPortal(false)}
                content="Alright! Instructions to reset your password
               have been emailed to you. Please check your email."
              />
            ) : null}
            <Segment stacked>
              <div style={{ padding: '.6em' }}>
                <Header>Reset Password</Header>
                <p style={{ color: '#576366' }}>
                  Enter your email address and we’ll send you an email with
                  instructions to reset your password.
                </p>
                <Form
                  onSubmit={props.handleSubmit}
                  loading={props.isSubmitting}
                >
                  <Email />
                  <Button type="submit" basic>
                    Submit
                  </Button>
                </Form>
              </div>
            </Segment>
          </div>
        );
      }}
    </Formik>
  );
};

export default ForgotPassword;
