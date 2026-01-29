import styled from 'styled-components';
import SidebarList from './sidebar-list';
import { colorsPallete } from './global-styles';

export const StyledSidebar = styled.div`
  padding: 20px;
  display: flex;
  top: 40%;
  left: 12px;
  position: fixed;
  background-color: ${colorsPallete.purple};
  border-radius: 8px;
`;

function Sidebar () {
  return <StyledSidebar>
    <SidebarList></SidebarList>
  </StyledSidebar>;
}

export default Sidebar;