import React from 'react';
import { ErrorMessage } from 'formik';
import { Label } from 'semantic-ui-react';

const ErrorMessageHandler = ({ field }) => {
  return (
    <ErrorMessage name={field}>
      {msg => (
        <Label basic color="red" pointing="below" size="small">
          {msg}
        </Label>
      )}
    </ErrorMessage>
  );
};

export default ErrorMessageHandler;
