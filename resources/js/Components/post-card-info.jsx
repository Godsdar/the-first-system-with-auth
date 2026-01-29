import styled from "styled-components";

export const StyledPostCardInfo = styled.div`
  padding: 12px;
`;

export const CardPostImage = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100px;
  background-color: #7471c9;
  border-radius: 10px 10px 0 0;
`;

export const CardPostText = styled.div`
  line-height: 1.4em;
`;

export const CardTitle = styled.h2`
  color: inherit;
`;

export function PostCardInfo ({ titleText, subtitleText }) {
  return (
    <StyledPostCardInfo>
      <CardTitle>{titleText}</CardTitle>
      <CardPostText>{subtitleText}</CardPostText>
      <a href="contacts">Learn More</a>
    </StyledPostCardInfo>
  );
}
