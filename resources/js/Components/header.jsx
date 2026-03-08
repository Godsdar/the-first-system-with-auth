import styled from "styled-components";
import { Navbar, Menu, MenuItem } from "./navbar.js";
import { Brand } from "./brand.js";
import AuthButton from "./AuthButton.jsx";
import { Link } from "@inertiajs/react";
// import darkLogo from "../../images/dark-logo.png";

export const Wrapper = styled.div`
  display: flex;
  padding: 24px 0;
`

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 12px 0;
  /* margin: autoq; */
`;

export const StyledLinks = styled.div`
  display: flex;
  column-gap: 12px;
`;

function Header () {
  return (
    <StyledHeader>
      <Brand>
      Psycho Hub
      </Brand>
      <Navbar>
        <Menu>
          <MenuItem><a href="">Home</a></MenuItem>
          <MenuItem><a href="">Learning</a></MenuItem>
          <MenuItem><a href="">Contacts</a></MenuItem>
          <MenuItem><a href=""></a></MenuItem>
        </Menu>
        <StyledLinks>
          <Link href="/login" as="button">Login</Link>
          <Link href="/register" as="button">Sign in</Link>
        </StyledLinks>
      </Navbar>
    </StyledHeader>
  )
}

export default Header;