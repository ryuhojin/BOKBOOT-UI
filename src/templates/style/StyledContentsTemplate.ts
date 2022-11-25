import styled from "styled-components";

const ContentsLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ContentsWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  background-color: ${(props) => props.theme.colors.basic2Color};
`;

const ContentsMultiItemZone = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  padding-top: calc((100px - 40px - 14.5px) / 3);
`;

const ContentsBottom = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  padding-top: calc((100px - 40px - 14.5px) / 3);
`;

export {
  ContentsLayout,
  ContentsWrapper,
  ContentsMultiItemZone,
  ContentsBottom,
};
