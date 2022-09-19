import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import Logo from "./Logo";

const Nav = () => {
  return (
    <NavWrapper>
      <Container>
        <Logo />
      </Container>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  padding: 40px 0;
`;

export default Nav;
