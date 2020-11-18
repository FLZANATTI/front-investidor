import React from 'react';
import { Button } from 'antd';
import ButtonStyleWrapper from './Button.Style';

const AntButton = ButtonStyleWrapper(({
  block,
  className,
  ...rest
}) => <Button {...rest} className={`nw-button ${className}`} />);

export default AntButton;
