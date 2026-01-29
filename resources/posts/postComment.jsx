import { colorsPallete } from "@/global-styles";
import styled from "styled-components";

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  margin: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ddd;
`;

const Author = styled.h2`
  color: #eee;
`;

const Text = styled.p`
  font: 500 1.5rem sans-serif;
  line-height: 1.5em;
  color: #eee;
`;

const Date = styled.h2`
  color: #ddd;
`;

const StyledComment = styled.div`
  padding: 10px;
  margin-top: 20px;
  border-radius: 12px;
  background-color: ${colorsPallete.lightPurple};
`;

function PostComment () {
  return (
    <StyledComment>
      <AuthorWrapper>
        <Avatar></Avatar>
        <Author>Doctor Smith</Author>
      </AuthorWrapper>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod doloremque saepe sunt voluptatem at vel. Minus laborum fugiat minima? Ab, sunt cum enim debitis dolorum beatae ducimus! Quibusdam, dolor.</Text>
      <Date>19/09/2004</Date>
     </StyledComment>
  )
}

export default PostComment;