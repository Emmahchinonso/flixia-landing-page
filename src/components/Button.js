import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <ButtonBase>{children}</ButtonBase>;
};

const ButtonBase = styled.button`
  font-size: 16px;
  padding: 16px 24px;
  font-size: 20px;
  border: none;
  background: #fabb46;
  color: #13203c;
  border-radius: 5px;
  font-weight: 500;
`;

export default Button;
