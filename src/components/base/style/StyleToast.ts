import styled from "styled-components";

const ToastLayout = styled.div`
  margin: 0 auto;
  position: absolute;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 80px;
`;

const ToastContainer = styled.div`
  background: ${(props) => props.theme.colors.toastBgColor};
  padding: 10px 20px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.toastTextColor};
`;
export { ToastLayout, ToastContainer };
