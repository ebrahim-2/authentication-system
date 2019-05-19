import React from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';
import { Formik, Field } from 'formik';
import { Link } from 'react-router-dom';

import Email from './EmailField';
import Password from './PasswordField';
import ErrorMessageHandler from './ErrorMessage';
import GoogleAuth from 'OAuth/google';
import FacebookAuth from 'OAuth/facebook';

const Frm = ({
  showUserName,
  validationSchema,
  initialValues,
  onSubmit,
  showForgotPasswordLink = false,
  path = 'Register',
  history,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {props => {
        return (
          <Form onSubmit={props.handleSubmit} loading={props.isSubmitting}>
            {showUserName ? (
              <>
                <ErrorMessageHandler field="name" />
                <Form.Field>
                  <Field type="text" name="name" placeholder="Username" />
                </Form.Field>
              </>
            ) : null}
            <Email />
            <Password />
            {showForgotPasswordLink ? (
              <Link
                to="/forgot-password"
                style={{ float: 'right', paddingTop: 9 }}
              >
                Forgot Password?
              </Link>
            ) : null}
            <Button type="submit" basic>
              Submit
            </Button>
            <Divider horizontal>
              <p>
                <em>OR</em>
              </p>
            </Divider>
            <GoogleAuth path={path} history={history} />
            <FacebookAuth path={path} history={history} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default Frm;
