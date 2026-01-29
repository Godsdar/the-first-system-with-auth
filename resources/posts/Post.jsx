import { useState } from "react";
import styled from "styled-components";
import PostComment from "./postComment";
import { colorsPallete } from "@/global-styles";

const PostTitle = styled.h2`
  font: 700 2rem Arial;
  color: #eee;
`;

const PostContent = styled.h2`
  color: #eee;
`;

const PostReaction = styled.p`
  color: #eee;
`;

const PostCommentsWrapper = styled.div`
  margin-top: 20px;
`;

const StyledPost = styled.div`
  margin: auto;
  padding: 30px;
  max-width: 600px;
  border-radius: 12px;
  background-color: ${colorsPallete.purple};
`;

const LikeButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${colorsPallete.lightPurple};
  color: #eee;
  border-style: none;
  border-radius: 8px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  font-size: 1.75rem;
`;

function Post ({ title, content }) {
  const [likesCount, setLikesCount] = useState(0);

  function handleLikeClick () {
    setLikesCount(likesCount + 1);
  }

  function handleResetClick () {
    setLikesCount(0);
  }

  return (
    <StyledPost>
      <PostTitle>First Post Title</PostTitle>
      <PostContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora animi placeat assumenda adipisci ratione praesentium nihil voluptatum autem quidem sequi natus omnis, distinctio optio dolorem neque qui non amet.</PostContent>
      <PostReaction>
        <Wrapper>
          <LikeButton onClick={handleLikeClick}>Like</LikeButton>
          <LikeButton onClick={handleResetClick}>ResetLikes</LikeButton>
          <StyledSpan className="likeCount">{likesCount}</StyledSpan>
        </Wrapper>
        <PostCommentsWrapper>
          <PostComment></PostComment>
          <PostComment></PostComment>
          <PostComment></PostComment>
        </PostCommentsWrapper>
      </PostReaction>
    </StyledPost>
  )
}

export default Post;