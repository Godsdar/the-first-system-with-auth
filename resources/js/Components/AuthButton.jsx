import styled from "styled-components";
import { colorsPallete } from "./global-styles";

const StyledAuthButton = styled.button`
  border: 1px solid purple;
  background-color: ${colorsPallete.purple};
`;


function AuthButton ({ Text }) {
  return (
    <StyledAuthButton onClick={() => alert(Text)}>{Text}</StyledAuthButton>
  )
}

export default AuthButton;