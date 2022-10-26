import styled from "styled-components";

const BtnLayout = styled.div`
  cursor: pointer;
  width: 120px;
  border-radius: 25px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.toggleColor};
  color: ${(props) => props.theme.colors.editorColor};
  box-shadow: 0px 0px 10px 1px ${(props) => props.theme.colors.shadowColor};
  span {
    font-size: 14px;
  }
  user-select: none;
`;
export { BtnLayout };
