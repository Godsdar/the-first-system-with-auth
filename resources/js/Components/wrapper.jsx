import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: auto;
  padding: ${(props) => props.$padding || "20px"};
  width: 100%;
  height: 100%;
  text-align: center;
  color: 'black';
  background-color: ${(props) => (props.$color ? props.$color : 'red')};
`;

function Wrapper ({ padding, color }) {
  return (
    <StyledWrapper $padding={padding} $color={color}></StyledWrapper>
  )
}
 
export default Wrapper;