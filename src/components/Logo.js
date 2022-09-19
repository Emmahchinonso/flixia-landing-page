import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoImage src="/flixia-logo.png" alt="flixia logo" />;
};

const LogoImage = styled.img`
  width: 140px;
  height: 40px;
`;

export default Logo;
