import styled from "styled-components";

const MenuItemBtnLayout = styled.div`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.pointColor};
  background: ${(props) => props.theme.colors.basic2Color};
  height: 100%;
  width: 40px;
  height: 40px;
  font-size: 18px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export { MenuItemBtnLayout };
