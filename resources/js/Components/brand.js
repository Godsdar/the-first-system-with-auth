import styled from "styled-components";

export const Brand = styled.div`
  display: flex;
  border-radius: 50%;
  align-self: center;
  text-transform: uppercase;
  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;