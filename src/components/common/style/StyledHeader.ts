import styled from "styled-components";

const HeaderLayout = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const HeaderLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderTitle = styled.span`
  font-size: 14px;
  font-weight: bolder;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.pointColor};
  }
`;

const HeaderDescription = styled.span`
  font-size: 10px;
`;

const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export {
  HeaderLayout,
  HeaderLeftWrapper,
  HeaderTitle,
  HeaderDescription,
  HeaderRightWrapper,
};
