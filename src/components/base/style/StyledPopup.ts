import styled from "styled-components";

const PopupLayout = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 66666;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const PopupContainer = styled.div`
  flex-grow: 1;
  max-width: 680px;
  margin: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 1px ${(props) => props.theme.colors.shadowColor};
`;
const PopupWrapperHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PopupWrapperBody = styled.div`
  padding: 16px;
`;
const PopupWrapperFooter = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
`;
export {
  PopupLayout,
  PopupContainer,
  PopupWrapperHeader,
  PopupWrapperBody,
  PopupWrapperFooter,
};
