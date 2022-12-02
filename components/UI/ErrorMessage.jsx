import React from 'react';
import { Warning } from '@icons/index';

const ErrorMessage = ({ message }) => {
  return (
    <>
      <div>
        <Warning />
      </div>
      <p>{message}</p>
    </>
  );
};

export default ErrorMessage;
