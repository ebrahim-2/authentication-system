import React from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from 'formik';
import ErrorMessageHandler from './ErrorMessage';

const Email = () => {
  return (
    <>
      <ErrorMessageHandler field="email" />
      <Form.Field>
        <Field type="email" name="email" placeholder="Email" />
      </Form.Field>
    </>
  );
};

export default Email;
