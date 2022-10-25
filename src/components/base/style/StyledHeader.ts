import styled from "styled-components";

const HaaderLayout = styled.header`
  width: 100%;
  height: 60px;
`;
const HeaderContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 100%;
  margin: auto;
`;
const HeaderWrapper = styled.div`
  padding: 0 24px;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
  display: flex;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const HeaderDescription = styled.span`
  font-size: 10px;
`;

const HeaderDarkMode = styled.div`
  align-self: center;
  width: 60px;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.editorColor};
  height: 30px;
`;

export {
  HaaderLayout,
  HeaderContainer,
  HeaderLeft,
  HeaderDarkMode,
  HeaderWrapper,
  HeaderTitle,
  HeaderDescription,
};
