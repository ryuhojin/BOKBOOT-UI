import styled from "styled-components";

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  background: #111;
`;

const ContentBottom = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  padding-top: calc((100px - 40px - 14.5px) / 3);
`;

export { ContentLayout, ContentWrapper, ContentBottom };
