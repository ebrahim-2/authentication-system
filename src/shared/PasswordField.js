import React, { useState } from 'react';
import { Form, Input, Icon } from 'semantic-ui-react';
import { Field } from 'formik';
import ErrorMessageHandler from './ErrorMessage';

const Password = ({ placeholder, name }) => {
  const [revealPass, setRevealPass] = useState(false);

  const handleRevealPassword = e => setRevealPass(!revealPass);
  return (
    <>
      <ErrorMessageHandler field={name ? name : 'password'} />
      <Form.Field>
        <Field type="password" name={name ? name : 'password'}>
          {({ field }) => {
            return (
              <Input
                {...field}
                type={revealPass ? 'text' : 'password'}
                icon={
                  <Icon
                    name={revealPass ? 'eye' : 'eye slash'}
                    circular
                    link
                    onClick={handleRevealPassword}
                  />
                }
                placeholder={placeholder ? placeholder : 'Password'}
              />
            );
          }}
        </Field>
      </Form.Field>
    </>
  );
};

export default Password;
