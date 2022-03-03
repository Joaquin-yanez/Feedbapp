import React from 'react';

import { Children } from '../types';

interface ButtonProps extends Children {
  version?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  isDisabled: boolean;
}

const Button = ({ children, version = 'primary', type, isDisabled }: ButtonProps) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
