import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  justify-self: flex-end;

  &:last-child {
    margin-right: 0;
  }
`;

export const MenuItem = styled.div`
  margin-right: 24px;
`;