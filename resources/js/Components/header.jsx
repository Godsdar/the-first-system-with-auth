import styled from "styled-components";
import { Navbar, Menu, MenuItem } from "./navbar.js";
import { Brand } from "./brand.js";
import AuthButton from "./AuthButton.jsx";
import { Link } from "@inertiajs/react";
// import darkLogo from "../../images/dark-logo.png";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;

function Header () {
  return (
    <StyledHeader>
      <Brand>
      nhuhene
      </Brand>
      <Navbar>
        <Menu>
          <MenuItem><a href="">Home</a></MenuItem>
          <MenuItem><a href="">Learning</a></MenuItem>
          <MenuItem><a href="">Contacts</a></MenuItem>
          <MenuItem><a href=""></a></MenuItem>
        </Menu>
        <Link href="/login" as="button">Login</Link>
        <Link href="/register" as="button">Sign in</Link>
      </Navbar>
    </StyledHeader>
  )
}

export default Header;