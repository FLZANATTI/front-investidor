import React, { Children } from "react";
import { Button } from "antd";
import ButtonStyleWrapper from "./style";
import { Link } from "react-router-dom";

const ButtonLogin = ({ label, to }) => (
  <ButtonStyleWrapper>
    <Link to={to}>
      <span>{label}</span>
    </Link>
  </ButtonStyleWrapper>
);

export default ButtonLogin;
