import styled from "styled-components";

const SideBarItemLayout = styled.div`
  width: 220px;
  height: 40px;
  margin: 10px 10px 0 10px;
  background: ${(props) => props.theme.colors.basicColor};
  color: ${(props) => props.theme.colors.defaultColor};
  border-radius: 5px;
  padding: 4px;
`;
const SideBarItemTitle = styled.span`
  margin-left: 8px;
  font-size: 14px;
  font-weight: bold;
`;

const SideBarItemWrapper = styled.div`
  width: 100px;
  height: 100%;
  background: ${(props) => props.theme.colors.pointColor};
  border-radius: 5px;
  padding: 5px;
`;

const SideBarItemContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export {
  SideBarItemLayout,
  SideBarItemContainer,
  SideBarItemWrapper,
  SideBarItemTitle,
};
