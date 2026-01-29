import React from "react";
import styled from "styled-components";

const StyledSidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  list-style: none;
`;

const StyledSidebarItem = styled.li`
  font-size: 18px;
`;

function SidebarList ({ data }) {
  return (
    <StyledSidebarList>
      <StyledSidebarItem>Main</StyledSidebarItem>
      <StyledSidebarItem>News</StyledSidebarItem>
      <StyledSidebarItem>About Us</StyledSidebarItem>
      <StyledSidebarItem>Contacts</StyledSidebarItem>
    </StyledSidebarList>
  )
}

export default SidebarList;